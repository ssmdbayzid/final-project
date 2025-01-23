export const dynamic = 'force-dynamic';
import {connectDb} from "@/lib/config";
import Course from "@/lib/model/courseModel";
import {NextResponse} from "next/server";

const connectedDB = async()  =>{
    try {
        await connectDb()
    }catch(err){console.log(err)}
}
connectedDB().catch(err=>console.log(err))



export async function GET(){
try {
    const courses = await Course.find();

    return NextResponse.json({
        success: true,
        data: courses,
        message: `Courses matching keyword:`,
    });
}catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ success: false, error: errorMessage });
}
}