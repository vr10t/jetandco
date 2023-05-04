import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "~/components/Footer";
import MainPage from "~/components/MainPage";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JET &amp; CO. | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content=" Jet &amp; Co. is a family owned and operated business that specializes in residential and commercial pressure washing. We are located in the heart of the DFW metroplex and service the entire Dallas/Fort Worth area. We are fully insured and guarantee our work. We offer a variety of services including: Driveway Cleaning, House Washing, Gutter Cleaning, Window Cleaning, and much more. We are committed to providing the highest quality service at an affordable price. We look forward to serving you! "
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
<link href="https://fonts.googleapis.com/css2?family=Hepta+Slab&family=Poppins&display=swap" rel="stylesheet"/>

      </Head>
      <Navbar />
      <main>
        <div className="relative flex min-h-screen flex-col">
          <Image
            loading="eager"
            className="max-h-screen min-h-screen w-full object-cover object-center brightness-75"
            unoptimized
            src="pressure-washer-front-of-house.png"
            alt="Pressure washer cleaning front of house"
            width={1500}
            height={1500}
          />
          <div className="absolute left-0 top-0 flex min-h-full w-full flex-col items-center justify-center gap-8 self-center px-4 py-16 text-center ">
            <h1 className="font-poppins text-5xl font-semibold tracking-wide text-white sm:text-[5rem] xl:text-[7rem]">
              Welcome to JET &amp; CO.{" "}
            </h1>
            <p className="mt-3 max-w-2xl text-2xl text-white sm:mt-5 sm:text-4xl font-hepta">
              Your Satisfaction is Our Priority.
            </p>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <MainPage />
      </main>
      <Footer />
    </>
  );
};

export default Home;
