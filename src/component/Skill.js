import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
// import { Frame } from "framer"
import SingleSkill from './SingleSkill'

// const data = [
//     { id : 1, name: "Python", img:"", percentage : 80 },
//     { id : 2, name: "Networking", img:"", percentage : 50 },
//     { id : 3, name: "Linux", img:"", percentage : 90 },
//     { id : 4, name: "TKinter", img:"", percentage : 75 },
//     { id : 5, name: "HTML", img:"", percentage : 75 },
//     { id : 6, name: "Wordpress", img:"", percentage : 60 },
//     { id : 7, name: "Photshop", img:"", percentage : 60 },
//     { id : 8, name: "XD", img:"", percentage : 90 },
//     { id : 9, name: "GrooveFunnel", img:"", percentage :70 }
// ]
const data = [
    { id : 1, name: 'Photshop', img:"./icons/Photoshop.png", percentage : 95 },
    { id : 2, name: 'Illustrator', img:"./icons/Illustrator.png", percentage : 90 },
    { id : 3, name: "After Effects", img:"./icons/After.png", percentage : 75 },
    { id : 4, name: "Premier pro", img:"./icons/Premire.png", percentage : 80 },
    { id : 5, name: "XD", img:"./icons/XD.png", percentage : 95 },
    { id : 6, name: "Indesign", img:"./icons/In.png", percentage : 70 },
    { id : 7, name: "lightroom", img:"./icons/Light.png", percentage : 80 },
    { id : 8, name: "Blender", img:"./icons/Blender.png", percentage : 70 },
    { id : 9, name: "Maya", img:"./icons/Maya.png", percentage : 50 },
    { id : 10, name: "3DS Max", img:"./icons/3d.png", percentage : 60 },
    { id : 11, name: "Cinema 4D", img:"./icons/Cinema.png", percentage : 40 },
    { id : 12, name: "ZBrush", img:"./icons/ZBrush.png", percentage : 40 },
    { id : 13, name: "Unity", img:"./icons/Unity.png", percentage : 40 },
    { id : 14, name: "Android Studio", img:"./icons/Android.png", percentage : 60 },
    { id : 15, name: "HTML", img:"./icons/Html.png", percentage : 90 },
    { id : 16, name: "CSS", img:"./icons/Css.png", percentage : 60 },
    { id : 17, name: "FL Studio", img:"./icons/Fl.png", percentage : 70 },
    { id : 18, name: "WordPress", img:"./icons/Wordpress.png", percentage : 70 },
    { id : 19, name: "GrooveFunnel", img:"./icons/Groove.png", percentage :70 },
    { id : 20, name: "Dart", img:"./icons/Dart.png", percentage : 30 }
]
// const data = [
//     { id : 1, name: "HTML", img:"", percentage : 80 },
//     { id : 2, name: "CSS", img:"", percentage : 90 },
//     { id : 3, name: "Sass", img:"", percentage : 80 },
//     { id : 4, name: "BootStrap", img:"", percentage : 70 },
//     { id : 5, name: "JavaScript", img:"", percentage : 75 },
//     { id : 6, name: "Jquery", img:"", percentage : 75 },
//     { id : 7, name: "React", img:"", percentage : 80 },
//     { id : 8, name: "Redux", img:"", percentage : 50 },
//     { id : 9, name: "Node Js", img:"", percentage : 65 },
//     { id : 10, name: "Express Js", img:"", percentage : 70 },
//     { id : 11, name: "Mongo DB", img:"", percentage : 70 },
//     { id : 12, name: "WordPress", img:"", percentage : 70 },
//     { id : 13, name: "GrooveFunnel", img:"", percentage :70 },
//     { id : 14, name: "Dart", img:"", percentage : 60 },
//     { id : 15, name: "PHP", img:"", percentage : 60 }
// ]

const Skill = () => {

    const num = 50
    const {ref, inView} = useInView()
    const animation = useAnimation()

    useEffect(()=>{
        if(inView){
            animation.start({
                opacity:1, y: 0,
                transition:{
                    type:"tween",
                    duration:.5
                }
            },

            )
    } 
    if(!inView){
            animation.start({
                opacity:0, y: 100
                
            })
    } 
    },[inView])


    return (<motion.div id='skills' className='skills'
        animate={animation}
        ref={ref}
        >
            <h1>Skills</h1>
            <div className="skills_content">
            <SingleSkill  show={inView} />
            </div>
           </motion.div>

            
                
    );
}

export default Skill;
