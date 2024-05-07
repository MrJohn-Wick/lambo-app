import '../styles/globals.css'
import Layout from "./layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
