import React from "react"
import Head from "next/head";
import Home from "../screens/home";

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Ommi P. Karunia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home />
    </React.Fragment >
  )
}
