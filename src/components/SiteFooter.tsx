import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-16 bg-background/60">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3 text-base">
        <div className="space-y-2">
          <div className="text-xl font-bold">{site.brandName}</div>
          <p className="text-foreground/70">
            {site.productDescription}
          </p>
        </div>
        <div>
          <div className="text-lg font-bold mb-2">Company</div>
          <ul className="space-y-1">
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            <li><Link className="hover:underline" href="/terms">Terms of Service</Link></li>
            <li><Link className="hover:underline" href="/refunds">Refunds & Disputes</Link></li>
            <li><Link className="hover:underline" href="/cancellation">Cancellation Policy</Link></li>
            <li><Link className="hover:underline" href="/legal">Legal / Export Restrictions</Link></li>
            <li><Link className="hover:underline" href="/promotions">Promotions Terms</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-lg font-bold mb-2">Contact</div>
          <p className="text-foreground/70">
            {site.address.city}, {site.address.state} {site.address.postalCode}<br />
            {site.address.country}
            <br />
            Phone: {site.phone}
          </p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-foreground/60">
        © {new Date().getFullYear()} {site.legalBusinessName}
      </div>
    </footer>
  );
}
