// src/Components/ContactUs.tsx
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded hover:bg-accentDark transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
