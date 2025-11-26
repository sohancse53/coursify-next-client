import DeleteButton from "@/components/DeleteButton";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

const manageCourse = async () => {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  console.log(email);

  const res = await fetch(`https://coursifyserverapi.vercel.app/course?email=${email}`);
  const data = await res.json();
  return (
    <div>
      <title>Manage Courses</title>
      <h1 className="text-3xl font-bold text-center mt-5">
        My Courses - <span className="text-blue-400">{data.length}</span>
      </h1>

      {/* table  */}

      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Instructor Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {data.map((c, index) => (
              <tr key={c?._id}>
                <th>{index + 1}</th>
                <td>{c?.title}</td>
                <td>{c?.category}</td>
                <td>${c?.price}</td>
                <td>{c?.email}</td>
                <td className="flex gap-2 ">
                  <Link href={`details/${c?._id}`} data-tip="view more" className="tooltip btn btn-primary rounded-full text-white">View </Link>
                    <DeleteButton c={c}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default manageCourse;
