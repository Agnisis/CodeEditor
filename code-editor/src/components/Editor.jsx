import React, { useEffect } from 'react'
import Codemirror from 'codemirror'
import "codemirror/theme/dracula.css";
import 'codemirror/mode/javascript/javascript'
import "codemirror/mode/javascript/javascript";



const Editor = () => {

     useEffect(()=>{
        async function init(){
         Codemirror.fromTextArea(document.getElementById('realTimeEditor'),{
            mode:{name:'javascript',json:true},
            theme:'dracula',
            autoClosetags:true,
         })
        }
        init()
     },[])


  return (
    <textarea id="realTimeEditor">

    </textarea>
  )
}

export default Editor
