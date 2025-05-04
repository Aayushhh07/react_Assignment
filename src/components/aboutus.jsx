// src/components/AboutUs.jsx

import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>
          <p className="text-gray-700 mb-6">
            We are passionate about building modern, accessible, and engaging web solutions that empower our users and clients. Our team focuses on blending clean design with cutting-edge technology to create meaningful digital experiences.
          </p>
          <p className="text-gray-700">
            This landing page is an example of our dedication towards seamless user journeys, attractive interfaces, and clear communication. Join us on this exciting journey!
          </p>
        </div>
        <div>
          <iframe
            className="w-full h-64 md:h-80 rounded-lg shadow"
            src="https://www.youtube.com/embed/ApXoWvfEYVU?si=KjLhkJgDTlmDh0aM"
            title="About Us Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
