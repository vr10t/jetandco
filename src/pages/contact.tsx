/* eslint-disable @typescript-eslint/no-misused-promises */

import { type NextPage } from "next";
import Image from "next/image";
import React, { useEffect } from "react";
import Layout from "../components/Layout";

const Contact: NextPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const formRef = React.useRef<HTMLFormElement>(null);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess("");
    setError("");
    const response = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      setError("Something went wrong");
      return;
    }

    const data = await (response.json() as Promise<{ message: string }>);
    if (data) {
      setSuccess("Thank you for your request. We will get back to you soon.");
    }
  }
  useEffect(() => {
    if (success) {
      if (formRef.current) {
        const timer = setTimeout(() => {
          formRef.current!.reset();
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [success]);

  return (
    <Layout title="Contact Us">
      <div className="/50 mx-auto my-12 grid w-full grid-cols-1 gap-8 rounded-lg bg-blue-100 px-8 py-24 text-start md:grid-cols-2">
        <div className="flex flex-col justify-start">
          <div>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Request your Free Estimate
            </h2>
            <div className="mt-8 text-gray-700 ">
              Get a quote by filling out the form below and we will get back to
              you as soon as possible.
            </div>
          </div>
          <div className="relative mt-4 h-56 text-center">
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
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          onReset={() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              postcode: "",
              message: "",
            });
            setError("");
            setSuccess("");
          }}
        >
          <div>
            <span className="text-sm font-bold uppercase text-gray-600 ">
              Full Name <span className="text-red-500">*</span>
            </span>
            <input
              id="name"
              name="name"
              className="focus:shadow-outline bg-primary-100 focus:ring-primary-400 mt-2 w-full rounded-lg p-3 focus:outline-none focus:ring-2 "
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
            <span className="text-sm font-bold uppercase text-gray-600 ">
              Email <span className="text-red-500">*</span>
            </span>
            <input
              id="email"
              className="focus:shadow-outline bg-primary-100 focus:ring-primary-400 mt-2 w-full rounded-lg p-3 focus:outline-none focus:ring-2 "
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
            <span className="text-sm font-bold uppercase text-gray-600 ">
              Phone Number <span className="text-red-500">*</span>
            </span>
            <input
              id="phone"
              className="focus:shadow-outline bg-primary-100 focus:ring-primary-400 mt-2 w-full rounded-lg p-3 focus:outline-none focus:ring-2 "
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
            <span className="text-sm font-bold uppercase text-gray-600 ">
              Post Code <span className="text-red-500">*</span>
            </span>
            <input
              id="postcode"
              className="focus:shadow-outline bg-primary-100 focus:ring-primary-400 mt-2 w-full rounded-lg p-3 focus:outline-none focus:ring-2 "
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
            <span className="text-sm font-bold uppercase text-gray-600 ">
              Message
            </span>
            <textarea
              id="message"
              className="focus:shadow-outline bg-primary-100 focus:ring-primary-400 mt-2 h-32 w-full rounded-lg p-3 focus:outline-none focus:ring-2 "
              placeholder="Enter your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              {error && (
                <div className="text-sm font-bold text-red-500">{error}</div>
              )}
              {success && (
                <div className="text-sm font-bold text-green-500">
                  {success}
                </div>
              )}
            </div>
            <button
              className="focus:shadow-outline hover:bg-primary-700 w-full rounded-lg bg-blue-300 p-3 text-sm font-bold uppercase tracking-wide text-gray-700 focus:outline-none"
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
