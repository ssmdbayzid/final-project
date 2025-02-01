import HeroSection from "@/components/Home/HeroSection";
import MostPopularBundle from "@/components/Home/MostPopulerBundle";
import PopularCourse from "@/components/Home/PopulerCourse";
import AllCategory from "@/components/Home/AllCategory";
import BlogTab from "@/components/Home/BlogTab";
import NewAddedCourse from "@/components/Home/NewAddedCourse";
import CompletedAnHour from "@/components/Home/CompleteUnderAnHour";
import QuizBanner from "@/components/Home/QuizBanner";
import CustomerFeedback from "@/components/Home/CustomerFeedBack";


export default function Home() {
  return (
    <div>
     <HeroSection />
        <MostPopularBundle />
        <PopularCourse />
        <AllCategory />
        <BlogTab />
        <NewAddedCourse />
        <CompletedAnHour />
        <QuizBanner />
        <CustomerFeedback />
    </div>
  );
}
