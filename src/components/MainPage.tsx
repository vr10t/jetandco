import React from "react";
import {
  CarouselWithContent,
  CheckmarksSection,
  FeaturesSection,
  GallerySection,
  Jumbotron,
  Section1,
  Section3,
} from "./Content";

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <GallerySection
        items={[
          {
            image: {
              before: "driveway-clean-before.jpg",
              after: "driveway-clean-after.jpg",
            },
            title: "Driveway Cleaning",
            description:
              "Revitalize your driveway with our pressure washing and optional sealing services.",
          },
          {
            image: {
              before: "deck-cleaning-before.jpg",
              after: "deck-cleaning-after.jpg",
            },
            title: "Exterior Cleaning",
            description:
              "Enhance curb appeal with our comprehensive exterior cleaning for walls and fences.",
          },
          {
            image: {
              before: "pavement-cleaning-before.jpg",
              after: "pavement-cleaning-after.jpg",
            },
            title: "Concrete Cleaning",
            description:
              "Restore concrete surfaces like walkways, patios, and parking lots with our pressure washing.",
          },
        ]}
      />
      <Section1
        title=" Expert Driveway Cleaning Service in Hemel Hempstead "
        text1="Driveway cleaning is one of our specialties, using high-quality driveway
        pressure cleaning techniques to remove dirt, grime, and stains from your
        concrete or paved surfaces."
        text2="
          Our driveway power washer service guarantees
          a thorough and efficient clean, leaving your driveway looking as good as
          new."
        checkmarks={["Driveway cleaning", "Patio cleaning", "Deck cleaning"]}
        image="pressure-washer-cleaning-a-weathered-deck.png"
      />
      <Section1
        image="washes-away-dirt-with-water-pressure-rust-remover.png"
        title=" Find Pressure Washing in Your Area "
        text1="If you're searching for 'pressure washing in my area', look no further.
        Our pressure washing services are available throughout Hemel Hempstead
        and surrounding areas, providing convenient and efficient cleaning
        solutions for your property. "
        reverse
      />

      <CarouselWithContent
        items={[
          {
            image: "roof-cleaning.jpg",
            title: "Roof Cleaning",
            description:
              "Remove moss, algae, and dirt gently with our expert roof cleaning service.",
          },
          {
            image: "driveway-clean-after.jpg",
            title: "Driveway Cleaning",
            description:
              "Revitalize your driveway with our pressure washing and optional sealing services.",
          },
          {
            image: "tiles-half.jpeg",
            title: "Exterior Cleaning",
            description:
              "Enhance curb appeal with our comprehensive exterior cleaning for walls and fences.",
          },
          {
            image: "removing-dirt-1.jpeg",
            title: "Concrete Cleaning",
            description:
              "Restore concrete surfaces like walkways, patios, and parking lots with our pressure washing.",
          },
        ]}
        title="
            Professional Exterior Cleaning Services
            "
        description="
                Our exterior cleaning services cover a wide range of needs,
                including roof washing services and roof pressure cleaning to
                remove moss, algae, and stubborn dirt. We also provide power
                washing services for siding, walls, and fences, ensuring a
                complete and comprehensive exterior cleaning experience.
            "
        link="/contact"
        linkText="Book Now"
      />
      <FeaturesSection
        title="Why Choose Us?"
        text=""
        items={[
          {
            title: "Community-Based and Operated",
            text: "We take great pride in catering to residential clients in Hemel Hempstead, Hertfordshire, and the surrounding areas. Our commercial and strata services reach across the entire lower mainland region.",
            icon: (
              <img
                className="h-32 w-32 object-scale-down object-center"
                src="undraw_lives_matter_38lv.svg"
              />
            ),
          },
          {
            title: "Absolute Satisfaction Assurance",
            text: "Regardless of the complexity, we consider a job well done only when you are completely satisfied with the outcome. If, for any reason, you find our customer service or work quality unsatisfactory, we will collaborate with you to resolve any issues. We strive for perfection in every task!",
            icon: (
              <img
                className="h-32 w-32 object-scale-down object-center"
                src="undraw_security_on_re_e491.svg"
              />
            ),
          },
          {
            title: "Eco-Friendly Approach",
            text: "Our team of skilled experts utilize eco-friendly, top-grade, biodegradable cleaning solutions. We pre-treat roofs and siding before gently rinsing with the minimum required pressure to achieve excellent results while safeguarding your property. This cleaning solution helps maintain your home free from algae, mold, and mildew for an extended period.",
            icon: (
              <img
                className="h-32 w-32 object-scale-down object-center"
                src="undraw_environment_iaus.svg"
              />
            ),
          },
          {
            title: "Expertise and Professionalism",
            text: "Our team is dedicated to providing exceptional service by being well-trained in power washing and soft washing techniques. We ensure a seamless experience from start to finish, guaranteeing customer satisfaction at every stage of the process.",
            icon: (
              <img
                className="h-32 w-32 object-scale-down object-center"
                src="undraw_certificate_re_yadi.svg"
              />
            ),
          },
        ]}
      />
      <CheckmarksSection
        title="What You Get For Our Services"
        items={[
          " Free consultation with a guaranteed fixed price quote at no obligation ",
          " 100% job satisfaction guarantee with no exceptions ",
          " Full refunds for any unsatisfactory work, no questions asked ",
          " Post service job inspection with one of our team leads ",
          " Fully-trained expert technicians ",
          " Full comprehensive third party liability insurance coverage ",
        ]}
      />

      <Jumbotron
        title="Unparalleled Pressure Cleaning Services"
        linkText="Get your free quote Now"
        image="https://images.squarespace-cdn.com/content/v1/5c7c57e4840b1629e74fd189/1557788056855-17QEF1PZ0US9ZECTJ5MX/imag+4.jpg?format=2500w"
        link="/contact"
      />
    </div>
  );
};

export default MainPage;
