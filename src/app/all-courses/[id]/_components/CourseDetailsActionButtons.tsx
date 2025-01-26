'use client';
import styles from '../CourseDetails.module.scss';
import Link from "next/link";

export default function CourseDetailsActionButtons({ course }: {course:any}) {{
    console.log(course);
    return (
        <div className={styles.actionbtns}>
            <button
                onClick={() => alert("Add to card")}
                className={styles.btn}
            >
                Add to cart
            </button>
            <Link href={`/bundles`} className={styles.btn2}>
                Share & Earn
            </Link>
        </div>
    )
}
}