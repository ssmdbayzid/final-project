import SingleCourseCard from "@/app/all-courses/components/SingleCourseCard";
import styles from './allCourses.module.scss'

import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";
import Link from "next/link";


const getAllCourses = async (page:any, keyword:any) => {

    try {
         const queryParams = new URLSearchParams();

        if(page){
            queryParams.append("page", page);
        }
        if(keyword){
            queryParams.append("keyword", keyword);
        }
        const response = await fetch(`${process.env.API_URL_Main}/api/course?${queryParams.toString()}`);
        if(!response.ok){
            return {
                success: false,
                error: `Failed to fetch courses. Status: ${response.status}`,
            };
        }
        const result = await response.json();
        return {
            success: true,
            data: result?.data,
            page: result?.page,
            total: result?.total,
            totalPages: result?.totalPages,

        };
    }catch(error){
        return {
            success: false,
            error: `An error occurred: ${error instanceof Error ? error.message : "Unknown error"}`,
        };
    }
}

type Params = Promise<{slug: string}>
type SearchParams = Promise<{[key: string]: string | string[] | undefined}>

export async function generateMetadata(props: {params : Params, searchParams: SearchParams }){
    {
        const params = await props.params
        const searchParams = await props.searchParams

        console.log('Params:', params); // Example usage
        console.log('SearchParams:', searchParams); // Example usage
    }
}

export default async  function AllCourse(props: {
    params: Params
    searchParams: SearchParams
}) {

    const searchParams = await props.searchParams
    const page = searchParams?.page || 1;
   const courses = await getAllCourses(page, "");
    console.log(courses)
    return(<div>
        <div className="container section">
            {courses && courses?.data?.length > 0 ? (
                <div>
                    <div className={styles.contentArea}>
                        {courses?.data?.map((course: any, index: number) =>
                            <SingleCourseCard key={index} course={course}/>
                        )}
                    </div>
                    <div className={styles.pagination}>
                        <Link
                            href={`/all-courses?page=${courses?.page - 1}`}
                            className={`${page === 1 && styles.start} ${styles.paginationBtn}`}
                        >
                            <MdKeyboardDoubleArrowLeft/>
                        </Link>
                        {Array.from({length: courses.totalPages}).map((_, index: number) => (
                            <Link key={index} href={`/all-courses?page=${index + 1}`}>
                                <button
                                    className={`${courses?.page === index + 1 ? styles.activePage : ""} ${styles.paginationBtn}`}
                                >
                                    {index + 1}
                                </button>
                            </Link>
                        ))}
                        <Link
                            href={`/all-courses?page=${courses?.page + 1}`}
                            className={`${page === courses.totalPages && styles.end} ${styles.paginationBtn}`}
                        >
                            <MdKeyboardDoubleArrowRight/>
                        </Link>
                    </div>
                </div>
            ) : (courses?.data?.length < 1 && <p>Loading.... </p>)
            }
        </div>
        </div>

    )
}