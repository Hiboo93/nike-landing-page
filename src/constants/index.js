import { truckFast, shieldTick, support, instagram, facebook, twitter } from "../assets/icons/index.js"

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  { thumbnail: thumbnailShoe1, bigShoe: bigShoe1 },
  { thumbnail: thumbnailShoe2, bigShoe: bigShoe2 },
  { thumbnail: thumbnailShoe3, bigShoe: bigShoe3 },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  { imgURL: shoe4, name: "Nike Air Jordan-01", price: "$200.20" },
  { imgURL: shoe5, name: "Nike Air Jordan-10", price: "$210.20" },
  { imgURL: shoe6, name: "Nike Air Jordan-100", price: "$220.20" },
  { imgURL: shoe7, name: "Nike Air Jordan-001", price: "$230.20" },
];

export const services = [
  {
    imgUrl: truckFast,
    label: "Free shipping",
    subtext: "enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgUrl: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transaction with our secure payment options.",
  },
  {
    imgUrl: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback: "the attention to detail and the quality of the product exceeded my expectations highly recommanded!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "the product not only met but exxeeded my expectations; I'll definitely be a returning customer !",
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQS", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "customer@nike.com",
        link: "mailto:customer@nike.com",
      },
      {
        name: "+92554862354",
        link: "tel:+92554862354",
      },
    ],
  },
];
