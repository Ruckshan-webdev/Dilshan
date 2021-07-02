import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

function Person() {
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
       
   

  
    return (
        <div className="person_background">
        <motion.div className="person_container"
           
            animate={animation}
            ref={ref}
        >
            <div className="person_container_img">
                 <img src="./02.jpg" alt="" className="person_img"/>
            </div>


            <div className="person_container_details" >

                    <h1>Dilshan <span>Sridaran</span></h1>
                    <p>I'm a Creative Designer with over 7 years of experinece specializing in Digital Design and Multi media markering.
                    Professionally trained and compentent in wide range of Design software and equipment such as Adobe Creative
                    cloud, CorelDraw, Autodesk Maya, Autodesk 3Ds max, Blender, Cinema 4D, Substance Painter, Fl studio, Ableton,
                    Android Studio, Unity, Toon Boom and VFX stuffs. A strong track record of creating impactful visual 
                    communications that build brand identity and engange clients.   
                    </p>
            
            </div>


            
     
        </motion.div>
        </div>
    )
}

export default Person
