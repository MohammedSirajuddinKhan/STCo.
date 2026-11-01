"use client";

import { useState } from "react";

export function ClearSiteData() {
  const [message, setMessage] = useState("");

  function clearData() {
    let removed = 0;

    try {
      for (let index = localStorage.length - 1; index >= 0; index -= 1) {
        const key = localStorage.key(index);
        if (key !== null) {
          localStorage.removeItem(key);
          removed += 1;
        }
      }
      for (let index = sessionStorage.length - 1; index >= 0; index -= 1) {
        const key = sessionStorage.key(index);
        if (key !== null) {
          sessionStorage.removeItem(key);
          removed += 1;
        }
      }

      const cookies = document.cookie ? document.cookie.split(";") : [];
      for (const cookie of cookies) {
        const name = cookie.split("=")[0]?.trim();
        if (name) {
          document.cookie = `${name}=; Max-Age=0; path=/`;
        }
      }

      setMessage(
        removed > 0
          ? `Cleared ${removed} locally stored item${removed === 1 ? "" : "s"} on this browser.`
          : "No locally stored site data was found on this browser. Nothing needed clearing.",
      );
    } catch {
      setMessage(
        "This browser blocked the request. You can clear site data from your browser’s privacy settings instead.",
      );
    }
  }

  return (
    <div className="not-prose my-8 border border-[var(--hairline-strong)] p-6">
      <p className="eyebrow-sm text-olive-deep">Browser data control</p>
      <p className="mt-3 max-w-[52ch] text-[0.875rem] leading-relaxed text-ink/70">
        This site does not currently set cookies. You can still use this control
        to remove any site data your browser may have stored, including data
        saved by the host or a future feature.
      </p>
      <button type="button" className="btn btn--solid mt-5" onClick={clearData}>
        Clear local site data
      </button>
      <p aria-live="polite" className="mt-4 text-[0.8125rem] leading-relaxed text-ink/60">
        {message}
      </p>
    </div>
  );
}
