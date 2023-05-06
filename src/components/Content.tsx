import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Carousel, { type CarouselProps } from "./Carousel";
import ImageSlider from "react-node-before-after-slider-component";
import "react-node-before-after-slider-component/dist/build.css";

interface Section1Props {
  title: string;
  text1: string;
  text2?: string;
  image: string;
  checkmarks?: string[];
  reverse?: boolean;
}

const Section1: React.FC<Section1Props> = ({
  title,
  text1,
  text2,
  image,
  checkmarks,
  reverse,
}) => {
  return (
    <div className="container mx-auto my-24 sm:px-6">
      <section className="mb-32 text-gray-800">
        <div className="container relative z-10 mx-auto text-center lg:text-left xl:px-32">
          <div
            className={`flex items-center ${
              reverse
                ? "flex-col-reverse lg:flex-row-reverse"
                : "flex-col lg:flex-row "
            }`}
          >
            <div className="relative w-full lg:w-1/2 ">
              <div className="relative h-[30rem] rounded-lg shadow-lg">
                <Image
                  src={"/" + image}
                  className="rounded-lg object-cover shadow-lg"
                  alt={image.replace(/.*\//, "")}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1079px) 100vw, 1079px"
                />
              </div>
            </div>
            <div className="mb-12 lg:mb-0 lg:w-1/2">
              <div
                className={`block rounded-lg bg-white/50 px-6 py-12 shadow-lg backdrop-blur-2xl md:px-12 ${
                  reverse ? "lg:-mr-14" : "lg:-ml-14"
                }`}
              >
                <h2 className="mb-6 text-3xl font-bold">{title}</h2>
                <p className="mb-6 pb-2 text-gray-500 lg:pb-0">{text1}</p>
                {checkmarks && (
                  <div className="mx-auto mb-6 flex flex-col md:flex-row md:justify-around lg:justify-between">
                    {checkmarks.map((text, i) => (
                      <p
                        key={`${text}-${i}`}
                        className="mx-auto  mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="mr-2 h-4 w-4 text-blue-700"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        {text}
                      </p>
                    ))}
                  </div>
                )}
                {text2 && <p className="mb-0 text-gray-500">{text2}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureProps {
  title: string;
  text: string;
  items: { title: string; text: string; icon: JSX.Element }[];
}
const FeaturesSection: React.FC<FeatureProps> = ({ title, text, items }) => {
  return (
    <section className="bg-blue-50">
      <div
        className="h-6 w-full bg-contain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-screen-xl px-6 py-8 sm:px-12 sm:py-12 lg:px-24 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>

          <p className="mt-4 text-gray-600">{text}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-16  lg:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={`Features-${index}`}
              className="flex flex-col items-start gap-2 sm:flex-row"
            >
              <span className="shrink-0 self-center rounded-lg p-4 sm:self-start">
                {item.icon}
              </span>

              <div>
                <h2 className="text-center text-lg font-bold text-blue-700 sm:text-start">
                  {item.title}
                </h2>

                <p className="mt-1 text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="h-6 w-full bg-contain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
};

interface CheckmarkProps {
  title: string;
  items: string[];
}
const CheckmarksSection: React.FC<CheckmarkProps> = ({ title, items }) => {
  return (
    <section className="relative flex flex-col items-center justify-center px-6">
      <div className="flex max-w-screen-xl justify-center px-6 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="">
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          {items.map((item, index) => (
            <div key={`Checkmarks-${index}`} className="mt-4 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="mr-2 inline-block h-4 w-4 text-blue-700"
              >
                <path
                  fill="currentColor"
                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                ></path>
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* <Link href="/contact" className="btn">
          Get A Quote Now
        </Link> */}
      </div>
    </section>
  );
};

interface JumbotronProps {
  title: string;
  image: string;
  link: string;
  linkText: string;
}
const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  image,
  link,
  linkText,
}) => {
  return (
    <div className="container mx-auto my-24 sm:px-6">
      <section className="mb-32">
        <div
          className="relative overflow-hidden bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${image}')`,
            height: "500px",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/75 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight">
                  {title}
                </h2>
                <Link
                  href={link}
                  type="button"
                  className="inline-block rounded border-2 border-white px-7 py-3 text-sm font-medium uppercase leading-snug text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                >
                  {linkText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface Section3Props {
  title: string;
  text: string;
  image?: string;
  link?: string;
  linkText?: string;
}
const Section3: React.FC<Section3Props> = ({
  title,
  text,
  image,
  link,
  linkText,
}) => {
  return (
    <div className="container relative mx-auto my-24 rounded-3xl bg-blue-700 px-6 py-12 text-white">
      <section className="">
        <div className="-mx-6 flex flex-wrap items-center">
          <div className={`w-full px-6 ${image ? "lg:w-1/2" : ""}`}>
            <div className="lg:pr-16 xl:pr-32">
              <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight">
                <span className="relative z-10 block">{title}</span>
              </h2>
              <p className="mb-6 text-gray-50">{text}</p>
              {link && (
                <Link
                  href={link}
                  className="inline-flex h-12 items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 text-base font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
                >
                  {linkText}
                </Link>
              )}
            </div>
          </div>
          {image && (
            <div className="mt-12 w-full px-6 lg:mt-0 lg:w-1/2">
              <div className="relative flex h-full w-full items-center justify-center lg:justify-end">
                <Image
                  unoptimized
                  className="h-auto w-full max-w-2xl"
                  src={image}
                  alt=""
                  fill
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
interface GallerySectionProps {
  items: {
    image: {
      before: string;
      after: string;
    };
    title: string;
    description?: string;
  }[];
}
const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  return (
    <div className="container mx-auto my-24 px-6">
      <section className="mb-24">
        <div className="-mx-6 flex flex-col items-center lg:flex-row">
          <div className="mb-6 lg:w-1/2">
            <h2 className="text-3xl font-bold">
              Experience the Transformation
            </h2>
            <p className="mt-4 text-gray-500">
              Witness the remarkable difference our pressure washing services
              can make. From dingy driveways to weathered exteriors, our team&apos;s
              expertise in utilizing top-quality pressure washers brings new
              life to your property. The dramatic visual contrast highlights our
              commitment to excellence and customer satisfaction. Discover how
              our services can rejuvenate your home or business, making it look
              like new again.
            </p>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={`Gallery-${index}`}
                className="relative h-44  w-72 overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative z-10 h-0 w-full bg-red-500">
                  <div className="absolute select-none pointer-events-none left-2 top-4 rounded bg-black/50 px-1 text-white">
                    Before
                  </div>
                  <div className="absolute select-none pointer-events-none right-2 top-4 rounded bg-black/50 px-1 text-white">
                    After
                  </div>
                </div>
                {/* eslint-disable-next-line*/}
                {/* @ts-ignore */}
                <ImageSlider
                  className="dragg"
                  secondComponent={
                    <div draggable={false} className="relative w-72 h-64">
                    <Image draggable={false} className="object-cover" fill src={"/"+item.image.before} alt={item.title + " Before"} />
                    </div>
                  }
                  firstComponent={
                    <div draggable={false} className="relative w-72 h-64">
                  <Image draggable={false} className="object-cover" fill src={"/"+item.image.after} alt={item.title + " After"} />
                  </div>
                  }
                  delimiterIconStyles={{opacity: "0"}}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

interface CarouselWithContentProps extends CarouselProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}
const CarouselWithContent: React.FC<CarouselWithContentProps> = ({
  title,
  description,
  link,
  linkText,
  items,
}) => {
  return (
    <div className="container mx-auto my-24 px-2 sm:px-6">
      <section className="z-10 mb-24">
        <div className="-mx-6 flex flex-wrap items-center">
          <h2 className="font-heading z-10 mb-6 px-6 text-3xl font-bold lg:text-4xl">
            {title}
          </h2>
          <div className="mb-12 w-full px-6 lg:mb-0 lg:w-1/3">
            <div className="max-w-xl">
              <p className="mb-8 leading-loose text-gray-500">{description}</p>
              <Link href={link} className="btn">
                {linkText}
              </Link>
            </div>
          </div>
          <div className="w-full px-6 lg:w-2/3 lg:px-0">
            <Carousel items={items} />
          </div>
        </div>
      </section>
    </div>
  );
};

export {
  Section1,
  Jumbotron,
  CarouselWithContent,
  Section3,
  GallerySection,
  FeaturesSection,
  CheckmarksSection,
};
