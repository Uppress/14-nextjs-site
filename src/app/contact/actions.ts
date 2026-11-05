"use server";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { budgetOptions, type ContactFormState, type ContactValues } from "./form-types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function saveLocalSubmission(values: ContactValues) {
  const directory = join(process.cwd(), "data");
  const filePath = join(directory, "contact-submissions.json");
  await mkdir(directory, { recursive: true });

  let submissions: unknown[] = [];
  try {
    const contents = await readFile(filePath, "utf8");
    const parsed: unknown = JSON.parse(contents);
    if (!Array.isArray(parsed)) {
      throw new Error("Contact submissions file must contain a JSON array.");
    }
    submissions = parsed;
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      submissions = [];
    } else {
      throw error;
    }
  }

  submissions.push({ ...values, createdAt: new Date().toISOString() });
  await writeFile(filePath, `${JSON.stringify(submissions, null, 2)}\n`, "utf8");
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values: ContactValues = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    budget: String(formData.get("budget") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
  const errors: ContactFormState["errors"] = {};

  if (values.name.length < 2 || values.name.length > 100) {
    errors.name = "Enter your name (2–100 characters).";
  }

  if (values.email.length > 254 || !emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!budgetOptions.some((option) => option.value === values.budget)) {
    errors.budget = "Choose a budget range.";
  }

  if (values.message.length < 10 || values.message.length > 5000) {
    errors.message = "Your message must be between 10 and 5,000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, values };
  }

  if (process.env.NODE_ENV !== "development") {
    return {
      ok: false,
      errors: { _form: "Message delivery is not configured in this environment yet. Please email hello@northstar.digital." },
      values,
    };
  }

  await saveLocalSubmission(values);
  return { ok: true, errors: {}, values: { name: "", email: "", budget: "", message: "" } };
}
