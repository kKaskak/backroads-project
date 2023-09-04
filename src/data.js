import { tour1, tour2, tour3, tour4, tour5, tour6 } from "./images";
export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];
export const socialIcons = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.facebook.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsum velit eos perspiciatis cum nostrum quod!",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsum velit eos perspiciatis cum nostrum quod!",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsum velit eos perspiciatis cum nostrum quod!",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    title: "Tibet Adventure",
    date: "26th August 2023",
    info: "Explore the high-altitude wonders of Tibet, including monasteries and the Potala Palace.",
    location: "China",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    title: "Safari in Kenya",
    date: "15th September 2023",
    info: "Discover the majestic wildlife of Kenya in this once-in-a-lifetime safari experience.",
    location: "Kenya",
    duration: 7,
    cost: 3300,
  },
  {
    id: 3,
    image: tour3,
    title: "Amazon Rainforest Expedition",
    date: "2nd November 2023",
    info: "Navigate the diverse ecosystem of the Amazon Rainforest with expert guides.",
    location: "Brazil",
    duration: 5,
    cost: 2700,
  },
  {
    id: 4,
    image: tour4,
    title: "Iceland's Northern Lights",
    date: "5th December 2023",
    info: "Witness the spectacular Northern Lights and explore Iceland's icy landscapes.",
    location: "Iceland",
    duration: 4,
    cost: 1900,
  },
  {
    id: 5,
    image: tour5,
    title: "Greek Islands Sailing",
    date: "10th July 2023",
    info: "Sail through the idyllic islands of Greece, enjoying sun, sea, and history.",
    location: "Greece",
    duration: 8,
    cost: 2500,
  },
  {
    id: 6,
    image: tour6,
    title: "Japan's Cherry Blossoms",
    date: "1st April 2024",
    info: "Experience the transient beauty of cherry blossoms in Japan's top viewing spots.",
    location: "Japan",
    duration: 7,
    cost: 3100,
  },
];
