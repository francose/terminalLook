import React, { useEffect } from "react"
import Typewriter from 'typewriter-effect';


const Splash = (props)=>{
    useEffect(()=>{
        return props.onChange(true)
    },[])

    return <div>
             <h1 >
                 <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString('Please wait while loading...')
                    .pauseFor(4500)
                    .deleteAll()
                    .start();
                }}/>
              </h1>
             <div className={"LoaderBox"}>
                <div className={"loader"}></div>
           </div>
         </div>
}
export default Splash;