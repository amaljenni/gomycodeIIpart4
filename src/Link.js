import React from "react"
import Mybutton from "./Mybutton"
export default function Link(){
    return(<div>
<Mybutton
 onSimpleClick={()=>{window.location="https://www.facebook.com"}
        }
        label="Facebook"/>
        
       <Mybutton 
        onSimpleClick={()=>{window.location="https://www.yahoo.com"}
    }
       label="Yahoo"/>
            
    </div>
        

    )

}