import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Pricing | ${site.brandName}`,
  description: `Custom pricing and demos for ${site.brandName}.` ,
};

export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <section className="space-y-4">
  <h1 className="text-5xl md:text-6xl font-bold">Pricing</h1>
        <p className="text-foreground/80 max-w-3xl text-lg">
          Every engagement is unique. We develop a plan that fits your goals and resources. Most
          clients choose a monthly subscription with optional add-ons for campaigns and custom dev.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="card card-mint-subtle p-6">
          <h2 className="text-2xl font-semibold">Starter</h2>
          <p className="text-sm text-foreground/70 mb-3">Best for getting the basics in place.</p>
          <ul className="list-check text-sm">
            <li>Foundational web presence</li>
            <li>Lead capture landing page</li>
            <li>Basic analytics</li>
          </ul>
        </div>
        <div className="card card-mint-subtle p-6 ring-1 ring-primary/20">
          <h2 className="text-2xl font-semibold">Growth</h2>
          <p className="text-sm text-foreground/70 mb-3">Most popular for active scaling.</p>
          <ul className="list-check text-sm">
            <li>Multi-page site + funnels</li>
            <li>Paid media management</li>
            <li>Conversion tracking & CRM</li>
          </ul>
        </div>
        <div className="card card-mint-subtle p-6">
          <h2 className="text-2xl font-semibold">Enterprise</h2>
          <p className="text-sm text-foreground/70 mb-3">For complex programs and teams.</p>
          <ul className="list-check text-sm">
            <li>Custom apps & integrations</li>
            <li>Dedicated success manager</li>
            <li>Advanced reporting</li>
          </ul>
        </div>
      </section>

      <section className="card card-mint p-6">
  <h2 className="text-3xl font-semibold mb-2">Request a demo</h2>
  <p className="text-foreground/80 mb-4 text-lg">Tell us about your goals and challenges. We'll follow up within 1 business day.</p>
        <form action="https://formspree.io/f/your-id" method="POST" className="grid gap-3 md:grid-cols-2">
          <input className="border rounded-md p-2 md:col-span-1" name="name" placeholder="Your name" required />
          <input className="border rounded-md p-2 md:col-span-1" name="email" placeholder="Email address" type="email" required />
          <input className="border rounded-md p-2 md:col-span-1" name="company" placeholder="Company (optional)" />
          <input className="border rounded-md p-2 md:col-span-1" name="phone" placeholder="Phone (optional)" />
          <textarea className="border rounded-md p-2 md:col-span-2" name="message" placeholder="What can we help with?" rows={5} required />
          <div className="md:col-span-2">
            <button className="btn btn-primary" type="submit">Send request</button>
          </div>
        </form>
        <p className="text-xs text-foreground/60 mt-3">
          By submitting, you agree to our <Link className="underline" href="/terms">Terms of Service</Link> and acknowledge our <Link className="underline" href="/refunds">Refund & Dispute Policy</Link>.
        </p>
      </section>
    </main>
  );
}
