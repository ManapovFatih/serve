import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import App from "./App";
import moment from "moment";
import momentRu from "moment/locale/ru";
import { NotificationContainer } from "react-notifications";
moment.updateLocale("ru", momentRu);
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <PersistGate persistor={persistor}>
        <App />
        <NotificationContainer />
      </PersistGate>
    </I18nextProvider>
  </Provider>
);
