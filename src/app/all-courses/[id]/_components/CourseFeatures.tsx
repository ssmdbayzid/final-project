'use client';
import {useState} from "react";
import styles from './CourseFeatures.module.scss'
import {IoIosPlayCircle, IoMdLock} from "react-icons/io";


export default function CourseFeatures({lessons}: any) {
    const [open, setOpen] = useState(false);
return (
    <div className={`section ${styles.featuresArea}`}>
        <h1 className="common-heading">Lessons in this course:</h1>
        {lessons &&
            lessons?.map((lesson:any, index:number) => (
                <div key={index}
                     className={styles.lessions}
                     aria-disabled={lesson.status === "unview"}
                     onClick={() => setOpen(lesson.status == "view" ? !open : false)}>
                    {lesson.status === "view" ? <IoIosPlayCircle className={styles.viewIcon}/> :
                        <IoMdLock className={styles.icon}/>}
                    <div className={styles.content}>
                        <h4>{lesson.title}</h4>
                        <p>{lesson.duration}</p>
                    </div>
                </div>
            ))
        }
        {open && <div className={styles.modal}>
            <div>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/irC7_w7chbI"
                        title="৯ জানুয়ারী কোন ধানাইপানাই করলে কঠোর পদক্ষেপ নিতে বাধ্য হবো #eliashossain #bdr #বিডিআর #free_bdr"
                        frameBorder="3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>}
    </div>
)
}