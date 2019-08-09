import React from "react"
export default class Lifecycle extends React.Component{
    
    
    
            componentDidMount() {
                 setTimeout(() => {
                    alert('Hello');
                    
                  }, 2000)
                }
            
            componentWillMount(){
                 alert('Goodbye');
            }
            render() {
                return(
                  <div>
                  <h1>amal</h1>
                </div>
                )
              }
    }
