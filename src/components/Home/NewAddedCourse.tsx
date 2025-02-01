import styles from './NewAddedCourse.module.scss'

import loading from '@/assets/image/loader-ghoori.svg'
import NewlyAddedCourseComponent from "@/components/Courses/NewlyAddedCourseComponent";
import Link from "next/link";


const getAllCourses = async ()=> {
    try {
        const data = await fetch(`${process.env.API_URL_Main}/api/course`);
        const result = await data.json();
        return result ? result : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export default async function NewAddedCourse (){
    const courses = await getAllCourses();
    console.log(courses)
    return <div className={styles.newCourseArea}>
        <div className="container section">
            <div className={styles.courseContent}>
                <div className={styles.courseHeading}>
                    <div>
                        <h1>Newly added courses</h1>
                        <p>Over 200 affordable courses to empower your future.</p>
                    </div>
                    <Link href="/" className={`btn ${styles.btn}`}>
                        View All
                    </Link>
                </div>
                {courses.data.length < 1 ? loading:
                    <NewlyAddedCourseComponent courses={courses.data}/>
                }
            </div>
        </div>
    </div>
}