import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import Layout from "../components/Layout/Layout";

function MyApp(props: AppProps) {
  return (
    <Provider store={store}>
      <Layout {...props} />
    </Provider>
  );
}

export default MyApp;
