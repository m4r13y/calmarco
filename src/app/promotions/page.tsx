import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Promotions Terms | ${site.brandName}`,
  description: `Terms and conditions for promotions offered by ${site.legalBusinessName}.`,
};

export default function PromotionsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Promotions Terms</h1>
  <p className="text-sm text-gray-600">Effective date: April 2024-Current</p>

      <ul className="list-disc list-inside space-y-1 text-foreground/90">
        <li>Promotions are time‑limited and subject to change or withdrawal without notice.</li>
        <li>Unless stated otherwise, promotions cannot be combined and apply to new purchases only.</li>
        <li>Eligibility requirements will be specified in the applicable promotional materials.</li>
        <li>We may modify or cancel any promotion if fraud, abuse, or error is suspected.</li>
      </ul>

      <p className="text-foreground/90">
        Specific details for each promotion will include duration, eligibility, applicable products or
        services, and any limitations or exclusions.
      </p>
    </main>
  );
}
