import React, { useEffect } from "react"
import Typewriter from 'typewriter-effect';


const Splash = (props)=>{
    useEffect(()=>{
        return props.onChange(true)
    },[])

    return <div>
             <h3>
                 <Typewriter
                    options={{
                        devMode: false,
                        autoStart: true,
                        cursor: "",
                      }}
                    onInit={(typewriter) => {
                    typewriter.typeString('Please wait while loading...')
                    .pauseFor(4500)
                    .deleteAll()
                    .start();
                }}/>
              </h3>
             <div className={"LoaderBox"}>
                <div className={"loader"}></div>
           </div>
         </div>
}
export default Splash;