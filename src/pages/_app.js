// import "../styles/globals.css";

// function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default App;
import "../styles/globals.css";
import Header from "../component/Header/Header.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
