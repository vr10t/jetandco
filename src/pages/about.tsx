import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <>
    <Head>
      <title>About Us</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Jet & Co. is a family owned and operated business that specializes in residential and commercial pressure washing. We are located in the heart of the DFW metroplex and service the entire Dallas/Fort Worth area. We are fully insured and guarantee our work. We offer a variety of services including: Driveway Cleaning, House Washing, Gutter Cleaning, Window Cleaning, and much more. We are committed to providing the highest quality service at an affordable price. We look forward to serving you!" />
    </Head>
    <Layout title="About Us">
      <section className="body-font text-gray-700 ">
        <div className="container mx-auto flex flex-col items-center justify-center object-contain ">
          <div className="relative mb-10 h-56 w-full">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <h1 className="text-6xl font-bold z-10 text-zinc-100">About Us</h1>
            </div>
            <Image
              className="rounded object-cover brightness-75 object-center"
              fill
              src="/washes-away-dirt-with-water-pressure-rust-remover.webp"
              alt="About Us"
            />
          </div>
          <div className="w-full text-center lg:w-2/3">
            <p className="mb-8 leading-relaxed">
              Welcome to Jet & Co, the leading pressure washing service provider
              in the region. With years of experience under our belt, we are
              dedicated to offering high-quality exterior cleaning solutions to
              residential and commercial clients alike. Our team of skilled
              professionals utilizes state-of-the-art equipment and eco-friendly
              cleaning solutions to ensure that your property looks its best
              without compromising the environment.
            </p>
          </div>
        </div>
      </section>

      <section className="body-font text-gray-700 ">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-10 relative w-5/6 h-56 sm:h-96 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              className="rounded object-cover w-full h-full"
              fill
              src="/modern-aluminium-carport-pressure-washing.webp"
              alt="pressure washing carport"
            />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="title-font mb-4 text-3xl font-medium sm:text-4xl">
              Our Services
            </h1>
            <p className="mb-8 leading-relaxed">
              At Jet & Co, we believe that a clean and well-maintained property
              speaks volumes about its owner. That&apos;s why we are committed to
              providing exceptional pressure washing services that cater to a
              wide range of needs, including driveway cleaning, roof washing,
              exterior cleaning, and more. Our mission is to help homeowners and
              businesses maintain their properties, improving curb appeal and
              ultimately enhancing their value.
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col-reverse items-center px-5 py-24 md:flex-row-reverse">
          <div className="relative mb-10 h-56 sm:h-96 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              className="rounded object-cover"
              fill
              src="/couple-standing-outside-clean-house.webp"
              alt="couple standing outside clean house"
            />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 text-3xl font-medium sm:text-4xl">
              Customer Satisfaction
            </h1>
            <p className="mb-8 leading-relaxed">
              Customer satisfaction is at the heart of everything we do. From
              the moment you reach out to us, our friendly and knowledgeable
              staff will work closely with you to understand your specific
              cleaning needs and tailor a solution that best suits your
              requirements. We take pride in our attention to detail, ensuring
              that every nook and cranny of your property is spotless and
              looking its best.
            </p>
          </div>
        </div>

        <section className="body-font text-gray-700 ">
          <div className="container  mx-auto flex flex-col items-center justify-center px-5 py-24">
            <div className="relative mb-4 h-56 sm:h-96 w-full">
            <Image
              className="rounded object-cover object-center"
              fill
              src="/professional-pressure-washer.webp"
              alt="professional pressure washer"
            />
            </div>
            <div className="w-full text-center lg:w-2/3">
              <h1 className="title-font mb-4 text-3xl font-medium sm:text-4xl">
                Commitment to Excellence
              </h1>
              <p className="mb-8 leading-relaxed">
                At Jet & Co, we understand the importance of investing in the
                latest pressure washing technology and ongoing training for our
                team members. This commitment to excellence allows us to provide
                unparalleled service quality to our clients, leaving a trail of
                satisfied customers who are proud to recommend us to their
                friends and family. Choose Jet & Co for all your
                exterior cleaning needs, and experience the difference that
                comes with working with a trusted and professional pressure
                washing company.
              </p>
            </div>
          </div>
        </section>
      </section>
    </Layout>
</>
  );
}

export default About;