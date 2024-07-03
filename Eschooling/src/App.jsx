import { useState } from 'react'
import head from "./head/head"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './head/head'
import Navbar from './navbar/navbar'
import Carousel from './carousel/carousel'
import Card1 from './cards1/cards1'
import Card from './card/card'
import Section from './section1/section'
import Lifestyle from './lifestyle/lifestyle'
import Cards2 from './cards2/cards2'
import Section2 from './section2/section2'
import Course from './courses/courses'









const App = ()=>{
  return(

    <div>
<Heading/>
<Navbar/>
<Carousel/>
<Card1/>
<Card/>
<Section/>
<Lifestyle/>
<Course/>
<Section2/>

    <Cards2 title=".UX design" lesson="lesson 4" description="Dave conservatoire is the Entirely free online"/>
    <Cards2 title=".UX design" lesson="lesson 5" description="Strategy law and Organization foundation"/>
    <Cards2 title=".UX 'design" lesson="lesson 5"description="Python for Data Science & Machine Learning"/>
    <Cards2 title=".UX 'design" lesson="lesson 5"description="The complete web develop Ment bootcamp."/>

    {/* <Cards2 title="" lesson="" description=""/> */}


    </div>
  
  )
}

export default App
