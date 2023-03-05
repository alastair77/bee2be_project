import Head from "next/head";
// import { Html, Head, Main, NextScript } from 'next/document'
import Navigation from "./navigation";

const Container = (props) => {
  return (
    <div>
      <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"        
      />        
      </Head>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
