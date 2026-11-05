export const budgetOptions = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000–$10,000" },
  { value: "10k-25k", label: "$10,000–$25,000" },
  { value: "25k-50k", label: "$25,000–$50,000" },
  { value: "50k-plus", label: "$50,000+" },
] as const;

export type ContactValues = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

export type ContactField = keyof ContactValues;

export type ContactErrors = Partial<Record<ContactField | "_form", string>>;

export type ContactFormState = {
  ok: boolean;
  errors: ContactErrors;
  values: ContactValues;
};

export const initialContactFormState: ContactFormState = {
  ok: false,
  errors: {},
  values: { name: "", email: "", budget: "", message: "" },
};
