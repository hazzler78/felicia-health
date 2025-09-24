"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="card p-5"
    >
      <div className="text-sm font-medium">Join the newsletter</div>
      <div className="mt-2 flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-xl border border-zinc-200 px-3 py-2"
          required
        />
        <button className="rounded-xl bg-[--color-accent-pink] px-4 py-2 font-medium">Subscribe</button>
      </div>
      {submitted && (
        <p className="text-xs text-zinc-600 mt-2">Thanks! Youre on the list.</p>
      )}
    </form>
  );
}


