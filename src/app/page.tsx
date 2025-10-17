import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <p className="text-sm uppercase tracking-[0.22em] text-foreground/60">
          {site.legalBusinessName.replace(", LLC", "")}
        </p>
        <h1 className="mt-3 text-[clamp(56px,10vw,128px)] tight leading-[0.9] font-bold tracking-[-0.05em]">
          GROW <span className="text-primary">YOUR</span> INSURANCE <span className="text-primary">BUSINESS</span>
        </h1>
        <p className="mt-4 max-w-3xl text-xl text-foreground/80">
          {site.productDescription}
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/pricing" className="btn btn-primary">Request a demo</Link>
          <Link href="/services" className="btn btn-outline">Explore services</Link>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-6 grid gap-4 md:grid-cols-3">
        {[
          { title: "Built for conversion", desc: "Funnels, apps, and content designed to turn traffic into pipeline." },
          { title: "Made for insurance", desc: "Workflows and tools that fit real broker and agency operations." },
          { title: "From idea to scale", desc: "Strategy, execution, and iteration in one cohesive program." },
        ].map((f) => (
          <div key={f.title} className="card card-mint-subtle card-hover p-5">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-foreground/70 mt-1">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Service highlights */}
      <section className="mx-auto max-w-6xl px-6 py-12">
  <h2 className="text-4xl font-bold mb-6">What we do</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Web Applications", desc: "Custom portals, intake flows, dashboards, and tools that support sales and service." },
            { title: "Digital Marketing", desc: "Campaigns across search, social, and video with landing pages and analytics." },
            { title: "Lead Generation", desc: "Compliant acquisition funnels with CRM integrations and attribution." },
            { title: "White‑Label Software", desc: "Rebrandable portals and apps to deliver premium client experiences under your brand." },
          ].map((s) => (
            <div key={s.title} className="card card-mint-subtle card-hover p-6">
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-foreground/80 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/services" className="btn btn-primary">See all services</Link>
        </div>
      </section>

      {/* Contact strip */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="card card-mint p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Have a goal in mind?</h3>
            <p className="text-foreground/70 text-lg">Let's map a path to revenue and build the system together.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/pricing" className="btn btn-primary">Request a demo</Link>
            <Link href="/contact" className="btn btn-outline">Talk to us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
