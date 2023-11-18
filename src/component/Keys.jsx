/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import Key from "./Key"
import "./Keys.css"
import { KeyboardLayout } from "../contents/KeyboardLayout"

function Keys() {

      const [text , setText] = useState("")
      const [isShift ,setIsShift] = useState(false)
      const [activeKeys , setActiveKeys] = useState({})

  const handelkeypress = (keyText )=>{
       const newactivekeys = {...setActiveKeys}
       newactivekeys[keyText] = true
       setActiveKeys(newactivekeys)
        if (keyText.toUpperCase() == "SHIFT") {
          setIsShift(!isShift)
            
          console.log(isShift);
        }else{
          if (isShift == true) {
            setText(text + keyText.toUpperCase() )
            
          }else{
            setText(text + keyText.toLowerCase() )

          }
        }
       }
      


  useEffect(()=>{
      const handelkeydown = (e)=>{
        handelkeypress(e.key)

       
      }
      document.addEventListener('keypress' , handelkeydown)  





  
  return ()=>{
    removeEventListener("keypress" , handelkeydown)

  }
  } , [text])
  return (
    <div>
      
      <div className="text-keyboard"><p id="ptext">{text}</p></div>
        
          <div className="wrapper">
       <div className="keys">
         
         
         
          {KeyboardLayout.map(function(keylineletter){
            return (
              <div className="keyboradline">{keylineletter.split("-").map(function(keyletter){
                    return <Key data={keyletter == "ENTER" || keyletter =="DELETE" || keyletter =="SHIFT" ?keyletter :isShift == true ?keyletter.toUpperCase() : keyletter.toLowerCase() } handelkeypress={handelkeypress} active={(isShift==true && keyletter =="SHIFT") ? true : activeKeys[keyletter] == true  } />
              })}</div>
            )
          })}


          

         
       </div>
    </div>
    </div>
  )
}

export default Keys