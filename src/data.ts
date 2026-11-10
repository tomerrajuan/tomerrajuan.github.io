export const profile = {
  name: "Tomer Rajuan",
  role: "Fullstack Engineer",
  location: "Berlin, Germany",
  email: "tomer.rajuan@klarna.com",
  phone: "+49 176 43216376",
  linkedin: "https://www.linkedin.com/in/tomer-rajuan-3406b0192/",
  photo: "/tomer.jpg",
  cv: "/Tomer-Rajuan-CV.pdf",
  summary:
    "At Klarna, I build consumer features for tens of millions of people. Before that, I shipped digital public services for German ministries and foundations.",
};

export type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  href: string;
  hrefLabel?: string;
  image: string;
  imageAlt?: string;
  video?: string;
  videoMp4?: string;
  personal?: boolean;
};

export const projects: Project[] = [
  {
    id: "elterngeld",
    number: "02",
    title: "ElterngeldDigital",
    client: "Federal Ministry for Family Affairs",
    year: "2020-2023",
    description:
      "Germany's main digital parental allowance application. I helped build the guided application flow, the public website redesign, and the path from paper forms to a working digital service for parents across federal states.",
    highlights: [
      "Step-by-step application with personalized questions, validation, and save-and-resume",
      "Interfaces into state Elterngeld offices so completed applications can move into specialist systems",
    ],
    stack: [
      "TypeScript",
      "React",
      "Redux",
      "Accessibility",
      "Public-sector UX",
    ],
    href: "https://www.elterngeld-digital.de/ams/Elterngeld",
    hrefLabel: "Open ElterngeldDigital",
    image: "/previews/elterngeld.jpg",
    imageAlt: "Elterngeldrechner mit Planer on familienportal.de",
    video: "/previews/elterngeldrechner.webm",
    videoMp4: "/previews/elterngeldrechner.mp4",
  },
  {
    id: "wegweiser",
    number: "03",
    title: "Wegweiser Kommune",
    client: "Bertelsmann Stiftung",
    year: "2021-2023",
    description:
      "Full redesign of the national municipal statistics platform. Cities, districts, and researchers can explore more than 350 indicators, build comparisons, and read the data on interactive maps.",
    highlights: [
      "React and Redux rebuild of a 15-year-old data portal used by thousands of German municipalities",
      "The relaunch received the German Design Award 2022 for Excellent Communications Design: Web",
    ],
    stack: ["TypeScript", "React", "Redux", "Leaflet", "Data visualization"],
    href: "https://www.wegweiser-kommune.de/",
    hrefLabel: "Open Wegweiser Kommune",
    image: "/previews/wegweiser.jpg",
    imageAlt: "Wegweiser Kommune demographic map of German municipalities",
    video: "/previews/wegweiser.webm",
    videoMp4: "/previews/wegweiser.mp4",
  },
  {
    id: "bayern",
    number: "04",
    title: "Mobility projects in Bavaria",
    client: "Bavarian State Ministry for Digital Affairs",
    year: "2021-2023",
    description:
      "An interactive map of autonomous driving, charging, public transport, and connected-mobility projects across Bavaria. Built so citizens, manufacturers, and the ministry can see what is being tested and where.",
    highlights: [
      "Filters for topic, district, place, and road category, with 37 projects across 73 locations",
      "Project briefs on the map so a pin opens into context instead of a static list",
    ],
    stack: ["TypeScript", "React", "Redux", "Leaflet", "GeoJSON"],
    href: "https://www.stmd.bayern.de/themen/mobilitaetsprojekte-in-bayern/",
    hrefLabel: "Open the Bavaria map",
    image: "/previews/bayern.jpg",
    imageAlt: "Interactive Leaflet map of mobility projects across Bavaria",
    video: "/previews/bayern.webm",
    videoMp4: "/previews/bayern.mp4",
  },
  {
    id: "bmdv",
    number: "05",
    title: "Vorhabenübersicht",
    client: "Federal Ministry for Transport",
    year: "2022-2023",
    description:
      "The public map on beteiligung.bund.de. People can find federal rail, highway, waterway, and offshore projects across Germany, then open a procedure and take part in it.",
    highlights: [
      "OpenLayers map of live planning procedures, including North Sea and Baltic offshore sites",
      "Built so nearby projects surface first, and citizens can submit objections or statements",
    ],
    stack: ["JavaScript", "Vite", "OpenLayers"],
    href: "https://beteiligung.bund.de/DE/VorhabenFindenUndBeteiligen/Karte/vorhabenuebersicht-karte.html",
    hrefLabel: "Open the project map",
    image: "/previews/beteiligung.jpg",
    imageAlt:
      "Interactive OpenLayers map of federal infrastructure projects across Germany",
    video: "/previews/beteiligung.webm",
    videoMp4: "/previews/beteiligung.mp4",
  },
  {
    id: "cleargifting",
    number: "01",
    title: "Clear Gifting",
    client: "Independent product",
    year: "2026",
    description:
      "A gift-amount calculator for real occasions. It turns etiquette, the relationship, and the region into a concrete range, so people stop guessing what to give at a wedding, birthday, or Christmas.",
    highlights: [
      "Occasion flows for weddings, birthdays, Christmas, baptisms, and more, with country-specific rules for different markets",
      "Live result that updates as you answer, including travel, group gifts, and what you have already spent",
    ],
    stack: ["TypeScript", "Next.js", "React", "Tailwind", "next-intl"],
    href: "https://www.cleargifting.com/de/",
    hrefLabel: "Open Clear Gifting",
    image: "/previews/cleargifting.jpg",
    imageAlt: "Clear Gifting Christmas calculator with a live gift-amount range",
    video: "/previews/cleargifting.webm",
    videoMp4: "/previews/cleargifting.mp4",
    personal: true,
  },
  {
    id: "names-lottery",
    number: "02",
    title: "Names Lottery",
    client: "Independent Product",
    year: "2026",
    description:
      "A fair, interactive name picker and group generator for teams, classrooms and other events. It removes the friction from random draws, chores, or gift exchanges with a fast, real-time interface.",
    highlights: [
      "Custom name lists and fair shuffling flows, ensuring completely unbiased and random selections every time",
      "Live global draw counters powered by a serverless Upstash Redis backend, tracking total draws made by users worldwide",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind",
      "Upstash Redis",
      "Vercel",
    ],
    href: "https://www.names-lottery.com/",
    hrefLabel: "Open Names Lottery",
    image: "/previews/names-lottery.jpg",
    imageAlt:
      "Names Lottery homepage with random name picker and live global draw counters",
    video: "/previews/names-lottery.webm",
    videoMp4: "/previews/names-lottery.mp4",
    personal: true,
  },
];

export const experience = [
  {
    company: "Klarna",
    role: "Fullstack Engineer",
    dates: "Oct 2023 - Present",
    location: "Berlin",
    points: [
      "Lead client-facing work on products used by tens of millions of people, with a focus on availability and a calm user experience under peak traffic.",
      "Own core services for Discounts and Referral Programs, from product design and compliance through delivery and performance work.",
      "Design Kafka-based data sharing across teams, and close referral fraud patterns that were leaking money out of the system.",
      "Mentor engineers, onboard joiners, and act as a primary technical contact for architecture decisions.",
    ],
    stack:
      "TypeScript, Node.js, React, React Native, Kafka, AWS (DynamoDB, IAM), React Query, Express, Datadog, Jest, K6",
  },
  {
    company: "init AG",
    role: "Frontend Engineer",
    dates: "Oct 2020 - Aug 2023",
    location: "Berlin",
    points: [
      "Shipped digital public services for federal and state ministries and for Bertelsmann Stiftung.",
      "Core work on ElterngeldDigital, Wegweiser Kommune, the Bavaria mobility map, and the federal participation map on beteiligung.bund.de.",
      "Worked in multidisciplinary teams with design systems, accessibility, and heavy geospatial and statistics UIs.",
    ],
    stack:
      "TypeScript, React, Redux, Leaflet, OpenLayers, GeoJSON, Vite, Atomic Design, Testing Library, Sass, Figma",
  },
];

export const skills = [
  {
    label: "Web foundations",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Product UI",
    items: [
      "React",
      "React Native",
      "Redux",
      "React Query",
      "Leaflet",
      "OpenLayers",
      "Accessibility",
    ],
  },
  {
    label: "Systems & scale",
    items: [
      "Node.js",
      "Express",
      "Kafka",
      "Event-driven systems",
      "AWS",
      "DynamoDB",
      "Reliability & performance",
    ],
  },
  {
    label: "Product & leadership",
    items: [
      "Product ownership",
      "End-to-end delivery",
      "Cross-functional collaboration",
      "System design",
      "Mentoring",
      "Fraud prevention",
    ],
  },
];
