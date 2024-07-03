import React from 'react'
import styles from './section.module.css'

const Section = () => {
  return (
    <div className={styles.section}>
      <img className={styles.image} src="./src/images/section.png" alt="" />
      <h1  className={styles.h1}><b><span className={styles.span}>Welcome to</span> Echooling LMS Platform</b></h1>
      <p className={styles.p}>Education is both the act of teaching knowledge to others
         <br /> <br />
         and <br /> <br />
         the act of receiving knowledge from someone else. <br />
         <br />
           Have questions? <u className={styles.u}>Get Free Guide</u></p> 
           <hr className={styles.hr} />
           <p className={styles.p2}>Education also refers to the knowledge received through schooling <br /> <br />instruction
              and to the institution of <br /><br /> teaching as a whole. The main purpose of education
                 is the integral development of a person.</p>

                 <button className={styles.btn}>Read More <img className={styles.svg} src="./src/images/arrow.svg" alt="" /></button>
           
    </div>
  )
}

export default Section
