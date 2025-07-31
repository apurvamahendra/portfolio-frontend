import React from "react";
import { ContactForm } from "@/components/ContactForm";

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I&apos;d love to hear from you. Send me a message and I&apos;ll get
            back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">apurva.mahendra@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Response Time</h3>
              <p className="text-gray-300">Usually within 24 hours</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Available worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
