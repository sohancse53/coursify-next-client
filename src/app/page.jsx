import Banner from "@/components/Banner/Banner";
import Features from "@/components/Features";
import Loader from "@/components/Loader/Loader";
import PopularCourses from "@/components/PopularCourses";
import PromoBanner from "@/components/Promo";
import Testimonials from "@/components/Testtimonials";




export default async function Home() {

  // console.log(session);
  
  return (
    <div className="flex flex-col  items-center justify-center ">
      <title>Home</title>
      <Banner/>
      <Features/>
     <PopularCourses/>
     <Testimonials/>
     <PromoBanner/>
     <Loader/>
    </div>
  );
}
