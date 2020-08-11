import React, { useEffect, useState } from "react"
import Typewriter from 'typewriter-effect';

const Loader = ()=>{
  return <div className={"LoaderBox"}>
            <div className={"loader"}/>
        </div>

}

const Splash = (props)=>{
  const [flag, setFlag] = useState(true)
    useEffect(()=>{
        setInterval(()=>{
          setFlag(false)
        }, 2500)
        
        return props.onChange(true)
    },[])

    return <div style={{"display":"flex", "alignSelf":"center"}}>
             <div style={{"width":400 }}>
              <h3  >
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
                 {!flag ?<Loader/> :null}     
              </div>
              
         </div>
}
export default Splash;