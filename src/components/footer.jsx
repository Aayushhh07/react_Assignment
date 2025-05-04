import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a modern company focused on delivering the best experience for our users. Our aim is to provide top-notch solutions with a user-friendly interface.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li><a href="mailto:info@example.com" className="text-gray-400 hover:text-blue-500 transition">spiderman@marvel.com</a></li>
              <li><a href="tel:+1234567890" className="text-gray-400 hover:text-blue-500 transition">+91-99188-30471</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-400 hover:text-blue-600 transition text-2xl" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-400 hover:text-blue-400 transition text-2xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-400 hover:text-pink-500 transition text-2xl" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-400 hover:text-blue-700 transition text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            &copy; 2025 My Landing Page. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
