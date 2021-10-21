// import '../styles/globals.css';
// import '../styles/style.css';
// import '../styles/responsive.css';
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import 'tailwindcss/tailwind.css'
// import { store } from "../store";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    // <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </Provider>
  )
}

export default MyApp
