import { useState } from 'react';

export const useAlert = () => {
  const [msg, SetMsg] = useState('');
  const [msgtype, SetMsgtype] = useState('');
  const [timer, SetTimer] = useState('');

  const callAlert = (message, type, timer = 2000) => {
    SetMsg(message);
    SetMsgtype(type);
    SetTimer(timer);
    setTimeout(() => {
      SetMsg('');
      SetMsgtype('');
    }, (timer));
  };

  return({msg, msgtype, timer, callAlert});
};