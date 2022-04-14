import Head from "next/head";
import React from 'react'
import CenterContent from '../../components/centerContent'

export default function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Ommi Putera - Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="min-h-screen">
        <CenterContent>
          <div>
            <h1 className='text-3xl lg:text-[30px] leading-[39px] lg:leading-[36px] font-medium animate__text'>Let's start a <br /> <span className='text-brown font-medium'>Project</span> Together</h1>
          </div>
          <div>
            right
          </div>
        </CenterContent>
      </div>
    </React.Fragment>
  )
};