
const getAllCourses = async () => {
    const response = await fetch(`${process.env.API_URL_Main}/api/course`);
    const data = await response.json();
    return data ? data.data : null;
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
    const page = searchParams?.page
    console.log(page)
   const courses = await getAllCourses();
    console.log(courses);
    return(<div>
        {courses && courses.length > 0 ? (
            courses.map((course:any, index:number) => <div key={index}>{course.title}</div>)
        ) : (courses.legth < 1 && <p>Loading.... </p>)
        }
    </div>)
}