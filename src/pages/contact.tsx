import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

const Contact: NextPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  });
  const formRef = React.useRef<HTMLFormElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <Layout title="Contact Us">
      <div className="w-full px-8 py-24 mx-auto text-start bg-blue-100 my-12 rounded-lg grid grid-cols-1 gap-8 /50 md:grid-cols-2">
        <div className="flex flex-col justify-start">
          <div>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Request your Free Estimate 
            </h2>
            <div className="mt-8 text-gray-700 ">
              Get a quote by filling out the form below and we will get back to you as soon as possible.
            </div>
          </div>
          <div className="mt-4 relative h-56 text-center">
            <Image
              className="object-cover"
              fill
              src="/contact.webp"
              alt="Contact"
            />
          </div>
          <div className="mt-8 text-gray-700 ">
            <p className="text-xl font-bold leading-tight lg:text-3xl">
              Hate forms?
            </p>
            <div className="mt-4">
              <p>
                Just give us a call at{" "}
                <a className="text-blue-500" href="tel:123-456-7890">
                  123-456-7890
                </a>{" "}
                and we will be happy to help you.
              </p>
            </div>
            </div>
        </div>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div>
            <span className="text-sm font-bold text-gray-600 uppercase ">
              Full Name <span className="text-red-500">*</span>
            </span>
            <input
              id="name"
              name="name"
              className="w-full p-3 mt-2 rounded-lg focus:shadow-outline bg-primary-100 focus:ring-primary-400 focus:outline-none focus:ring-2 "
              type="text"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold text-gray-600 uppercase ">
              Email <span className="text-red-500">*</span>
            </span>
            <input
              id="email"
              className="w-full p-3 mt-2 rounded-lg focus:shadow-outline bg-primary-100 focus:ring-primary-400 focus:outline-none focus:ring-2 "
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold text-gray-600 uppercase ">
              Phone Number <span className="text-red-500">*</span>
            </span>
            <input
              id="phone"
              className="w-full p-3 mt-2 rounded-lg focus:shadow-outline bg-primary-100 focus:ring-primary-400 focus:outline-none focus:ring-2 "
              type="tel"
              placeholder="Enter your Phone Number including country code"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold text-gray-600 uppercase ">
              Post Code <span className="text-red-500">*</span>
            </span>
            <input
              id="postcode"
              className="w-full p-3 mt-2 rounded-lg focus:shadow-outline bg-primary-100 focus:ring-primary-400 focus:outline-none focus:ring-2 "
              type="text"
              value={formData.postcode}
              onChange={(e) =>
                setFormData({ ...formData, postcode: e.target.value })
              }
              placeholder="Enter your Post Code"
              required
            />
          </div>

          <div className="mt-8">
            <span className="text-sm font-bold text-gray-600 uppercase ">
              Message
            </span>
            <textarea
              id="message"
              className="w-full h-32 p-3 mt-2 rounded-lg focus:shadow-outline bg-primary-100 focus:ring-primary-400 focus:outline-none focus:ring-2 "
              placeholder="Enter your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mt-8">
            <button
              className="w-full p-3 text-sm font-bold tracking-wide text-gray-700 uppercase rounded-lg focus:shadow-outline bg-blue-300 hover:bg-primary-700 focus:outline-none"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default Contact;
