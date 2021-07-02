import React from 'react'
import Header from './component/Header'
import Person from './component/Person'
import Skill from './component/Skill'
import Project from './component/Project'
import Email from './component/Email'
import Footer from './component/Footer'
import Pop from './component/Pop'

import './style.css'

function App() {
  return (
    <>
    <Header></Header>
    <Person></Person>
    <img src="./Header-01.png" alt="" className="divider"/>
    <Skill></Skill>
    <Project></Project>
    <Email></Email>
    <Footer></Footer>
    </>
  );
}

export default App;
