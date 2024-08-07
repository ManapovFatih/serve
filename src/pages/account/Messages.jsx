import { useTranslation } from 'react-i18next';
import moment from "moment";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import Meta from "../../components/Meta";
import Chat from "../../components/chat/Chat";
import ReturnIcon from '../../components/svg/ReturnIcon';
import Loader from "../../components/utils/Loader";
import ReturnTitle from '../../components/utils/ReturnTitle';
import socket from "../../config/socket";
import {
  createMessage,
  createMessageGeneral,
  getDialogs,
  getMessages,
  getMessagesGeneral
} from "../../services/message";
import DialogPreview from './DialogPreview';
import { getImageURL } from "../../helpers/all";
import { updateNotification } from "../../store/reducers/notificationSlice";
import InfiniteScroll from "react-infinite-scroller";
import { Container } from "react-bootstrap";


const Messages = ({ isMobileXL }) => {
  const { t } = useTranslation();
  const { dialogId } = useParams();
  const { state } = useLocation();
  const timer = useRef(0);
  const userId = useSelector(state => state.auth?.user?.id);
  const navigate = useNavigate();
  // const message = useSelector((state) => state.notification.message);
  const [search, setSearch] = useState('');

  const { control, reset, setValue } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      id: state?.dialogId ?? dialogId,
    },
  });

  const data = useWatch({ control });

  const [print, setPrint] = useState(false);

  const [dialogs, setDialogs] = useState({
    loading: true,
    items: [],
  });

  const [messages, setMessages] = useState({
    loading: true,
    items: [],
  });
  const dispatch = useDispatch();
  const onLoadDialogs = (data) => {
    dispatch(updateNotification({ message: -1 }))
    getDialogs({ page: data, search: search, size: 7 })
      .then((res) => {
        setDialogs((prev) => ({
          ...prev,
          loading: false,
          items: [...prev.items, ...res.dialogs],
          hasMore: res.dialogs.length > 6 ? true : false,
          count: res.countOnline,
        }))
      }
      )
      .catch(() => setDialogs((prev) => ({ ...prev, loading: false })));
  };
  useEffect(() => {
    onLoadDialogs();
  }, []);

  useEffect(() => {
    (state?.dialogId || dialogId) &&
      setValue("id", state?.dialogId ?? dialogId);
  }, [state?.dialogId, dialogId]);

  useEffect(() => {
    if (data?.id) {

      getMessages(data)
        .then((res) => {
          setMessages((prev) => ({
            ...prev,
            loading: false,
            items: res.messages.items,
            dialog: res.dialog,
            dialog: res.dialog,
          }));
        })
        .catch(() => setMessages((prev) => ({ ...prev, loading: false })));
    }

  }, [data?.id]);

  useEffect(() => {
    const handleMessage = (data) => {
      setPrint(false);

      setMessages(prev => {
        if (data.status) {
          return {
            ...prev,
            loading: false,
            items: [data, ...prev.items],
          };
        } else {
          const messageIndex = prev.items.findIndex(item => item.id === data.id);

          if (messageIndex !== -1) {
            const updatedMessages = [...prev.items];
            updatedMessages[messageIndex] = data;

            return {
              ...prev,
              loading: false,
              items: updatedMessages,
            };
          }

          return prev;
        }
      });
    };


    if (data?.id) {
      socket.emit("createRoom", "message/" + data.id);
      socket.on("message", handleMessage);
      socket.on("report", handleMessage);

      return () => {
        socket.emit("removeRoom", "message/" + data.id);
        socket.off("message", handleMessage);
        socket.off("report", handleMessage);
      };
    }
  }, [data?.id]);

  useEffect(() => {
    if (timer.current === 0 && data?.text?.length > 0) {
      timer.current = setTimeout(() => {
        setPrint(false);
        timer.current = null;
      }, 5000);
      setPrint(true);
      socket.emit("message/print", { adminId: data.id });
      return () => clearTimeout(timer.current);
    }
  }, [data?.text]);

  const onNewMessage = useCallback(
    (text) => {
      createMessage(data);
      reset({ id: data.id ?? dialogId });
    },
    [data, state, dialogId]
  );
  const user =
    userId == messages?.dialog?.to?.id
      ? messages?.dialog?.from
      : messages?.dialog?.to;

  const onTask = useCallback(() => {
    createTask({ type: "report", userId: user.id })
      .then(() => {
        NotificationManager.success(t('Жалоба отправлена'));

      })
      .catch((err) => {
        NotificationManager.error(
          err?.response?.data?.error ?? t('Ошибка при отправке')
        );
      });
  }, [user]);


  const onKeyPress1 = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setDialogs((prev) => ({
        ...prev,
        items: "",
      }))
      onLoadDialogs();
    }
  };

  if (dialogs.loading) {
    return <Loader full />;
  }

  return (
    <main className='py-4 py-sm-5'>
      <Container>
        <Meta title={t('Сообщения')} />
        <ReturnTitle link={'/account'} title={t('Сообщения')} />
        <section className='sec-messages'>

          <div className='sec-messages-list'>
            <form action="" className='p-2 p-sm-3'>
              <input
                type="search"
                placeholder={t('Поиск пользователя')}
                className="p-blue"
                onChange={e => setSearch(e.target.value)}
                onKeyPress={(e) => onKeyPress1(e)}
              />
            </form>

            <ul id="scrollableDiv" >
              <InfiniteScroll
                useWindow={false}
                pageStart={1}
                loadMore={onLoadDialogs}
                hasMore={dialogs.hasMore}
                loader={<Loader />}
                getScrollParent={() => document.getElementById('scrollableDiv')}
              >
                {dialogs?.items?.length > 0 ? (
                  dialogs.items.map((dialog) => (
                    <li key={dialog.id}>
                      <DialogPreview {...dialog} userId={userId} />
                    </li>
                  ))
                ) : (
                  <p className="w-100 py-5 text-center text-muted fs-09 d-flex flex-column align-items-center justify-content-center">
                    {t('В данный момент нет диалогов')}
                  </p>
                )}
              </InfiniteScroll>
            </ul>


          </div>

          {!isMobileXL &&
            <div className="sec-messages-chat">
              {!data?.id ? (
                <div className="d-flex align-items-center flex-column">
                  <h2 className="mb-3 mt-5">{t('Выберите диалог')}</h2>
                  <p className="text-center gray">
                    {t('В данный момент нет диалогов.')} <br />{t('Возможно вы не выбрали')}
                    {t('конкретный диалог.')}
                  </p>
                </div>
              ) : messages.loading ? (
                <div className="h-100 d-flex align-items-center justify-content-center flex-column">
                  <Loader />
                </div>
              ) : (
                <>
                  {user && (
                    <div className="sec-messages-chat-top">
                      <button type="button" onClick={() => navigate(-1)} className='d-flex align-items-center d-xl-none return-icon ms-4 mb-2'>
                        <ReturnIcon />
                      </button>
                      <div>
                        <h5 className="fw-7 mb-0"><Link to={`/trader/${user.id}`}>{user.nickname}</Link></h5>
                        <p className="fs-08 gray">
                          {print ? (
                            t('Печатает сообщение...')
                          ) : user.online?.status ? (
                            <span className="text-success">{t('Онлайн')}</span>
                          ) : user.online?.end ? (
                            t('Был(-а) в сети') +
                            moment(user.online?.end).fromNow()
                          ) : (
                            t('Оффлайн')
                          )}
                        </p>
                      </div>

                    </div>
                  )}
                  <Chat
                    // print={print}
                    onTask={(e) => onTask(e)}
                    account="true"
                    user={user}
                    messages={messages}
                    emptyText={t('Нет сообщений')}
                    onSubmit={(e) => onNewMessage(e)}
                    onChange={(e) => setValue("text", e)}
                    data={data}
                    setImage={(e) => setValue("media", Array.from(e))}
                  />
                </>
              )}
            </div>
          }

        </section >
      </Container>
    </main >
  );


};

export default Messages;