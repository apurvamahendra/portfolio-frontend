"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyWidget() {
  return (
    <div className="h-[700px] disable-scrollbars overflow-y-hidden">
      {" "}
      {/* Adjust height as needed */}
      <InlineWidget
        url=" https://calendly.com/apurva-mahendra-vjlc/30min?back=1&month=2025-07"
        className="h-full"
      />
    </div>
  );
}
