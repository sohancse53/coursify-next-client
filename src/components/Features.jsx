"use client";
import { FaChalkboardTeacher, FaCertificate, FaLaptopCode, FaUsers } from "react-icons/fa";

const Features = () => {
    const items = [
            {
              icon: <FaChalkboardTeacher size={35} />,
              title: "Expert Instructors",
              desc: "Learn from highly experienced professionals."
            },
            {
              icon: <FaLaptopCode size={35} />,
              title: "Practical Lessons",
              desc: "Hands-on learning with real-world projects."
            },
            {
              icon: <FaCertificate size={35} />,
              title: "Certification",
              desc: "Get verified certificates after course completion."
            },
            {
              icon: <FaUsers size={35} />,
              title: "Community",
              desc: "Join thousands of active learners globally."
            }
          ]

  return (
    <section className="py-20 bg-gradient-to-br ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose <span className="text-blue-600">Coursify</span>?</h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          Learn anything, anytime, anywhere with top instructors and modern tools.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {
          items.map((item, i) => (
            <div key={i} className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Features;
