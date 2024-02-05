import React from 'react'
import '../assets/css/blog.css'
import {  Link,  useParams} from "react-router-dom"


export default function Blog() {
  const blogdata = {
    title:"this is my title",
    img:"https://dthezntil550i.cloudfront.net/ax/latest/ax2103220259459090019404729/ef8f4a88-6286-4a9c-8acf-9f650e21f1b2.png",
    content:`A telephone is a telecommunications device that permits two or more users to conduct a conversation when they are too far apart to be heard directly. A telephone converts sound, typically and most efficiently the human voice, into electronic signals that are transmitted via cables and other communication channels to another telephone which reproduces the sound to the receiving user. The term is derived from Greek: τῆλε (tēle, far) and φωνή (phōnē, voice), together meaning distant voice. A common short form of the term is phone, which came into use almost immediately after the first patent was issued.[1]

    In 1876, Alexander Graham Bell was the first to be granted a United States patent for a device that produced clearly intelligible replication of the human voice at a second device.[2] This instrument was further developed by many others, and became rapidly indispensable in business, government, and in households.
    
    The essential elements of a telephone are a microphone (transmitter) to speak into and an earphone (receiver) which reproduces the voice in a distant location.[3] In addition, most telephones contain a ringer to announce an incoming telephone call, and a dial or keypad to enter a telephone number when initiating a call to another telephone. The receiver and transmitter are usually built into a handset which is held up to the ear and mouth during conversation. The dial may be located either on the handset or on a base unit to which the handset is connected. The transmitter converts the sound waves to electrical signals which are sent through a telephone network to the receiving telephone, which converts the signals into audible sound in the receiver or sometimes a loudspeaker. Telephones are duplex devices, meaning they permit transmission in both directions simultaneously.
    
    The first telephones were directly connected to each other from one customer's office or residence to another customer's location. Being impractical beyond just a few customers, these systems were quickly replaced by manually operated centrally located switchboards. These exchanges were soon connected together, eventually forming an automated, worldwide public switched telephone network. For greater mobility, various radio systems were developed for transmission between mobile stations on ships and automobiles in the mid-20th century. Hand-held mobile phones were introduced for personal service starting in 1973. In later decades, their analog cellular system evolved into digital networks with greater capability and lower cost.
    
    Convergence has given most modern cell phones capabilities far beyond simple voice conversation. Most are smartphones, integrating all mobile communication and many computing needs.`,

    byuser:{
      username:"ojus208",
      imgurl:"https://avatars.githubusercontent.com/u/77000817?v=4",
      follower:23,
      social:{
        insta:"url",
        youtube:"url",
        github:"url"
      }
    },
    relatedtopics:[
      {
        tpimgurl:"url",
        tpname:""
      }
    ]
  }
  let {id} = useParams()
  return (
    <div className="blog">
      <div className="blogleft">
      <div className="bl-blog">
        {id}
      </div>
      </div>
      <div className="blogright">
        <div className="br-authorcard">

        </div>
      </div>
    </div>
  )
}
