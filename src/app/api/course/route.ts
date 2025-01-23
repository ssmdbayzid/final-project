export const dynamic = 'force-dynamic';

import {NextRequest, NextResponse} from "next/server";
import {connectDb} from "@/lib/config";
import Course from "@/lib/model/courseModel";



const connectedDB = async()  =>{
    try {
        await connectDb()
    }catch(err){console.log(err)}
}
connectedDB().catch(err=>console.log(err))


export async function GET(req: NextRequest) {
    try {
        // Ensure database connection
        await connectDb();

        const searchParams = req.nextUrl.searchParams;
        const pageNumber = parseInt(searchParams.get("page") || "1", 10);
        const keyword = searchParams.get("keyword");

        const limit = 9;
        const skip = (pageNumber - 1) * limit;

        let courses = [];
        let totalCourses = 0;

        if (keyword) {
            // Optimized query with `$regex` for keyword matching
            const matchQuery = { categories: { $regex: keyword, $options: "i" } };
            const results = await Course.aggregate([
                { $match: matchQuery },
                { $facet: {
                        data: [
                            { $skip: skip },
                            { $limit: limit },
                        ],
                        total: [{ $count: "count" }],
                    }},
            ]);

            courses = results[0]?.data || [];
            totalCourses = results[0]?.total[0]?.count || 0;
        } else {
            // Paginated query without keyword
            courses = await Course.find().skip(skip).limit(limit);
            totalCourses = await Course.countDocuments();
        }

        if (totalCourses === 0) {
            return NextResponse.json({
                message: "No courses found",
                data: [],
                total: 0,
                page: pageNumber,
                totalPages: 0,
            });
        }

        return NextResponse.json({
            message: "Courses fetched successfully",
            data: courses,
            total: totalCourses,
            page: pageNumber,
            totalPages: Math.ceil(totalCourses / limit),
        });
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return NextResponse.json({ success: false, error: errorMessage });
    }
}


export async function POST(req:NextRequest){
    const body = await req.json()
    const newCourse = await Course.create(body);
    return NextResponse.json({message:"this from course post", data:newCourse})
}

