import React from 'react'
import Blogcards from './blogcards';
import Channelcards from './channelcards';
import Problemcards from './problemcards';


export default function ContentScroll (props) {
 
    return (
      <div className="topblogs">
        <div className="tb-title">
          <h3>{props.title}</h3>
          <button className="seemore">see more</button>
        </div>
        <div className="tb-blogs">{
          returncontent(props.content)
        }</div>

      </div>
    );
  };
  
  
  const returncontent =(content)=>{

  if (content === "blog"){
    return(
      <Blogcards />
    )
  }
  else if (content === "channel"){
    return(
    <Channelcards />
    )
  }
  else if(content === 'pns')
  return(
    <Problemcards />
  )
  }



