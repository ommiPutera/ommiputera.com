import { XIcon } from "@heroicons/react/solid";
import Head from "next/head";
import React from 'react'
import Button from '../../components/button';
import CenterContent from '../../components/centerContent'

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputs.name || !inputs.email || !inputs.message) {
      setError(true)
    } else {
      setLoading(true)
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: inputs.name,
          email: inputs.email,
          message: inputs.message
        })
      }).then((res) => {
        if (res.status === 201) {
          setInputs({
            name: "",
            email: "",
            message: "",
          })
          setError(false)
          setSubmitted(true)
          setLoading(false)
        }
      }).catch((err) => err && setError(true))
    }

  }


  return (
    <React.Fragment>
      <Head>
        <title>Ommi Putera - Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="min-h-screen">
        <CenterContent>
          <div>
            <div className="animate__text">
              <h1 className='text-3xl lg:text-[27px] 2xl:text-[30px] leading-[39px] lg:leading-[34px] 2xl:leading-[36px] font-medium'>Let's start a <br /> <span className='text-brown font-medium'>Project</span> Together</h1>
              {
                submitted
                &&
                <div className="flex justify-between bg-green-300/70 text-black-400 py-2.5 px-4 mt-7 text-center text-sm rounded-md animate__text">
                  <h1>Your message has been sent to Ommi!</h1>
                  <button onClick={() => setSubmitted(false)}>
                    <XIcon className="h-4 w-4 text-black " />
                  </button>
                </div>
              }
              {
                error
                &&
                <div className="flex justify-between items-center space-x-3 bg-red-100/70 text-black-400 py-2.5 px-4 mt-7 text-center text-sm rounded-md animate__text">
                  <h1>Your message can't be sent to Ommi, please fill in all the fields or check your connection.</h1>
                  <button onClick={() => setError(false)}>
                    <XIcon className="h-4 w-4 text-black " />
                  </button>
                </div>
              }
            </div>
            <form onSubmit={handleSubmit} className="mt-7 space-y-6 animate__text">
              <div className="space-y-1">
                <h3 className="font-medium">What's your name?</h3>
                <input
                  type="text"
                  name="name"
                  value={inputs.name}
                  placeholder="John Doe*"
                  onChange={handleChange}
                  className="bg-transparent autofill__block outline-none placeholder-shown:border-gray-300 text-black text-base border-b-2 border-brown pt-2 pb-2 w-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">What's your email?</h3>
                <input
                  type="email"
                  name="email"
                  value={inputs.email}
                  placeholder="john@example.com*"
                  onChange={handleChange}
                  className="bg-transparent autofill__block outline-none placeholder-shown:border-gray-300 text-black text-base border-b-2 border-brown pt-2 pb-2 w-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Your Message</h3>
                <textarea
                  rows={3}
                  type="text"
                  name="message"
                  value={inputs.message}
                  onChange={handleChange}
                  placeholder="Hello Ommi can you help me with ..*"
                  className="resize-none bg-transparent outline-none placeholder-shown:border-gray-300 text-black text-base border-b-2 border-brown pt-2 pb-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={!inputs.name && !inputs.email && !inputs.message}
                  onClick={handleSubmit}
                  className={`${loading && "opacity-95"}`}
                  title={`${loading ? "Sending.." : "Send"}`}
                />
              </div>
            </form>
          </div>
          <div>
            right
          </div>
        </CenterContent>
      </div>
    </React.Fragment>
  )
};