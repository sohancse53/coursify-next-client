"use client";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const data = [
    {
      name: "Arif Khan",
      review:
        "Coursify helped me become a full-stack developer. The lessons are super clear and practical!",
      role: "Web Developer",
    },
    {
      name: "Sadia Rahman",
      review: "The UI/UX course was amazing. The instructor was so helpful!",
      role: "UI Designer",
    },
    {
      name: "Rahim Uddin",
      review: "Best platform to learn Next.js! 100% recommended.",
      role: "Frontend Engineer",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Students Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl shadow-xl bg-white/40 backdrop-blur-md border border-white/20"
            >
              <FaQuoteLeft className="text-blue-600 mx-auto mb-4" size={22} />
              <p className="italic text-gray-700 mb-4">"{item.review}"</p>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
