import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setItems } from "../../store/slice/items/items";

export default function Layout({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    const getItems = async () => {
      const { data } = await axios.get(
        "https://624339c0b6734894c15c6729.mockapi.io/items"
      );
      dispatch(setItems(data));
    };

    getItems();
  }, [dispatch]);

  return <Component {...pageProps} />;
}
