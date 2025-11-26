import Card from "@/components/Card";
import SearchButton from "@/components/SearchButton";

const courses = async () => {
  const res = await fetch("https://coursifyserverapi.vercel.app/course");
  const data = await res.json();
  console.log(data);

  return (
    <div className="my-10">
      <title>Courses</title>
      <h1 className="text text-3xl font-bold text-center mb-12">
        Available Courses- <span className="text-blue-500">{data.length}</span>
      </h1>

      <div className="flex  flex-col md:flex-row justify-between items-center mb-10 gap-3 md:gap-0">

        {/* search bar */}
      <SearchButton/>

        {/* select */}
        <select defaultValue="Pick a color" className="select appearance-none">
          <option disabled={true}>Filter</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Design</option>
          <option>Programming</option>
        </select>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((c) => (
          <Card c={c} key={c._id} />
        ))}
      </div>
    </div>
  );
};

export default courses;
