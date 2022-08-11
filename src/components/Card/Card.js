import { React } from "react";
import "./Card.css"

export const Card = (props) =>{
    let {image,title,text} = props
    return(
        <div class="content-card-item">
                   
            <img class="card-img" src={image} alt="#"/> 
            
            <div class="card-title">
                
                {title}            
            </div>
        
            <div class="card-text">
            
                {text}
            </div>

        </div>       
    )
}
