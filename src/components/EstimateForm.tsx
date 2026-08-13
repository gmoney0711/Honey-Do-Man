"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";

const serviceChoices = [
  "Lawn Care",
  "Pressure Washing",
  "Gutters",
  "Handyman",
  "Property Cleanup",
  "Inherited / Estate Property",
  "Pre-Sale Preparation",
  "Move-Out",
  "Multiple Services",
  "Other",
];

const propertyTypes = ["House", "Townhome", "Rental", "Vacant Property", "Inherited Property", "Other"];
const propertySizes = ["Under 1,000 sqft", "1,000-1,500", "1,500-2,000", "2,000-3,000", "3,000+"];
const contactMethods = ["Phone", "Text", "Email"];
const preferredTimes = ["Morning", "Afternoon", "Evening"];

type FormState = {
  services: string[];
  address: string;
  city: string;
  state: string;
  zip: string;
  propertyType: string;
  propertySize: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  details: string;
  files: File[];
  contactMethod: string;
  preferredTime: string;
};

const initialState: FormState = {
  services: [],
  address: "",
  city: "",
  state: "TX",
  zip: "",
  propertyType: "",
  propertySize: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  details: "",
  files: [],
  contactMethod: "",
  preferredTime: "",
};

export function EstimateForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);

  const canContinue = useMemo(() => {
    switch (step) {
      case 1:
        return form.services.length > 0;
      case 2:
        return form.address && form.city && form.state && form.zip;
      case 3:
        return form.propertyType && form.propertySize;
      case 4:
        return form.firstName && form.lastName && form.phone && form.email;
      case 5:
        return form.details.length > 4;
      case 6:
        return form.contactMethod && form.preferredTime;
      default:
        return false;
    }
  }, [form, step]);

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onFiles = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, files: Array.from(event.target.files ?? []) }));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="estimate" className="section-shell">
        <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-hdm-accent/40 bg-hdm-card p-8 text-center md:p-12">
          <p className="text-xs font-bold tracking-[0.18em] text-hdm-muted">ESTIMATE REQUEST</p>
          <h2 className="mt-4 text-4xl font-black text-hdm-text md:text-5xl">REQUEST RECEIVED.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-hdm-muted">
            Your HDM request is in. We&apos;ll review the details and get back to you shortly.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="tel:+1-346-360-7235" className="cta-primary">
              CALL HDM
            </a>
            <a href="#top" className="cta-secondary">
              BACK TO HOME
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate" className="section-shell">
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-white/10 bg-hdm-card/90 p-6 md:p-10">
        <h2 className="section-title text-left">REQUEST MY FREE ESTIMATE</h2>
        <p className="section-copy mt-2 text-left">Step {step} of 6</p>

        <form onSubmit={submit} className="mt-8 space-y-6">
          {step === 1 ? (
            <div>
              <h3 className="form-title">WHAT DO YOU NEED HELP WITH?</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {serviceChoices.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`rounded-xl border px-4 py-4 text-left text-base font-semibold ${
                      form.services.includes(service)
                        ? "border-hdm-accent bg-hdm-accent/15 text-hdm-text"
                        : "border-white/15 bg-hdm-secondary/60 text-hdm-muted"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <h3 className="form-title sm:col-span-2">PROPERTY</h3>
              <label className="form-field sm:col-span-2">Address<input value={form.address} onChange={(e) => updateField("address", e.target.value)} required className="form-input" /></label>
              <label className="form-field">City<input value={form.city} onChange={(e) => updateField("city", e.target.value)} required className="form-input" /></label>
              <label className="form-field">State<input value={form.state} onChange={(e) => updateField("state", e.target.value)} required className="form-input" /></label>
              <label className="form-field">ZIP<input value={form.zip} onChange={(e) => updateField("zip", e.target.value)} required className="form-input" /></label>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <h3 className="form-title sm:col-span-2">PROPERTY DETAILS</h3>
              <label className="form-field">
                Property type
                <select value={form.propertyType} onChange={(e) => updateField("propertyType", e.target.value)} required className="form-input">
                  <option value="">Select one</option>
                  {propertyTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="form-field">
                Approximate property size
                <select value={form.propertySize} onChange={(e) => updateField("propertySize", e.target.value)} required className="form-input">
                  <option value="">Select one</option>
                  {propertySizes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <h3 className="form-title sm:col-span-2">YOUR INFORMATION</h3>
              <label className="form-field">First name<input value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} required className="form-input" /></label>
              <label className="form-field">Last name<input value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} required className="form-input" /></label>
              <label className="form-field">Phone<input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} required className="form-input" /></label>
              <label className="form-field">Email<input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} required className="form-input" /></label>
            </div>
          ) : null}

          {step === 5 ? (
            <div className="space-y-4">
              <h3 className="form-title">TELL US MORE</h3>
              <label className="form-field">
                Tell us what needs to be done...
                <textarea
                  value={form.details}
                  onChange={(e) => updateField("details", e.target.value)}
                  required
                  rows={6}
                  className="form-input"
                />
              </label>
              <label className="form-field">
                Upload photos
                <input type="file" multiple accept="image/*" onChange={onFiles} className="form-input file:mr-3 file:rounded-md file:border-0 file:bg-hdm-accent file:px-3 file:py-2 file:text-sm file:font-bold file:text-hdm-bg" />
              </label>
              {form.files.length > 0 ? (
                <p className="text-sm text-hdm-muted">{form.files.length} file(s) selected.</p>
              ) : null}
            </div>
          ) : null}

          {step === 6 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <h3 className="form-title sm:col-span-2">PREFERRED CONTACT</h3>
              <label className="form-field">
                Contact method
                <select value={form.contactMethod} onChange={(e) => updateField("contactMethod", e.target.value)} required className="form-input">
                  <option value="">Select one</option>
                  {contactMethods.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="form-field">
                Preferred time
                <select value={form.preferredTime} onChange={(e) => updateField("preferredTime", e.target.value)} required className="form-input">
                  <option value="">Select one</option>
                  {preferredTimes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button type="button" onClick={() => setStep((value) => Math.max(1, value - 1))} disabled={step === 1} className="cta-secondary disabled:cursor-not-allowed disabled:opacity-50">
              BACK
            </button>
            {step < 6 ? (
              <button type="button" onClick={() => setStep((value) => Math.min(6, value + 1))} disabled={!canContinue} className="cta-primary disabled:cursor-not-allowed disabled:opacity-60">
                CONTINUE
              </button>
            ) : (
              <button type="submit" disabled={!canContinue} className="cta-primary disabled:cursor-not-allowed disabled:opacity-60">
                REQUEST MY FREE ESTIMATE →
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
