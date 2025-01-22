
import styles from "./MostPopularBundle.module.scss"
import Link from "next/link";

const getAllCourses = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/course`);
    const courses = await data.json();
    return courses ? courses.data : null;
}

export default async function MostPopularBundle() {
    const courses = await getAllCourses()

    console.log(courses)
    return (
        <div className="">
            <div className="container ">
                <div className={` ${styles.titleContainer}`}>
                    <h1 className="section-title">Most Popular Courses</h1>
                    <Link href="/bundles" className="btn">All</Link>
                </div>
                <div>
                    {/*{courses && <Popular_Course_Carousel courses={courses} />}*/}
                    {courses && <p>{courses.length}</p>}
                </div>
            </div>
        </div>
    );
}