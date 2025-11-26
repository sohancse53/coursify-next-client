"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

import slide1 from "../../../public/slide1.jpg";
import slide2 from "../../../public/slide2.jpg";
import slide3 from "../../../public/slide3.jpg";
import Link from "next/link";

const Banner = () => {
  const slides = [
    {
      img: slide1,
      title: "Learn From Industry Experts",
      subtitle: "Grow your career with high-quality courses designed for real-world skills.",
    },
    {
      img: slide2,
      title: "Master Skills That Matter",
      subtitle: "From Web Development to UI/UX — gain modern skills that get you hired.",
    },
    {
      img: slide3,
      title: "Your Learning Journey Starts Here",
      subtitle: "Access practical lessons and hands-on projects to level up your expertise.",
    },
  ];

  return (
    <div className="w-full h-[90vh] mt-5 rounded-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full relative">
              {/* Background Image */}
              <Image
                src={slide.img}
                alt={`slide-${idx}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />

             
              <div className="absolute inset-0 bg-black/50"></div>

            
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow-lg">
                  {slide.subtitle}
                </p>

                <Link href={'/courses'} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg text-lg">
                  Explore Courses
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
