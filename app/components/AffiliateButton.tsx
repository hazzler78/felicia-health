"use client";
import Link from "next/link";

type AffiliateButtonProps = {
  href: string;
  children: React.ReactNode;
  trackingId?: string;
};

export default function AffiliateButton({ href, children }: AffiliateButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-[--color-accent-pink] px-5 py-2.5 font-semibold text-zinc-900 shadow-sm hover:opacity-90 transition"
    >
      {children}
    </Link>
  );
}


