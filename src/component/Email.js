import React,{useState, useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion'
import { FaThumbsUp } from "react-icons/fa";
import emailjs from 'emailjs-com';


const Email = () => {

    const [didSubmit, setDidSubmit] = useState(false)
    const [top, setTop] = useState(false)

    const submit = function(e){
        e.preventDefault();
        
        // console.log(e.target.name.value);
        emailjs.sendForm('service_yqy9xr8', 'template_howkfpj', e.target, 'user_XQBnw9jW6ezKBX8aKGrBG')
        .then((result) => {
            // console.log(result.text);
            // {   name :e.target.name.value  }
            // {   name :e.target.name.value  }
            // {   name :e.target.name.value  }
        }, (error) => {
            console.log(error.text);
        });
        setTimeout(()=>{
            window.scrollTo(0, 0);
        },2500)
       
        setDidSubmit(true)
    }
    
    const handleSendClick = ()=>{
        
       
    }

    setTimeout(()=>{
        setDidSubmit(false)
    },5000)

    
  

    

    return (
        <div className="email"> 
            <form className="email_container" onSubmit={submit} style={ didSubmit ? { visibility:'hidden'} : {visibility:"visible"}} >
                <div>
                    <label for='email'>Email</label>
                    <input type="email" id='email' className="email_input" name="email" required/>
                </div>
                <div>
                    <label for='name'>Name</label>
                    <input type="text" id='name' className="name_input" name="name" required />
                </div>

                <textarea cols="30" rows="5" name="desc"></textarea>
                <button className='email_submit' type="submit" onClick={handleSendClick} >Send to Shan</button>
            </form>
            {didSubmit && <motion.div 
                            className="email_submited"
                            initial={{
                                opacity:0,
                                x:-100
                            }}
                            animate={{
                                opacity:1,
                                x:0,
                                transition:{
                                    type:"just",
                                    duration:.3,
                                    delay:.3
                                }
                            }}
                            >
                            <FaThumbsUp className="email_submited_icon" />
                            <h1  className="email_submited_text">Shan Got your Query</h1>
            </motion.div>}     
        </div>
    );
}

export default Email;
