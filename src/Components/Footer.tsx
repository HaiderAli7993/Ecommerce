import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="mx-2 text-gray-400 hover:text-accent">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-accent">
            Terms of Service
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-accent">
            Contact Us
          </a>
        </div>
        <p>&copy; 2024 E-Commerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
