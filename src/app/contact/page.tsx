import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${site.brandName}`,
  description: `Get in touch with ${site.brandName}. We typically respond within 1 business day.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="max-w-2xl mb-8">
  <h1 className="text-5xl md:text-6xl font-bold">Get in touch</h1>
        <p className="text-foreground/80 mt-3 text-lg">
          Tell us about your goals and challenges. We'll follow up with next steps and a time to connect.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Form */}
  <section className="md:col-span-2 card p-6 card-mint-subtle">
          <h2 className="text-3xl font-semibold mb-4">Send a message</h2>
          <ContactForm />
          <p className="text-xs text-foreground/60 mt-3">
            By submitting, you agree to our <Link className="underline" href="/terms">Terms of Service</Link> and acknowledge our {" "}
            <Link className="underline" href="/refunds">Refund & Dispute Policy</Link>.
          </p>
        </section>

        {/* Sidebar */}
  <aside className="card p-6 space-y-4 card-mint-subtle">
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-foreground/80 mt-1">
              Phone: {site.phone}
              <br />
              {site.address.city}, {site.address.state} {site.address.postalCode}
              <br />
              {site.address.country}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Hours</h3>
            <p className="text-foreground/80 mt-1">Mon–Fri, 9am–5pm CT</p>
            <p className="text-foreground/60 text-sm">We typically respond within 1 business day.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Helpful links</h3>
            <ul className="list-check">
              <li><Link className="underline" href="/services">Services</Link></li>
              <li><Link className="underline" href="/pricing">Pricing / Demo</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
