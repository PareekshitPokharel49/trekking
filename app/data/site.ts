// Central place for page content so components stay presentational.

export type NavLink = { label: string; href: string };
export type HeroStat = { value: string; label: string };

export type Destination = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

export type ReliefImage = { src: string; alt: string; span: boolean };

export type Relief = {
  goalLabel: string;
  goalAmount: number;
  raisedAmount: number;
  images: ReliefImage[];
};

export const siteName = "Call From Himalaya";

export const navLinks: NavLink[] = [
  { label: "Explore", href: "/#destinations" },
  { label: "Donate", href: "/#relief" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Relief", href: "/#relief" },
  { label: "Contact", href: "/#footer" },
];

export const heroStats: HeroStat[] = [
  { value: "40+", label: "Guided routes" },
  { value: "12 yrs", label: "In-country teams" },
  { value: "$1.2M", label: "Relief delivered" },
];

export const destinations: Destination[] = [
  {
    tag: "Cultural Heritage",
    title: "Kathmandu Valley",
    description:
      "Explore the city of temples, where ancient traditions blend seamlessly with modern life.",
    image: "/Kathmandu.jpg",
  },
  {
    tag: "Trekking",
    title: "Annapurna Circuit",
    description:
      "Trek through diverse landscapes, from subtropical forests to alpine meadows.",
    image: "/Annapurna.jpg",
  },
  {
    tag: "Wildlife",
    title: "Chitwan National Park",
    description:
      "Discover dense jungles and encounter rare wildlife in their natural habitat.",
    image: "/Chitwan.jpg",
  },
];

export const relief: Relief = {
  goalLabel: "Relief Fund Goal",
  goalAmount: 10000,
  raisedAmount: 0,
  images: [
    {
      src: "/flood-2.jpeg",
      alt: "Floodwaters sweeping through a village in western Nepal",
      span: true,
    },
    {
      src: "/flood-1.jpeg",
      alt: "Families displaced by the floods",
      span: false,
    },
    {
      src: "/flood-3.jpeg",
      alt: "Homes and roads damaged by flooding",
      span: false,
    },
  ],
};

export const footerLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Impact Report", href: "#" },
  { label: "Contact Us", href: "#" },
];

export type VolunteerSkill = {
  icon: "medical" | "logistics" | "teaching";
  title: string;
  description: string;
};

export const volunteerSkills: VolunteerSkill[] = [
  {
    icon: "medical",
    title: "Medical",
    description:
      "Providing essential care and health education in remote clinics.",
  },
  {
    icon: "logistics",
    title: "Logistics",
    description:
      "Ensuring vital supplies reach isolated mountain communities efficiently.",
  },
  {
    icon: "teaching",
    title: "Teaching & Education",
    description:
      "Empowering the next generation through language and vocational training in rural schools.",
  },
];

export const volunteerRoles = [
  "Medical",
  "Logistics",
  "Teaching",
  "General Support",
] as const;

export const volunteerCountries = [
  "Australia",
  "Canada",
  "France",
  "Germany",
  "India",
  "Japan",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "United Kingdom",
  "United States",
  "Other",
];
