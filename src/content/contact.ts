export const contactTopics = [
  { value: "general", label: "General question" },
  { value: "early-access", label: "Tell me when Glisten launches" },
  { value: "billing", label: "Billing" },
  { value: "feedback", label: "Feedback or a bug" },
] as const;

export type ContactTopic = (typeof contactTopics)[number]["value"];

export const contactLimits = { name: 100, email: 254, message: 5000 } as const;
