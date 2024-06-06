import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Messages from '../pages/account/Messages';
import MessagesDialogue from '../pages/account/MessagesDialogue';
import useIsMobile from '../hooks/isMobile';

const MessagesRouter = () => {
  const isMobileXL = useIsMobile('1199px');
  return (
    <Routes>
      <Route path="/" element={<Messages isMobileXL={isMobileXL} />} />
      {
        (!isMobileXL)
          ? <Route path="/:dialogId" element={<Messages isMobileXL={isMobileXL} />} />
          : <Route path="/:dialogId" element={<MessagesDialogue />} />
      }
    </Routes>
  );
};

export default MessagesRouter;
