import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.brandName}`,
  description: `${site.brandName} services for brokers, agents, and agencies: ${site.productDescription}`,
};

const services = [
  {
    title: "Web Application Solutions",
    bullets: [
      "Client portals and lead intake flows",
      "Quote, enroll, and policy information tools",
      "Modern stacks and scalable infrastructure",
      "Security reviews and compliance-ready patterns",
    ],
  },
  {
    title: "Digital Media Marketing",
    bullets: [
      "Campaign strategy and creative",
      "Paid ads (Search, Social, Video)",
      "Landing pages and performance reporting",
      "A/B testing and creative optimization",
    ],
  },
  {
    title: "Lead Generation",
    bullets: [
      "Managed funnels and conversion rate optimization",
      "CRM and marketing automation integrations",
      "Attribution and analytics setup",
      "Compliance-first targeting and consent capture",
    ],
  },
  {
    title: "White Label Software",
    bullets: [
      "White-labeled portals and apps",
      "Usage-based pricing and licensing",
      "Support and ongoing maintenance",
      "Technical documentation and onboarding",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <section className="space-y-4">
  <h1 className="text-5xl md:text-6xl font-bold">Services</h1>
        <p className="text-foreground/80 max-w-3xl text-lg">{site.productDescription}</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card card-mint-subtle card-hover">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">{s.title}</h2>
            <ul className="list-check">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="card card-mint">
        <h2 className="text-xl font-semibold mb-2">Ready to get started?</h2>
  <p className="text-foreground/80 mb-4">Book a demo to discuss goals, timelines, and scope.</p>
  <Link href="/pricing" className="btn btn-primary">Request a demo</Link>
      </section>
    </main>
  );
}
