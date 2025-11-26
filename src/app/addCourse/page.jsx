'use client'
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

const AddCourse = () => {
    const {user} = useUser();
    const email = user?.emailAddresses[0]?.emailAddress
    
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e);
        const newCourse = {
            title:e.target.title.value,
            image:e.target.photo.value,
            category:e.target.category.value,
            price:e.target.price.value,
            date: new Date(),
            description:e.target.description.value,
            email:email,
        }
        console.log(newCourse);
        fetch('https://coursifyserverapi.vercel.app/course',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newCourse)
        }).then(res=>res.json()).then(data=>{
          if(data.insertedId){
            toast.success('added a new  course')
          }
        })
        
    }
    return (
        <div>
          <title>Add a course</title>
           <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-blue-800 text-center">Add New Course</h2>

        {/* Title */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Course Title</label>
          <input
            type="text"
          
            name="title"
            placeholder="Enter course title"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        {/* photo */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Photo Url</label>
          <input
            type="text"
            name="photo"
      
            placeholder="Enter course title"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Category</label>
          <select
            name="category"
           
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select a category</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Full-Stack">Full-Stack</option>
            <option value="UI/UX">UI/UX</option>
            <option value="DevOps">DevOps</option>
            <option value="Mobile">Mobile</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Description</label>
          <textarea
          
           name="description"
            placeholder="Enter course description"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
            required
          ></textarea>
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Price ($)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter course price"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            min="0"
            step="0.01"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Add Course
        </button>
      </form>
        </div>
    );
};

export default AddCourse;