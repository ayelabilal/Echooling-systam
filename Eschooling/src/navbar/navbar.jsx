import React from 'react'
import styles from './nav.module.css'


const Navbar = () => {
  return (
   <div>
     <div className={styles.Eschooling}>
      <img src="./src/images/eschooling.png" alt="" />  

      <div className={styles.option}>
      <label className={styles.home}  for="exampleDropdown"></label>
    <select className={styles.home} id="exampleDropdown" name="options">
        <option value="option1">Home</option>
        <option value="option2">Home two</option>
        <option value="option3">Home three</option>
    </select>
    <label className={styles.home} for="exampleDropdown"></label>
    <select className={styles.home} id="exampleDropdown" name="options">

        <option value="option1">Pages</option>
        <option value="option2">Instructor</option>
        <option value="option3">Signup</option>
    </select>
    <label className={styles.home} for="exampleDropdown"></label>
    <select className={styles.home} id="exampleDropdown" name="options">
        <option value="option1">Courses</option>
        <option value="option2">Courses single</option>
        <option value="option3">right side bar</option>
    </select>
    <label className={styles.home} for="exampleDropdown"></label>
    <select className={styles.home} id="exampleDropdown" name="options">
        <option value="option1">blog</option>
        <option value="option2">blog single</option>
    </select>
    <p className={styles.contact}>Contact</p>

    <input  className={styles.input} type="text" placeholder='Search Course' /><img className={styles.search} src="./src/images/search.svg" alt="" />

      </div>
    </div>

    

    
    

   
  

   </div>
  )
}

export default Navbar
