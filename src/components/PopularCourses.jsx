"use client";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Full Stack Web Development",
    price: "$59",
    image: "/slide1.jpg",
  },
  {
    title: "UI/UX Design Masterclass",
    price: "$39",
    image: "/slide2.jpg",
  },
  {
    title: "React & Next.js Bootcamp",
    price: "$49",
    image: "/slide3.jpg",
  },
];

const PopularCourses = () => {
  return (
    <section className="py-20 bg-white w-full rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Courses</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-lg bg-white overflow-hidden hover:-translate-y-2 transition transform"
            >
              <div className="relative h-52">
                <Image src={course.image} alt={course.title} fill className="object-cover" />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-blue-600 font-semibold">{course.price}</p>
                <Link href="/courses" className="btn btn-primary mt-3 w-full">
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
