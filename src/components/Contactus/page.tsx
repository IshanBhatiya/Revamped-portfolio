"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';

export default function Page() {

  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e:any) => {
    e.preventDefault();

    const emailParams = {
      email: formData.email,  
      message: formData.message,  
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!'); 

          // Reset form to initial state
        setFormData({
          email: '',
          message: '',
        });
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <>
      <div className="container mt-16 p-6" id='contact'>
        <h2 className="text-center text-3xl">Contact Me</h2>

        <div className="flex flex-wrap items-center justify-evenly ">
          <div className="mt-10">
            <form className="p-10 flex flex-col gap-6" onSubmit={sendEmail}>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-400 text-sm font-semibold mb-1"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:border-purple-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="textarea"
                  className="text-gray-400 text-sm font-semibold mb-1"
                >
                  How Can We Help You?
                </label>
                <textarea
                  name="message"
                  id="textarea"
                  rows={4}
                   value={formData.message}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:border-purple-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-gray-400 font-semibold py-2 rounded-md hover:bg-white hover:text-gray-800 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-center text-xl mb-10">Drop a message Anywhere!</h3>
            <div className="flex shadow-lg animate-pulse">

              <a href="https://github.com/IshanBhatiya">
                <Image
                  className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer"
                  src="/assets/social/download.png"
                  width={60}
                  height={60}
                  title="Git-Hub"
                  alt="Picture of the Git-Hub"
                />
              </a>
              <a href="https://discordapp.com/users/1260548884825112631/">
                <Image
                  className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer"
                  src="/assets/social/discord.png"
                  width={60}
                  height={60}
                  title="Git-Hub"
                  alt="Picture of the Discord"
                />
              </a>

              <a href="https://www.linkedin.com/in/ishan-bhatia-129321217/">
                <Image
                  className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer"
                  src="/assets/social/LinkedIn.png"
                  width={60}
                  height={60}
                  title="Linked-In"
                  alt="Picture of the Linked-In"
                />
              </a>

              <a href="https://www.instagram.com/ishaan.bhatia.12/">
                <Image
                  className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer"
                  src="/assets/social/instagram.png"
                  width={60}
                  height={60}
                  title="Instagram"
                  alt="Picture of the Instagram"
                />
              </a>

              <a href="https://www.facebook.com/ishan.bhatia.52">
                <Image
                  className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer me-4"
                  src="/assets/social/facebook.png"
                  width={60}
                  height={60}
                  title="FaceBook"
                  alt="Picture of the FaceBook"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
