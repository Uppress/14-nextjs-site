export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  priceFrom: number;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "brand-strategy",
    title: "Brand strategy",
    summary: "Find your point of view and give your brand room to grow.",
    description:
      "Build a clear foundation for your next chapter. We uncover what makes your business distinct and turn it into a strategy your team can use.",
    features: ["Positioning and research", "Audience and competitor insights", "Brand architecture", "Strategic roadmap"],
    priceFrom: 3500,
    icon: "✳",
  },
  {
    slug: "visual-identity",
    title: "Visual identity",
    summary: "A recognizable identity built to work everywhere.",
    description:
      "Bring your strategy to life with an identity that feels unmistakably yours, works across every touchpoint, and stays useful as your business evolves.",
    features: ["Logo and visual system", "Color and typography", "Art direction", "Brand guidelines"],
    priceFrom: 5000,
    icon: "◈",
  },
  {
    slug: "web-design",
    title: "Web design",
    summary: "Thoughtful digital experiences made for real people.",
    description:
      "Create a website that makes your value clear and gives visitors an intuitive path forward, from early concepts through polished responsive designs.",
    features: ["UX research and structure", "Wireframes and prototyping", "Responsive UI design", "Design handoff"],
    priceFrom: 6000,
    icon: "▧",
  },
  {
    slug: "web-development",
    title: "Web development",
    summary: "Fast, accessible websites designed to grow with you.",
    description:
      "Turn a considered design into a reliable, responsive website. We build with performance, accessibility, and straightforward content updates in mind.",
    features: ["Frontend development", "CMS integration", "Accessibility and SEO foundations", "Launch support"],
    priceFrom: 8000,
    icon: "⌘",
  },
  {
    slug: "growth-marketing",
    title: "Growth marketing",
    summary: "Turn good ideas into measurable, lasting momentum.",
    description:
      "Focus your marketing around the right audience and the right opportunities, then learn from each campaign to make the next one work harder.",
    features: ["Go-to-market planning", "Channel strategy", "Campaign development", "Measurement and optimization"],
    priceFrom: 2500,
    icon: "↗",
  },
  {
    slug: "content-strategy",
    title: "Content strategy",
    summary: "Make useful stories that connect with the people you want to reach.",
    description:
      "Give your content a clear purpose, a consistent voice, and a sustainable plan so every story supports your audience and your business goals.",
    features: ["Content audits", "Messaging and voice", "Editorial planning", "Content performance framework"],
    priceFrom: 2000,
    icon: "◌",
  },
];

export function getServices(): Service[] {
  return services;
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
