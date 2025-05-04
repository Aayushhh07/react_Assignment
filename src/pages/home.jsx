// src/pages/home.jsx

import React, { useRef, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutUs from '../components/aboutus';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import your local images
import feature1 from '../assets/images/SM1.jpeg';
import feature2 from '../assets/images/SM2.jpeg';
import feature3 from '../assets/images/SM3.jpeg';
import feature4 from '../assets/images/SM4.jpeg';

const Home = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToCards = () => {
    cardsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Array of image imports and content
  const features = [
    {
      img: feature1,
      title: 'Modern Design',
      desc: 'Clean and responsive layouts to captivate your audience.',
    },
    {
      img: feature2,
      title: 'Fast Performance',
      desc: 'Optimized code ensuring blazing fast experiences.',
    },
    {
      img: feature3,
      title: 'Intuitive Interface',
      desc: 'Easy navigation and seamless interactions for users.',
    },
    {
      img: feature4,
      title: 'Reliable Support',
      desc: 'Our team is always ready to assist you promptly.',
    },
  ];

  return (
    <div className="bg-white w-screen">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

          <div className="relative z-10 text-center max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-4 leading-tight">
              Welcome to <br /> <span className="text-blue-800">My Landing Page</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-700 mb-8">
              Experience a modern, clean and beautiful interface designed to impress and engage.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button
                onClick={scrollToCards}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-lg"
              >
                Get Started
              </button>
              <a
                href="#learn-more"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition shadow"
              >
                Learn More
              </a>
            </div>
          </div>

          <img
            src="put link here "
            alt="Hero"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl opacity-20 pointer-events-none select-none"
          />
        </section>

        {/* Cards Section */}
        <section ref={cardsRef} className="py-20 bg-white" id="features">
          <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-blue-600 mb-8">Our Features</h2>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-blue-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
                    {/* Card Image */}
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-64 object-cover rounded-t-2xl" // Adjusted to create portrait aspect
                    />

                    {/* Card Content */}
                    <div className="p-6 flex flex-col justify-between h-56">
                      <h3 className="text-2xl font-semibold text-blue-700 mb-3">{feature.title}</h3>
                      <p className="text-blue-600 text-sm mb-4">{feature.desc}</p>
                      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        
        <AboutUs />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
