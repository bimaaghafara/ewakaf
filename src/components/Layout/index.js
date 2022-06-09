import { useEffect } from "react";
import Head from 'next/head';

export default function Layout(props) {
    const { children } = props;

    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        {children}
      </div>
    )
}