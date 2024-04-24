import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.min.css";
import Loader from "./components/utils/Loader";
import AppRouter from "./routes/AppRouter";

import axios from "axios";
import socket from "./config/socket";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, logout } from "./services/auth";
import { setAuth, setUser } from "./store/reducers/authSlice";
import { setSettings } from "./store/reducers/settingsSlice";
import { setNotification, updateNotification } from "./store/reducers/notificationSlice";


function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) {
      socket.on('notification', (data) => {
        if (data) {
          dispatch(updateNotification(data))
        }
      })
    }
  }, [isAuth]);
  useEffect(() => {
    (async () =>
      await axios
        .get("https://ip.yooapp.ru")
        .then(
          ({ data }) => data?.ip && dispatch(setSettings({ ip: data.ip }))
        ))();

    if (localStorage.getItem("token")) {
      checkAuth()
        .then((data) => {
          if (data && data.status === 0) {
            dispatch(logout());
          } else {
            if (data?.message) {
              dispatch(
                setNotification({
                  message: data.message,
                })
              )
            }
            data && dispatch(setUser(data));
            data && dispatch(setAuth(true));
          }
        })
        .catch(() => dispatch(logout()))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      socket.io.opts.query = false
      socket.connect();
    }

  }, []);

  if (loading) {
    return <Loader full />;
  }

  return <AppRouter />;
}

export default App;
