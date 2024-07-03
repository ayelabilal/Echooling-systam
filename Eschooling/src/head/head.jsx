import React from 'react'
import styles from './head.module.css'

const Heading = () => {
  return (
    <>
      
        <div className={styles.header}>
        <img className={styles.ph} src="./src/images/contact.svg" alt="" /> (+1)3344 999 999    
        
        <img className={styles.img} src="./src/images/email.svg" alt="" /> info@reactheme.com
        </div>
      
    </>

  
  )
}

export default Heading
