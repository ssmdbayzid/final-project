
import styles from "./MostPopularBundle.module.scss"
import Link from "next/link";
import Popular_Course_Carousel from "@/components/Home/Popular_Course_Carousel";

const getAllCourses = async () => {
   try {
       const response = await fetch(`${process.env.API_URL_Main}/api/course`);
       const data = await response.json();
       return data ? data.data : null;
   }catch (e) {
       console.log(e);
       return null;
   }

}



export default async function MostPopularBundle() {
    const courses = await getAllCourses()

    console.log(courses)
    return (
        <div className="">
            <div className="container ">
                <div className={` ${styles.titleContainer}`}>
                    <h1 className="section-title">Most Popular Courses</h1>
                    <Link href="/" className="btn">All</Link>
                </div>
                <div>
                    {courses && courses.length > 0 ? (<Popular_Course_Carousel courses={courses} />)
                    :( <p>No Data</p>)
                    }
                </div>
            </div>
        </div>
    );
}