// app/details/[id]/page.jsx

import BackButton from "@/components/BackButton";


const details = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://coursifyserverapi.vercel.app/course/${id}`);
  const data = await res.json();
  console.log(data);

  return (
    <>
    <title>{data?.title} Details</title>
     <BackButton/>
    <div className="bg-gray-50 my-10">
      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0  flex flex-col justify-end p-6 md:p-10">
          <h1 className="text-3xl  font-extrabold text-red-600">
            {data.title}
          </h1>
          {data.category && (
            <span className="mt-3  badge badge-lg badge-info font-bold">
              {data.category}
            </span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {/* Left Section: Course Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl shadow-inner">
            <h2 className="text-2xl font-semibold text-indigo-700">
              Course Overview
            </h2>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed mt-3">
              {data.description}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl text-indigo-800 font-medium text-sm md:text-base shadow">
                <span className="font-semibold">Instructor Email:</span>{" "}
                {data.email}
              </div>
              <div className="bg-purple-100 p-3 rounded-xl text-purple-800 font-medium text-sm md:text-base shadow">
                <span className="font-semibold">Published Date:</span>{" "}
                {data.date}
              </div>
            </div>

            {data.learningOutcomes && data.learningOutcomes.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                  What You’ll Learn
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {data.learningOutcomes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Price & Enroll */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col items-center space-y-6">
          <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            ${data.price}
          </span>
          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 md:py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            Enroll Now
          </button>
          <p className="text-gray-400 text-sm text-center md:text-base">
            Limited seats available! Secure your spot today.
          </p>
        </div>
      </div>
     
    </div>
    </>
  );
};

export default details;
