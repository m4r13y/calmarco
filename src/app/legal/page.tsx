import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Legal / Export Restrictions | ${site.brandName}`,
  description: `Legal notices and export restrictions for ${site.legalBusinessName}.`,
};

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Legal / Export Restrictions</h1>
  <p className="text-sm text-gray-600">Effective date: April 2024-Current</p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Availability</h2>
        <p className="text-foreground/90">
          Our services are operated from the United States and may be limited to jurisdictions where
          they are legally permitted. Availability may vary by region and regulatory requirements.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Export Compliance</h2>
        <p className="text-foreground/90">
          We do not intentionally offer products or services subject to U.S. export control
          classifications. Customers are responsible for ensuring their own use complies with
          applicable export, sanctions, and trade regulations.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Prohibited Use</h2>
        <p className="text-foreground/90">
          You may not use our services for unlawful activities or in violation of third‑party rights
          or applicable regulations, including sanctions programs.
        </p>
      </section>
    </main>
  );
}
