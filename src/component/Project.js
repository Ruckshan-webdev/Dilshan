import React, {useEffect, useState} from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Images from './Images'

const projects = [
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555268/Dilshan%27s%20Project/1920_Projects_0000_DREAM_BIG_FINAL-01_hdmpz3.jpg",
        hor:true
    },
    // {
    //     image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555204/Dilshan%27s%20Project/Virtual_Staff_whqkyy.jpg",
    //     ver:true
    // },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555156/Dilshan%27s%20Project/1080_Projects_0032_MOCKUP_-_GREEN_APPLE_tx4uoc.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555155/Dilshan%27s%20Project/1080_Projects_0031_NUGGETS_MOCKUP_szez36.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555283/Dilshan%27s%20Project/1920_Projects_0006_AMBEWALA_lbf2cy.jpg",
        hor : true
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555150/Dilshan%27s%20Project/1080_Projects_0000_KOVIL_2_zvwcti.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555149/Dilshan%27s%20Project/1080_Projects_0033_HAPPY_NEW_YEAR_-_TAMIL_wxkoue.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555256/Dilshan%27s%20Project/1920_Projects_0002_KID_PLAYING_WITH_CARTOON_NEW_osb8ip.jpg",
        hor:true
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555147/Dilshan%27s%20Project/1080_Projects_0035_CCTV_SECURITY_stzmdi.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555130/Dilshan%27s%20Project/1080_Projects_0022_BUILD_YOUR_OWN_WEB_SITE_NEW_1_bivm4s.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555129/Dilshan%27s%20Project/1080_Projects_0030_POTATO_FRIES_OPT_02_at9gtc.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555129/Dilshan%27s%20Project/1080_Projects_0028_EID_MUBARAK_1_rnb7lm.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555249/Dilshan%27s%20Project/1920_Projects_0005_AMBULUWAVA_TOWER_NEW_03_wjc1t8.jpg",
        hor:true
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555129/Dilshan%27s%20Project/1080_Projects_0034_BEACH_AND_SAFARI_incsuu.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555096/Dilshan%27s%20Project/1080_Projects_0029_SPACE_DEVELOPERS_t7uf18.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555090/Dilshan%27s%20Project/1080_Projects_0027_HAPPY_EASTER_-_FOX_bzzkjo.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555090/Dilshan%27s%20Project/1080_Projects_0015_04_cocxgc.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555224/Dilshan%27s%20Project/1920_Projects_0004_MERRY_CHRISTMAS_vdeaok.jpg",
        hor:true
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555083/Dilshan%27s%20Project/1080_Projects_0026_SODA_CAN_MOCKUP_-_NEW_oahakr.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555084/Dilshan%27s%20Project/1080_Projects_0025_Empty_q1b6rv.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555269/Dilshan%27s%20Project/1920_Projects_0003_KID_WITH_BALLOON_NEW_plz2mj.jpg",
        hor:true
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555076/Dilshan%27s%20Project/1080_Projects_0024_BABA_juzwqv.jpg",
    },
    
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555076/Dilshan%27s%20Project/1080_Projects_0006_MR._BEAN_ch3cq8.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555064/Dilshan%27s%20Project/1080_Projects_0023_LEARN_PHOTOSHOP_zfkhf6.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555057/Dilshan%27s%20Project/1080_Projects_0021_YELLOW_BRIDGE_-_BACKUP_xgjyma.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555251/Dilshan%27s%20Project/1920_Projects_0001_ADIDAS_mxgcgq.jpg",
        hor:true
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555053/Dilshan%27s%20Project/1080_Projects_0019_INDIPENDANCE_DAY-01_xce4jx.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555049/Dilshan%27s%20Project/1080_Projects_0020_HAPPY_DIWALI_2020_jvjbcz.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555036/Dilshan%27s%20Project/1080_Projects_0013_GRAPHICS_-_FINAL_LATEST_crnde6.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555037/Dilshan%27s%20Project/1080_Projects_0001_THA-01_s25csa.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555036/Dilshan%27s%20Project/1080_Projects_0018_LUNCH_BOX_MOCKUP_y7x1ib.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555036/Dilshan%27s%20Project/1080_Projects_0017_FLOATING_AUTO_NEW_nj9suu.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555011/Dilshan%27s%20Project/1080_Projects_0014_404_ERROR_gtkcml.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555018/Dilshan%27s%20Project/1080_Projects_0016_03_rwjd67.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555009/Dilshan%27s%20Project/1080_Projects_0012_MUSIC_NEW_-_FINAL_vkeawu.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624555009/Dilshan%27s%20Project/1080_Projects_0007_IDHUVUM_KADANDHU_POGUM-01_v3bwxd.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624554991/Dilshan%27s%20Project/1080_Projects_0011_DP_01_zk3ose.jpg",
    },

    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624554987/Dilshan%27s%20Project/1080_Projects_0002_SUMMA_SEI_MAME-01_qmdd4t.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624554986/Dilshan%27s%20Project/1080_Projects_0000s_0000_Shape_fr8zsx.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624554982/Dilshan%27s%20Project/1080_Projects_0010_AVACADO_kevtvz.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624554976/Dilshan%27s%20Project/1080_Projects_0009_DHONI_CSK_z1br6p.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624554975/Dilshan%27s%20Project/1080_Projects_0008_EGG_coavhz.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624554959/Dilshan%27s%20Project/1080_Projects_0005_ONNUME_ILLA-01_ikhoqj.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624554959/Dilshan%27s%20Project/1080_Projects_0004_PATTU-01_emnohx.jpg",
    },
    {
        image : "https://res.cloudinary.com/thefoxdsign/image/upload/v1624554959/Dilshan%27s%20Project/1080_Projects_0003_DLSN_DARK_LOGO-01-01_FINAL-01_jg08ro.jpg",
    }
    
   
]


const Project = () => {

    const {ref, inView} = useInView()
    const animation = useAnimation()
    const [imageLoad, setImageLoad] = useState(false)

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
        <motion.div id='projects' className="projects"
        animate={animation}
        ref={ref}
        >
            <h1>Projects</h1>

            <div className='project'>
                   { Images.map((single)=>{
                        return (
                            <div className={single.hor && `project_items project_items-1 hor` || single.ver && `project_items project_items-1 ver` || `project_items project_items-1` }>
                                {/* {!imageLoad && <div className="img_loader"></div>} */}
                                <img src={single.image} alt="" />
                            </div>
                        )
                    })}

              
             
            </div>
        </motion.div>
    );
}

export default Project;
