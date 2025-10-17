import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds & Disputes | ${site.brandName}`,
  description: `Refund and dispute policy for purchases made from ${site.legalBusinessName}.`,
};

export default function RefundsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Refund & Dispute Policy</h1>
  <p className="text-sm text-gray-600">Effective date: April 2024-Current</p>

      <p className="text-foreground/90">
        This Refund & Dispute Policy (the "Policy") applies to purchases made from {site.legalBusinessName}
        {site.dbaName ? (
          <> d/b/a {site.dbaName}</>
        ) : null}. It supplements and forms part of our <Link className="underline" href="/terms">Terms of Service</Link>.
        We provide conversion‑focused web applications, digital marketing programs, lead‑generation funnels,
        and white‑label software for insurance brokers, agents, and agencies. Many services are delivered by
        subscription and/or are tailored to the specific needs of each client.
      </p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Refunds</h2>
        <p className="text-foreground/90">
          Except where required by law or expressly stated in a written order form, fees are
          non‑refundable once a billing period begins. If you believe a charge was made in error,
          contact us within seven (7) days of the transaction so we can review your request.
        </p>
        <ul className="list-disc list-inside text-foreground/90">
          <li>Pre‑delivery, one‑time add‑on services may be refundable at our discretion.</li>
          <li>Completed, partially delivered, or in‑progress services are not refundable.</li>
          <li>Any approved refund will be issued to the original payment method only.</li>
        </ul>
        <p className="text-sm text-foreground/70">
          To request a refund review, please provide your organization name, invoice or receipt ID,
          charge date, amount, and a brief description of the issue.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Disputes</h2>
        <p className="text-foreground/90">
          Please contact us first regarding any billing concern so we can assist promptly. If a
          chargeback or payment dispute is initiated before giving us an opportunity to resolve the
          issue, resolution may be delayed. We reserve the right to contest chargebacks we believe
          are improper or unsupported by the facts.
        </p>
        <p className="text-foreground/90">
          Accounts with unpaid or disputed invoices may be suspended until the matter is resolved in
          accordance with our <Link className="underline" href="/terms">Terms of Service</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How to Contact Us</h2>
        <p className="text-foreground/90">
          Phone: {site.phone}
          <br />
          Address: {site.address.city}, {site.address.state} {site.address.postalCode}, {site.address.country}
        </p>
        <p className="text-sm text-foreground/60 mt-2">
          Your statutory rights are not affected by this Policy.
        </p>
      </section>
    </main>
  );
}
