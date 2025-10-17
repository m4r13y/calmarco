import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${site.brandName}`,
  description: `Terms of service for ${site.legalBusinessName}.`,
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
  <p className="text-sm text-gray-600">Effective date: April 2024-Current</p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Agreement</h2>
        <p className="text-foreground/90">
          These Terms of Service (the "Terms") govern your use of products and services provided by {site.legalBusinessName}
           ("we", "us"). By accessing or using our services, you agree
          to be bound by these Terms.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Services</h2>
        <p className="text-foreground/90">
          We provide {site.productDescription} Offerings may be delivered via subscription, one‑time projects,
          or white‑label licensing as described in applicable order forms or statements of work.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Accounts & Responsibilities</h2>
        <p className="text-foreground/90">
          You are responsible for the accuracy of information you provide, for maintaining the security of
          credentials, and for activity under your account. You will comply with all applicable laws and
          not use the services for unlawful purposes.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Fees & Billing</h2>
        <p className="text-foreground/90">
          Subscriptions renew automatically until canceled. By subscribing, you authorize recurring
          charges to your payment method for the then‑current fees and applicable taxes. See our {" "}
          <Link className="underline" href="/refunds">Refund & Dispute Policy</Link> and {" "}
          <Link className="underline" href="/cancellation">Cancellation Policy</Link> for details.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Intellectual Property</h2>
        <p className="text-foreground/90">
          We and our licensors retain all right, title, and interest in and to the services, software,
          and content. Subject to these Terms, we grant you a limited, non‑exclusive, non‑transferable
          license to use deliverables for your internal business purposes.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Confidentiality</h2>
        <p className="text-foreground/90">
          Each party will protect the other party’s non‑public information with reasonable care and use
          it only to perform obligations under these Terms.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Warranties & Disclaimers</h2>
        <p className="text-foreground/90">
          Services are provided "as is" and "as available" without warranties of any kind, to the maximum
          extent permitted by law.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
        <p className="text-foreground/90">
          To the maximum extent permitted by law, neither party will be liable for indirect, incidental,
          special, consequential, or punitive damages, or for lost profits, revenue, or data.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Termination</h2>
        <p className="text-foreground/90">
          Either party may terminate for material breach not cured within thirty (30) days after written
          notice. Upon termination, your access may be disabled and outstanding fees become due.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Governing Law</h2>
        <p className="text-foreground/90">
          These Terms are governed by applicable U.S. federal law and the laws of the state where we are
          organized, without regard to conflict‑of‑laws principles.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-foreground/90">
          Questions about these Terms? Visit our <Link className="underline" href="/contact">Contact</Link> page.
        </p>
      </section>
    </main>
  );
}
