// DRIVER GLOVES
import driver_cover from "../../assets/gloves/driver-gloves.webp";
import dg from "../../assets/driver_gloves/dg.jpg";
import dg2 from "../../assets/driver_gloves/dg2.webp";
import dgdp from "../../assets/driver_gloves/dgdp.jpg";
import goatskin1 from "../../assets/driver_gloves/Goatskin-Working-Gloves_1.png";
import goatskin2 from "../../assets/driver_gloves/Goatskin-Working-Gloves_2.png";
import goatskin3 from "../../assets/driver_gloves/Goatskin-Working-Gloves_3.png";
import goatskin4 from "../../assets/driver_gloves/Goatskin-Working-Gloves_4.png";
import goatskin5 from "../../assets/driver_gloves/Goatskin-Working-Gloves_5.png";

// ASSEMBLY GLOVES
import assembly_cover from "../../assets/gloves/assembly.jpg";
import ag from "../../assets/assembly_gloves/ag.jpg";
import ag2 from "../../assets/assembly_gloves/ag2.jpg";
import assembly0 from "../../assets/assembly_gloves/assembly-gloves_0.jpg";
import assembly1 from "../../assets/assembly_gloves/assembly-gloves_1.jpg";
import assembly2 from "../../assets/assembly_gloves/assembly-gloves_2.png";
import assembly3 from "../../assets/assembly_gloves/assembly-gloves_3.jpg";
import assembly4 from "../../assets/assembly_gloves/assembly-gloves_4.jpg";
import assembly5 from "../../assets/assembly_gloves/assembly-gloves_5.jpg";
import assembly6 from "../../assets/assembly_gloves/assembly-gloves_6.jpg";
import assembly7 from "../../assets/assembly_gloves/assembly-gloves_7.jpg";
import assembly8 from "../../assets/assembly_gloves/assembly-gloves_8.png";

export const NavLinks = [
  {
    name: "Services",
    url: "/#services",
  },
  {
    name: "Products",
    url: "/#top-products",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
];

export const NavButtons = [
  {
    name: "Login",
    url: "/",
  },
  {
    name: "Signup",
    url: "/",
  },
];

export const HeroTexts = {
  firstText: "BEST LEAATHER AROUND THE WORLD",
  secondText: "Unleash Your Inner Rebel with Our Leather Products.",
  thirdText:
    "Leather safety products are essential items designed to provide protection and durability in various industrial and personal safety applications.",
  firstButton: "Find out more",
  secondButton: "Play Demo",
};

export const ServiceTexts = {
  firstText: "SERVICES",
  secondText: "We Offer Best Services",
  cards: [
    {
      firstText: "Leather Manufacturing",
      secondText: "Leather manufacturing industry in Pakistan.",
    },
    {
      firstText: "Safety Gloves",
      secondText: "Industrials plants for safety glvoes manufacturing.",
    },
  ],
};

export const TopProductsTexts = {
  firstText: "Top selling",
  secondText: "Top Products",
  cards: [
    {
      title: "Leather Gloves",
      price: "PKR 5.4k",
      duration: "10 days",
    },
    {
      title: "Leather Appron",
      price: "PKR 4k",
      duration: "12 days",
    },
    {
      title: "Leather Welding Jacket",
      price: "PKR 15k",
      duration: "26 days",
    },
    {
      title: "Cow Split Leather Gloves",
      price: "PKR 4k",
      duration: "8 days",
    },
    {
      title: "Welding Safety Kit",
      price: "PKR 39k",
      duration: "14 days",
    },
    {
      title: "Leather Shoe Cover",
      price: "PKR 2k",
      duration: "3 days",
    },
  ],
};

export const ProductsTexts = {
  driver_gloves: {
    title: "Driver Gloves",
    cover: driver_cover,
    cards: [
      {
        title: "DG",
        image: dg,
      },
      {
        title: "DG",
        image: dg2,
      },
      {
        title: "DG-DP",
        image: dgdp,
      },
      {
        title: "Goat Skin",
        image: goatskin1,
      },
      {
        title: "Goat Skin",
        image: goatskin2,
      },
      {
        title: "Goat Skin",
        image: goatskin3,
      },
      {
        title: "Goat Skin",
        image: goatskin4,
      },
      {
        title: "Goat Skin",
        image: goatskin5,
      },
    ],
  },
  assembly_gloves: {
    title: "Assembly Gloves",
    cover: assembly_cover,
    cards: [
      {
        title: "AG",
        image: ag,
      },
      {
        title: "AG",
        image: ag2,
      },
      {
        title: "Assembly Glove",
        image: assembly0,
      },
      {
        title: "Assembly Glove",
        image: assembly1,
      },
      {
        title: "Assembly Glove",
        image: assembly2,
      },
      {
        title: "Assembly Glove",
        image: assembly3,
      },
      {
        title: "Assembly Glove",
        image: assembly4,
      },
      {
        title: "Assembly Glove",
        image: assembly5,
      },
      {
        title: "Assembly Glove",
        image: assembly6,
      },
      {
        title: "Assembly Glove",
        image: assembly7,
      },
      {
        title: "Assembly Glove",
        image: assembly8,
      },
    ],
  },
};

export const BookingStepsTexts = {
  firstText: "Easy and Fast",
  secondText: "Book your next trip in 3 easy steps",
  listOfSteps: [
    {
      text: "Choose Destination lorem ipsum dolor sit amet, consectetur adipiscing elit.Urna, tortor tempus.",
    },
    {
      text: "Make Payment lorem ipsum dolor sit amet, consectetur adipiscing elit.Uma, totor tempus.",
    },
    {
      text: "Reach Airport on Selected Date lorem ipsum dolor sit amet.consectetur adipiscing elit.Uma totor tempus.",
    },
  ],
  cardOne: {
    name: "Trip To Greece",
    date: "14-29 June  |  by Robbin Jobs",
    people: "24 people going",
  },
  cardTwo: {
    status: "Ongoing",
    destination: "Trip to Rome",
    completion: "40% Completed",
  },
};

export const TestimonialTexts = {
  firstText: "TESTIMONIALS",
  secondText: "What people say about Us.",
  feedBacks: [
    {
      text: "You did a fabulous job. There were no hitches. Thank you again for all your work planning this trip.",
      person: "Mike taylor",
      location: "Lahore, Pakistan",
    },
    {
      text: "Jadoo was great with the entire process from planning to updates during the trip. We had 11 people and everything was perfectly executed. We appreciate all of her hard work. It was truly the trip of a lifetime. Thank you!",
      person: "Gina",
      location: "Owerri, Nigeria",
    },
    {
      text: "Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance before we left on what to bring and such, that was very helpful!",
      person: "Emma",
      location: "Vancouver, Canada",
    },
    {
      text: "Thank you for your recommendation and putting the trip together. The resort was absolutely beautiful. The infinity pools, the palm trees in the main pool, the infinity pool in out preferred area overlooking the gulf and the golf course were exceptional....",
      person: "Loveth",
      location: "Lagos, Nigeria",
    },
  ],
};

export const NewsletterTexts = {
  firstText: "Write us an email to contact us",
  placeholderText: "Your email",
  buttonText: "Click to Write Email",
};

export const FooterTexts = {
  underLogoText: "Unleash Your Inner Rebel with Our Leather Products.",
  quickLinks: {
    caption: "Quick Links",
    links: [
      {
        name: "Services",
        url: "/#services",
      },
      {
        name: "Products",
        url: "/#top-products",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
  },
  contacts: {
    caption: "Contacts",
    links: [
      {
        name: "FAQs",
        url: "/",
      },
      {
        name: "Help",
        url: "/",
      },
      {
        name: "Policies",
        url: "/",
      },
      {
        name: "Terms & Conditions",
        url: "/",
      },
    ],
  },
  more: {
    caption: "More",
    links: [
      {
        name: "Career",
        url: "/",
      },
      {
        name: "Airlines",
        url: "/",
      },
      {
        name: "Airline Fees",
        url: "/",
      },
      {
        name: "Low Fare Tips",
        url: "/",
      },
    ],
  },
};
