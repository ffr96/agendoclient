import { useState } from "react";
import useAuthStorage from "./useAuthStorage";

export const useFetch = (url) => {
  const [ data, SetData ] = useState();
  const [ errorMessage, SetErrorMessage ] = useState('');
  const storage = useAuthStorage();
  const user = storage.getAccessToken();
  const fetcher = async(username, password) => { 
    try {
      const res = await fetch(`${url}/api/u/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      if (res.ok) {
        const parsed = await res.json();
        SetData(parsed);
        storage.setAccessToken(parsed);
      } else {
        SetErrorMessage('Usuario o contraseña incorrecta');
        setTimeout(() => {
          SetErrorMessage('');
        }, 2000);
      }
    } catch(e) {
        SetErrorMessage('Error al ingresar');
        setTimeout(() => {
          SetErrorMessage('');
        }, 2000);
    }
  };

  if (user) {
    return {data:user, fetcher};
  }
  
  return {data, fetcher, errorMessage};
};