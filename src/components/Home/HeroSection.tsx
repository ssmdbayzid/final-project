'use client'
import styles from './HeroSection.module.scss';
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/store/storeHooks";
import {decrement, increment} from "@/store/cartSlice";
import {useEffect, useState} from "react";


export default function HeroSection() {
   const [isMounted, setIsMounted] = useState(false);

    const count = useAppSelector(state=> state.cart.value)
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if(!isMounted){
        return null;
    }
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
                        {count ? count : "0"}
                        <button onClick={()=>dispatch(increment())}>Increment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
