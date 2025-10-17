import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Cancellation Policy | ${site.brandName}`,
  description: `Cancellation policy for ${site.legalBusinessName}.`,
};

export default function CancellationPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Cancellation Policy</h1>
  <p className="text-sm text-gray-600">Effective date: April 2024-Current</p>

      <p className="text-foreground/90">
        You may cancel your subscription at any time in accordance with these terms. Cancellations
        take effect at the end of the current billing period. Access to services will continue
        through the end of the paid term unless otherwise stated in an order form or statement of work.
      </p>

      <ul className="list-disc list-inside space-y-1 text-foreground/90">
        <li>Fees are not pro‑rated for partial periods unless required by law.</li>
        <li>Cancellation does not automatically remove stored data; contact us for export options.</li>
        <li>Custom or one‑time projects may include separate cancellation terms in their SOWs.</li>
      </ul>

      <p className="text-foreground/90">
        To cancel, contact customer support at {site.phone}. For refunds and charge disputes, see our {" "}
        <Link className="underline" href="/refunds">Refund & Dispute Policy</Link>.
      </p>
    </main>
  );
}
