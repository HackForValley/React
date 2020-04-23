import React from "react";
class Person extends React.Component{
    render()
    {
        return(
           <div>
               <h1>{this.props.name}</h1>
               <p>my age is:{this.props.age}</p>
           </div> 
        )
    }
}
export default Person;
