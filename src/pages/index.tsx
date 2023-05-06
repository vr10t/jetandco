import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "~/components/Footer";
import MainPage from "~/components/MainPage";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  const strucutredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jet & Co",
    image: ["https://jetandco.co.uk/og-image.webp"],
    telephone: "01442250000",
    email: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 Pheasant Close",
      addressLocality: "Berkhamsted",
      addressRegion: "Hertfordshire",
      postalCode: "HP4 2HQ",
      addressCountry: "UK",
    },
    areaServed: "UK",
    priceRange: "£",
    paymentAccepted: "Cash, Card",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "299",
    },
    description:
      "Experience exceptional exterior cleaning results with Jet & Co! We specialize in driveway, roof, and concrete pressure washing services for both residential and commercial clients. Get a FREE quote today and boost your property's curb appeal",
    identifier: {
      "@type": "PropertyValue",
      name: "Jet & Co",
      value: "https://jetandco.co.uk/",
    },
    keywords:
      "pressure washing, pressure washing near me, pressure washing services, pressure washing company, pressure washing business, pressure washing service, pressure washing companies, pressure washing business near me, pressure washing service near me, pressure washing companies near me, pressure washing business in my area, pressure washing service in my area, pressure washing companies in my area, pressure washing business near me, pressure washing service near me, pressure washing companies near me, pressure washing business in my area, pressure washing service in my area, pressure washing companies in my area, pressure washing business near me, pressure washing service near me, pressure washing companies near me, pressure washing business in my area, pressure washing service in my area, pressure washing companies in my area, pressure washing business near me, pressure washing service near me, pressure washing companies near me, pressure washing business in my area, pressure washing service in my area, pressure washing companies in my area",
    logo: "https://jetandco.co.uk/logo.webp",
    mainEntityOfPage: "https://jetandco.co.uk/",
    url: "https://jetandco.co.uk/",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };
  return (
    <>
      <Head>
        <title>
          Revive Your Property with Top-Rated Pressure Washing Services | Jet &
          Co
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Experience exceptional exterior cleaning results with Jet & Co! We specialize in driveway, roof, and concrete pressure washing services for both residential and commercial clients. Get a FREE quote today and boost your property's curb appeal!"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(strucutredData),
          }}
        />
      </Head>
      <main>
        <Navbar
          links={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <div className="relative flex min-h-screen flex-col">
          <Image
            loading="eager"
            priority
            className="max-h-screen min-h-screen w-full object-cover object-center brightness-75"
            src="/pressure-washer-front-of-house.webp"
            alt="Pressure washer cleaning front of house"
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1079px) 100vw, 1079px"
          />
          <div className="absolute left-0 top-0 flex min-h-full w-full flex-col items-center justify-center gap-8 self-center px-4 py-16 text-center ">
            <h1 className="font-poppins text-5xl font-semibold tracking-wide text-white sm:text-[5rem] xl:text-[7rem]">
              Welcome to JET &amp; CO.{" "}
            </h1>
            <p className="mt-3 max-w-2xl font-hepta text-2xl text-white sm:mt-5 sm:text-4xl">
              Your Satisfaction is Our Priority.
            </p>
            <Link href="/contact" className="btn">Book Now</Link>
          </div>
        </div>
        <MainPage />
        <Footer />
      </main>
    </>
  );
};

export default Home;
