import HeroSection from "@/components/Home/HeroSection";
import MostPopularBundle from "@/components/Home/MostPopulerBundle";
import PopularCourse from "@/components/Home/PopulerCourse";
import AllCategory from "@/components/Home/AllCategory";


export default function Home() {
  return (
    <div>
     <HeroSection />
        <MostPopularBundle />
        <PopularCourse />
        <AllCategory />
    </div>
  );
}
