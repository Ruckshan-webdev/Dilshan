import React from 'react'
import Typed from 'react-typed'

function Header() {
    return (
        <div className='header'>
            {/* <video src="./Low.mp4" autoPlay loop></video> */}
            <div className="header_text">
                <h1 className="header_text-main">Hello</h1>
                {/* <h1 className="header_text-sub">I'm a Developer</h1> */}
                <Typed
                    strings={["I'm Dilshan", "I'm a Designer"]}
                    typeSpeed={50}
                    backSpeed={100}
                    loop
                    className="header_text-sub">
                    </Typed>
            </div>
            <div className="header_btn">
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
            </div>
        </div>
    )
}

export default Header
