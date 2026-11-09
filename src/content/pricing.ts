/** Plans and credit costs agreed in context/BUILD_PLAN.md. Keep both in sync. */
export type Plan = {
  name: string;
  price: string;
  period: string;
  summary: string;
  features: string[];
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    name: "BYOK",
    price: "$0",
    period: "forever",
    summary:
      "Use your own Claude or OpenAI API key. You pay your provider directly.",
    features: [
      "Critic and generator, every feature",
      "Your key is encrypted at rest and never logged",
      "Usage billed by your AI provider, not by us",
      "Unlimited projects and version history",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    summary: "Hosted AI, no API key needed.",
    features: [
      "200 credits every month",
      "Runs on Claude Sonnet, with Max quality on Claude Opus",
      "Top-up packs if you run out",
      "Everything in BYOK",
    ],
    highlight: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "per seat / month",
    summary: "Shared projects and pooled credits for small teams.",
    features: [
      "200 credits per seat, pooled across the team",
      "Shared workspace and projects",
      "Invites and member roles",
      "Everything in Pro",
    ],
  },
];

export const creditCosts = [
  { action: "Critique a screenshot or URL", credits: "1" },
  { action: "Generate a component or page", credits: "2" },
  { action: "Tweak a generation in chat", credits: "1" },
  { action: "Max quality (Claude Opus)", credits: "×2" },
];

export type Faq = { question: string; answer: string };

export const pricingFaqs: Faq[] = [
  {
    question: "Is there a free plan?",
    answer:
      "BYOK is free: bring your own Claude or OpenAI key and you only pay your provider. There is no free hosted usage, because every hosted run costs us real money on the AI provider's side.",
  },
  {
    question: "What is a credit?",
    answer:
      "A credit is one unit of hosted AI work. A critique costs 1 credit, a generation 2 and a chat tweak 1. Max quality runs on Claude Opus and costs twice as much.",
  },
  {
    question: "Do unused credits roll over?",
    answer:
      "No. Your monthly credits reset at each renewal. Top-up packs are there for busy months.",
  },
  {
    question: "Does this use my Claude.ai subscription?",
    answer:
      "No. Hosted runs use Glisten's own API account, and BYOK runs use the API key you add. Neither touches your Claude.ai or ChatGPT subscription limits.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You keep access until the end of the billing period you paid for. See the refund policy for details.",
  },
  {
    question: "When can I sign up?",
    answer:
      "Glisten is still in development. Plans open when the app launches; use the contact form if you want to hear when that happens.",
  },
];
