import React from 'react'
import styles from './card.module.css'

const Card = ()=>{
    return(

<div className={styles.card}>
    
        <img src="./src/images/card1.png" alt="" />
        <h4 className={styles.lets}>Let's talk science</h4>
        <p>Learn more</p> 

        <img src="./src/images/card2.png" alt="" />
        <h4>Inovative courses</h4>
        <p>Learn more</p>

        <img src="./src/images/card3.png" alt="" />
        <h4>Cloud storage</h4>
        <p>Learn more</p>

        <img className={styles.img} src="./src/images/card55.png" alt="" />
        <h4>Online Education</h4>
        <p>Learn more</p>
    </div>

    )
}
export default Card