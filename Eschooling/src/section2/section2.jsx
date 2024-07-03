import React from 'react'
import styles from './section2.module.css'


const Section2 = (props) => {
  return (
    <div>
       <div className={styles.section2}>
    <p className={styles.p5}>{props.title}</p>
    {/* <p className={styles.lesson}>{props.lesson}</p>     */}
    <p className={styles.p7}>{props.description}</p>
    {/* <p className={styles.p8}><img src="./src/images/double profile.svg" alt="" /> 56 students</p> */}
    {/* <p className={styles.p8}>$72.20</p> */}
    
</div>

    </div>
  )
}

export default Section2
