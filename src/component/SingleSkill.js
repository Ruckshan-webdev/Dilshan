import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

var data = [
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


function SingleSkill({show}) {

    const {ref, inView, entry} = useInView()
    const animation = useAnimation()


    useEffect(()=>{
        if(show){
            animation.start({
                
                transition:{
                    type:"tween",
                    duration:.6
                },
                opacity:1, 
                x:0
            },
            )
    } 
    if(!show){
        
            animation.start({
                opacity:0,
                x:-500
                
            })
    } 
    },[show])

    return (
    <>
        {
            data.map((skill)=>{
                const {id, name, img, percentage} = skill

                return (<motion.div className="skill" key={id}>
                        <div className="skill_image">
                            <img src={img} alt="" />
                        </div>
                        <motion.div className="skill_detail" >
                            <h1>{name}</h1>
                            <div className="bar" >
                                <motion.div  
                                ref={ref}
                                            className='inside_bar' style={{width: `${percentage}%`}}
                                            animate={animation}
                                ></motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )
            })
        }
        </>
    )
}

export default SingleSkill
