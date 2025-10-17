"use client";

import { useState } from "react";

export default function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    // Simulate async submit; replace with real endpoint later
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-2">
      <input className="border rounded-md p-2 md:col-span-1" name="name" placeholder="Your name" required />
      <input className="border rounded-md p-2 md:col-span-1" name="email" placeholder="Email address" type="email" required />
      <input className="border rounded-md p-2 md:col-span-1" name="company" placeholder="Company (optional)" />
      <input className="border rounded-md p-2 md:col-span-1" name="phone" placeholder="Phone (optional)" />
      <textarea className="border rounded-md p-2 md:col-span-2" name="message" placeholder="What can we help with?" rows={5} required />
      <div className="md:col-span-2 flex items-center gap-3">
        <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? "Sending…" : "Send request"}</button>
        {submitted && (
          <span role="status" aria-live="polite" className="text-sm text-foreground/80">
            Thanks — we’ll be in touch within 1 business day.
          </span>
        )}
      </div>
    </form>
  );
}
