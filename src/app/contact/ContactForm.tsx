"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit; replace with real endpoint later
    const form = e.currentTarget;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 600);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-2">
        <div className="grid gap-1">
          <label className="text-base font-semibold" htmlFor="name">Name</label>
          <input id="name" name="name" className="border rounded-md p-2" placeholder="Your name" required />
        </div>
        <div className="grid gap-1">
          <label className="text-base font-semibold" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="border rounded-md p-2" placeholder="you@company.com" required />
        </div>
        <div className="grid gap-1">
          <label className="text-base font-semibold" htmlFor="company">Company</label>
          <input id="company" name="company" className="border rounded-md p-2" placeholder="Company (optional)" />
        </div>
        <div className="grid gap-1">
          <label className="text-base font-semibold" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" className="border rounded-md p-2" placeholder="Phone (optional)" />
        </div>
        <div className="grid gap-1 md:col-span-2">
          <label className="text-base font-semibold" htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" className="border rounded-md p-2" placeholder="Write your message" rows={6} required />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? "Sending…" : "Send message"}</button>
          {submitted && (
            <span role="status" aria-live="polite" className="text-sm text-foreground/80">
              Thanks — we’ll be in touch within 1 business day.
            </span>
          )}
        </div>
      </form>
    </>
  );
}
