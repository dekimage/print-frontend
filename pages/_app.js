import "../styles/globals.scss";
import React from "react";
import Head from "next/head";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
});

const MyApp = ({ Component, pageProps }) => {
  MyApp.getInitialProps = async ({ Component, router, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  };

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Print Cards App</title>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
