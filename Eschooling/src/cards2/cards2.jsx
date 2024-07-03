import React from 'react'
import styles from './cards2.module.css'

const Cards2 = (props) => {
    console.log(props);
  return (
    <div className={styles.card}>
    <img className={styles.cardImg} src="./src/images/cards2.png" alt="" />
    <p className={styles.p1}>{props.title}</p>
    <p className={styles.lesson}>{props.lesson}</p>    
    <p className={styles.p2}>{props.description}</p>
    <p className={styles.p3}><img src="./src/images/double profile.svg" alt="" /> 56 students</p>
    <p className={styles.p4}>$72.20</p>
    
</div>


  )
}

export default Cards2
