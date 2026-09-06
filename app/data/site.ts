// Central place for page content so components stay presentational.

export type NavLink = { label: string; href: string };
export type HeroStat = { value: string; label: string };
export type CtaLink = { label: string; href: string };

export type HeroSlide = {
  image: string; // swap for the real image when provided
  badge: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type MissionPillar = {
  index: string;
  title: string;
  description: string;
  stat: string;
  image?: string; // optional — a placeholder shows until one is provided
};

export type ForumPost = {
  initials: string;
  name: string;
  role: string;
  time: string;
  message: string;
};

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
  { label: "Donate", href: "/mission" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Relief", href: "/#relief" },
  { label: "Contact", href: "/#footer" },
];

export const heroStats: HeroStat[] = [
  { value: "40+", label: "Guided routes" },
  { value: "12 yrs", label: "In-country teams" },
  { value: "$1.2M", label: "Relief delivered" },
];

// Homepage hero carousel. At least 3 slides; text changes with the image.
// Images below are temporary placeholders — replace `image` with the assets
// you send, and swap the copy per slide.
export const heroSlides: HeroSlide[] = [
  {
    image: "/NepalHome.jpg",
    badge: "Trips running • Relief fund open",
    title: "Where the sky touches the earth",
    description:
      "Experience the breathtaking landscapes and vibrant culture of the Himalayas while making a lasting impact on local communities.",
    primaryCta: { label: "Explore destinations", href: "/#destinations" },
    secondaryCta: { label: "Support the cause", href: "/#relief" },
  },
  {
    image: "/Annapurna.jpg",
    badge: "Slide 2 • placeholder",
    title: "Your headline for the second slide",
    description:
      "Placeholder copy for slide two. Send me the final wording and image and I will drop them straight in here.",
    primaryCta: { label: "Primary action", href: "#" },
    secondaryCta: { label: "Secondary action", href: "#" },
  },
  {
    image: "/Kathmandu.jpg",
    badge: "Slide 3 • placeholder",
    title: "Your headline for the third slide",
    description:
      "Placeholder copy for slide three. Send me the final wording and image and I will drop them straight in here.",
    primaryCta: { label: "Primary action", href: "#" },
    secondaryCta: { label: "Secondary action", href: "#" },
  },
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

// --- Mission & Purpose page (linked from the "Donate" nav item) ---

export const missionIntro = {
  eyebrow: "Our Mission & Purpose",
  titleLead: "Direct action.",
  titleEmphasis: "Unbroken kinship.",
  description:
    "We bridge global Nepali diaspora communities, international allies, and frontline mountain leaders to deliver immediate, unmediated crisis relief and community-guided rebuilding across the Himalayas.",
  tags: ["Rapid Emergency Response", "Zero Middleman Fees", "Open Public Ledger"],
};

export const operatingPillars: MissionPillar[] = [
  {
    index: "01",
    title: "Diaspora Relief Mobilization",
    description:
      "When landslides, winter isolations, or flash floods strike, Nepali professionals and allies across 30+ countries unite with urgency. We pool direct relief capital, coordinate medical tele-support, and wire funds directly to ground crews within hours.",
    stat: "Mobilized in hours during crises",
  },
  {
    index: "02",
    title: "Ground-Level Truth & Real People",
    description:
      "We bypass cumbersome bureaucratic intermediaries and NGO overhead. Relief priorities are defined strictly by village matriarchs, trekking guides, trail porters, and rural teachers who live the realities and know their valley's exact rebuilding needs.",
    stat: "100% community sign-off mandate",
  },
  {
    index: "03",
    title: "Open Community Platform",
    description:
      "An open space where global supporters, conscious trekkers, diaspora organizers, and mountain residents interact as equals. Members exchange live weather reports, share village stories, track expenditures, and co-plan local restoration projects.",
    stat: "Direct communication & live ledger",
  },
];

export const forumPosts: ForumPost[] = [
  {
    initials: "PT",
    name: "Pasang Tenzing",
    role: "Lead Guide • Namche",
    time: "1h ago",
    message:
      "Lower bridge anchors are secured before tonight's frost. Winter supply depot in Dingboche has 40 insulated tarps ready for families affected by the high ridge slide.",
  },
  {
    initials: "SG",
    name: "Sunita Gurung",
    role: "Diaspora Hub • Sydney",
    time: "3h ago",
    message:
      "Sydney circle matched the $4,200 medicine appeal in under 8 hours. Direct transfer receipt logged on chain #HC-4029. Dr. Roshan confirms supplies arrive in Pokhara depot tomorrow.",
  },
  {
    initials: "MA",
    name: "Maya Adhikari",
    role: "School Council • Dhading",
    time: "Yesterday",
    message:
      "Children returned to the reopened terrace classroom today after the footpath was cleared. Tremendous gratitude to the trekking group and alumni circle for supporting materials.",
  },
];

export const missionCta = {
  eyebrow: "Stand With the Mountain",
  title: "Join Our Circle of Action",
  description:
    "Whether contributing emergency relief, sharing expertise from the diaspora, or engaging as a conscious traveler, your presence makes an unmediated difference.",
  primaryCta: { label: "Donate Directly", href: "https://pmdrf.nchl.com.np/" },
  secondaryCta: { label: "Join the Platform", href: "/volunteer" },
};

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
