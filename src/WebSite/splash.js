import React, { useEffect, useState } from "react"
import Typewriter from 'typewriter-effect';

const end_point = "http://localhost:5000/api/client"

const Loader = ()=>{
  return <div className={"LoaderBox"}>
            <div className={"loader"}/>
        </div>
}


const Splash = (props)=>{
  const [responseValue, setResponse] = useState({})
  const [flag, setFlag] = useState(true)
  const checkState =  async(state)=>{
    if (!state) return await fetch(end_point, 
      {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({connection:true}),
      })
      .then(response => response.json())
      .then(data => {
        setResponse(data)
      })
    .catch((error) => {
      console.error('Error:', error);
    })
    
  }
    useEffect(()=>{
       setInterval(()=>{
          setFlag(false)
        }, 1500)
        checkState(flag)
        return  props.onChange(true)
    },[flag])

    return <div style={{"display":"flex", "alignSelf":"center"}}>
             <div style={{"width":400, "textAlign":"center" }}>
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


