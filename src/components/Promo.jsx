"use client";


import Link from "next/link";
import { FaChalkboardTeacher, FaCertificate, FaLaptopCode } from "react-icons/fa";

const PromoBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative rounded-2xl mb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Start Learning Today with <span className="text-yellow-300">Coursify</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Join thousands of students worldwide and gain skills that really matter.  
          Learn from experts, earn certificates, and boost your career.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Link href={'/courses'} className="btn bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Browse Courses
          </Link>
    
        </div>

        {/* Features / Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaChalkboardTeacher size={30} className="text-yellow-300" />,
              title: "Expert Instructors",
              desc: "Learn from highly experienced industry professionals."
            },
            {
              icon: <FaLaptopCode size={30} className="text-yellow-300" />,
              title: "Hands-on Projects",
              desc: "Practice real-world projects to gain practical experience."
            },
            {
              icon: <FaCertificate size={30} className="text-yellow-300" />,
              title: "Verified Certificates",
              desc: "Get certificates that showcase your newly acquired skills."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Decorative Shapes / Blobs */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-yellow-400/30 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/30 rounded-full filter blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default PromoBanner;
