import { useTranslation } from 'react-i18next';
import moment from "moment";
import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { getImageURL } from '../../helpers/all';


const Message = ({ my, userId, general, createdAt, media, text, name, admin, user, view, type, status }) => {
const {t} = useTranslation();
  const image = getImageURL({ path: user?.media, size: "mini", type: "user" })
  const [showShare, setShowShare] = useState(false);
  const time = createdAt
    ? moment(createdAt).format("DD.MM.YYYY kk:mm")
    : moment().format("DD.MM.YYYY kk:mm");
  return (


    <>
      {my ? (
        <div className="chat-window-message-mine">
          <div className='text'>
            <div className='gray fs-08 d-flex align-items-center mb-2'>
              {type == "system" &&
                <h6 className="name me-2">{t('Системное сообщение')}</h6>

              }
              <time className='me-2'>
                {time}
              </time>
              {view ? (
                <IoCheckmarkDoneOutline className="text-success ms-1" size={15} />
              ) : (
                <IoCheckmarkOutline className="ms-1" size={15} />
              )}

            </div>
            {status ?
              <div className={type == "system" ? "bubble-system" : "bubble"}>
                {type == "system" ?
                  <div className='system-border'>
                    {text && <p>{text}</p>}
                  </div>
                  :
                  <div>
                    {text && <p>{text}</p>}
                    {media &&
                      <img src={getImageURL({ path: media, size: "", type: "message" })} onClick={setShowShare} className="bubble-img" />
                    }
                  </div>
                }
              </div>
              :
              <i className='bubble-ban'>{t('Сообщение заблокировано администрацией')}</i>
            }
          </div>
          {type == "system" ?
            <img src="/imgs/user.png" alt={name} />
            :
            <img src={image} alt={name} />
          }
        </div>

      ) : (
        admin ? (
          <div className="chat-window-message">
            <img src={image} alt={name} />
            <div className='text'>
              <div className='gray fs-08 d-flex align-items-center mb-2'>
                <h6 className="me-2 fs-12">ADMIN </h6>
                <time className='me-2'> {time}</time>

              </div>
              <div className="bubble-admin">
                {text && <p>{text}</p>}
                {media &&
                  <img src={getImageURL({ path: media, size: "", type: "message" })} onClick={setShowShare} className="bubble-img" />
                }
              </div>
            </div>
          </div>
        ) : (
          <div className="chat-window-message">
            <div className="chat-box-user">
              <Link to={"/profile/" + userId}>
                {type == "system" ?
                  <img src="/imgs/user.png" alt={name} />
                  :
                  <img src={image} alt={name} />
                }
              </Link>

            </div>
            <div className='text'>
              <div className='gray fs-08 d-flex align-items-center mb-2'>
                {general == "general" &&
                  <Link to={"/profile/" + userId}>
                    <h6 className="name me-2">{user?.nickname}</h6>
                  </Link>

                }
                {type == "system" &&
                  <h6 className="name me-2">{t('Системное сообщение')}</h6>

                }
                <time className='me-2'>{time}</time>
              </div>
              {status ?
                <div className={type == "system" ? "bubble-system" : "bubble"}>
                  {type == "system" ?
                    <div className='system-border'>
                      {text && <p>{text}</p>}
                    </div>
                    :
                    <div>
                      {text && <p>{text}</p>}
                      {media &&
                        <img src={getImageURL({ path: media, size: "", type: "message" })} onClick={setShowShare} className="bubble-img" />
                      }
                    </div>
                  }
                </div>
                :
                <i className='bubble-ban'>{t('Сообщение заблокировано администрацией')}</i>
              }
            </div>
          </div>
        )
      )}
      <Modal show={showShare} onHide={setShowShare} centered size="xl" className='modal'>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='modal-dialog'>
          <img src={getImageURL({ path: media, size: "", type: "message" })} onClick={setShowShare} className="modal-img" />
        </Modal.Body>
      </Modal>
    </>
  )
};
export default Message;