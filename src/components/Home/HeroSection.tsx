'use client'
import styles from './HeroSection.module.scss';
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/store/storeHooks";
import {decrement, increment} from "@/store/cartSlice";


export default function HeroSection() {
    const count = useAppSelector(state=> state.cart.value)
    console.log(count)
    const dispatch = useAppDispatch();
    return (
        <div className="container">
            {/*----------- Category Menu -----------*/}
            <p>Testing</p>
            <div className={styles.banner}>
                <div className={styles.sectionArea}>
                    <div className={styles.heroContent}>
                        <h1>What do you want to learn?</h1>
                        <p>Over 200+ affordable courses to empower your future !! {count}</p>
                        <div className={styles.btnContainer}>
                            <Link href="/apply" className={`btn ${styles.btn1}`}> Subscription</Link>
                            <Link href="/about" className={`btn ${styles.btn2}`}> Refer And Earn</Link>
                        </div>
                        <button onClick={()=>dispatch(decrement())}>Decrement</button>
                        {count}
                        <button onClick={()=>dispatch(increment())}>Increment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
