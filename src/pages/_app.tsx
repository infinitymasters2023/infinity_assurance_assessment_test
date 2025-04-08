import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // ✅ MDB styles
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
