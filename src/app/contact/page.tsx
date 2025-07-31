import CalendlyWidget from "@/components/CalendlyWidget";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Book time with me
          </h1>
        </div>

        <p className="text-center mb-8 text-2xl ">
          Free 30-minute consultation to solve your marketing problem.
        </p>
        {/* Calendly Widget */}
        <CalendlyWidget />
      </div>
    </div>
  );
};

export default page;
