import React from 'react'
import styles from './carousel.module.css'

const Carousel=()=>{
    return(
        <div>
            <div className={styles.back}>
                <img className={styles.background} src="./src/images/background.jpg" alt="" />

                <div>
                    <p className={styles.great}>Great Quality Cocial Life</p>
                </div>
                <p className={styles.discover}><b>Discover the world of possible university. </b></p>

                <button className={styles.admision}>Admissions</button>
        
            </div>

        </div>
    )
}

export default Carousel