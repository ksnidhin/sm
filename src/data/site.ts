export const whatsappNumber = "919400386724";
export const whatsappMessage = encodeURIComponent(
  "Hello Shobha Maniyat, I would like to plan an event."
);
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/shobhamaniyat",
  },
  {
    label: "JustDial",
    href: "https://jsdl.in/RSL-AHF1782665949",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Shobha-Maniyat-100063669685267/",
  },
] as const;

export const navigationLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

export const footerConnectLinks = [
  ...socialLinks,
  {
    label: "WhatsApp",
    href: whatsappUrl,
  },
] as const;

export const services = [
  {
    title: "Light",
    text: "Layered stage, mandap, and ambience lighting shaped for photographs and live audiences.",
  },
  {
    title: "Sound",
    text: "Clear, dependable audio for speeches, ceremonies, performances, and public gatherings.",
  },
  {
    title: "Decoration",
    text: "Warm floral, drape, textile, and stage details that carry the tone of the occasion.",
  },
  {
    title: "Catering",
    text: "Coordinated hospitality support so the guest experience feels measured and cared for.",
  },
  {
    title: "Venue styling",
    text: "Entrances, seating, backdrops, and focal frames planned as one complete environment.",
  },
  {
    title: "Event coordination",
    text: "Practical on-ground planning from setup to closing, guided by decades of live-event experience.",
  },
] as const;

export const storyChapters = [
  {
    kicker: "Chapter 01",
    title: "The first impression",
    text: "A welcome frame, a lit entrance, a stage waiting quietly before the guests arrive.",
    image: "/assets/events/IMG-20260626-WA0025.jpg",
    alt: "A warmly lit event stage with draped ceiling, gold chairs, and red table details.",
  },
  {
    kicker: "Chapter 02",
    title: "The production layer",
    text: "Light, sound, and structure handled with the calm confidence that comes from years of repetition.",
    image: "/assets/events/1782663751569.png",
    alt: "A sound console facing a public stage with lighting and seated guests.",
  },
  {
    kicker: "Chapter 03",
    title: "The gathering",
    text: "Formal moments, community functions, celebrations, and ceremonies held with respect.",
    image: "/assets/events/IMG-20260626-WA0047.jpg",
    alt: "An award presentation on a large event stage with a red carpet foreground.",
  },
] as const;

export const galleryImages = [
  {
    src: "/assets/events/1782663757230.png",
    alt: "Event stage production seen from the sound and lighting control area.",
    caption: "Sound checks before the hall fills.",
  },
  {
    src: "/assets/events/1782663761516.png",
    alt: "Large public event stage with bright production lights and audience seating.",
    caption: "Built for public attention.",
  },
  {
    src: "/assets/events/1782663765768.png",
    alt: "Outdoor stage with formal seating and lighting truss.",
    caption: "Formal stage, practical details.",
  },
  {
    src: "/assets/events/1782663776114.png",
    alt: "Event production console and stage lights at night.",
    caption: "Precision from the back of house.",
  },
  {
    src: "/assets/events/1782663780612.png",
    alt: "Night event stage with sound equipment in the foreground.",
    caption: "Every cue matters.",
  },
  {
    src: "/assets/events/IMG-20260626-WA0027.jpg",
    alt: "Decorated event stage with warm bulbs and patterned carpet.",
    caption: "A soft, ceremonial stage.",
  },
  {
    src: "/assets/events/IMG-20260626-WA0029.jpg",
    alt: "Wide event seating and stage setup under a draped ceiling.",
    caption: "The room before arrival.",
  },
  {
    src: "/assets/events/IMG-20260626-WA0030.jpg",
    alt: "Panoramic event hall with stage, drapes, and lighting.",
    caption: "A complete venue atmosphere.",
  },
  {
    src: "/assets/events/IMG-20260626-WA0032.jpg",
    alt: "Event stage detail with warm lights and styled seating.",
    caption: "Warm light, clean shadows.",
  },
  {
    src: "/assets/events/IMG-20260626-WA0036.jpg",
    alt: "Event venue with stage lighting, seating, and production equipment.",
    caption: "Function and celebration together.",
  },
  {
    src: "/assets/events/IMG-20260626-WA0038.jpg",
    alt: "Wide indoor venue setup with patterned floor and warm ceiling lights.",
    caption: "Scale without noise.",
  },
  {
    src: "/assets/events/IMG-20260626-WA0049.jpg",
    alt: "Stage and seating arrangement prepared for an event.",
    caption: "Ready before the first guest.",
  },
  {
    src: "/assets/events/IMG-20260626-WA0053.jpg",
    alt: "Formal event stage with warm lighting and venue decor.",
    caption: "A frame for the important hour.",
  },
] as const;

export const eventTypes = [
  "Weddings",
  "Festivals",
  "Public functions",
  "Corporate gatherings",
  "Award nights",
  "Family celebrations",
] as const;
