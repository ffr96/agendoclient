import Router from "next/router";
import { useEffect } from "react";
import { url } from "../utils/url";
import { useFetch } from "./useFetch";

export const useUser = ({
  redirectTo = '',
  redirectIfFound = false,
}) => {
  const { data, fetcher, errorMessage } = useFetch(url);
  
  useEffect(() => {
    if (!redirectTo && !data) return;
    if ((redirectTo && !redirectIfFound && (data?.token === undefined)) || 
        (redirectIfFound && data?.token)) {
      Router.push(redirectTo);
    }
  }, [data, redirectIfFound, redirectTo]);

  return {data, fetcher, errorMessage} ;
};