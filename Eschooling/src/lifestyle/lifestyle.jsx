import React from 'react'
import styles from './lifestyle.module.css'

const Lifestyle = () => {
  return (
    <div className={styles.lifestyle}>
        <div className={styles.campus}>
        <h1 ><b>Campus Life</b></h1>
        <img  src="./src/images/acadmics.png" alt="" />
        </div>

        <div className={styles.one}>
            <img className={styles.pencil} src="./src/images/pencil.svg" alt="" />
            <h3 className={styles.do}>The Bussiness Intelligence</h3>
            <p className={styles.why}>Why I say old chap that is spiffing he legged
            it in my flat easy peasy.</p>
            <img className={styles.arrows} src="./src/images/arrow.svg" alt="" />

            <img className={styles.pencil} src="./src/images/arr.svg" alt="" />
            <h3 className={styles.do}>Do More, Stress Less</h3>
            <p className={styles.why}>Why I say old chap that is spiffing he legged
            it in my flat easy peasy.</p>
            <img className={styles.arrows} src="./src/images/arrow.svg" alt="" />


            <img className={styles.pencil} src="./src/images/setting.svg" alt="" />
            <h3 className={styles.do}>System Administration</h3>
            <p className={styles.why}>Why I say old chap that is spiffing he legged
            it in my flat easy peasy.</p>
            <img className={styles.arrows} src="./src/images/arrow.svg" alt="" />

        </div>

        <img className={styles.two} src="./src/images/card55.png" alt="" />      
    </div>
  )
}

export default Lifestyle
