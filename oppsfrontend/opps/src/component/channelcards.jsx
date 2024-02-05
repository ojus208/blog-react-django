import React from 'react'
import '../assets/css/channelcard.css'

export default function Channelcards() {
    const channellist = [
        {
            cname:"freeCodeCamp.org",
            imgurl:"https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj",
            subs:"6.13M"
        },
        {
            cname:"Dapp University",
            imgurl:"https://yt3.ggpht.com/ytc/AMLnZu-hwnFyGerAS54ruKbpweE95tWlA9l7EntU5K3v=s176-c-k-c0x00ffffff-no-rj",
            subs:"534K" 
        }
    ]

    const blogsdata = [];
    for (let i = 0; i < channellist.length; i++) {
        
      blogsdata.push(<Channelcard img={channellist[i]['imgurl']} title={channellist[i]['cname']} key={i} subs={channellist[i]['subs']} />);
    }
    return blogsdata;
  
}

const Channelcard=(props)=>{
    return(
        <div className="channelcard">
            <div className="channelimg">
                <img src={props.img} alt="" />
            </div>
            
                <div className="channelname">
                    <span>{props.title}</span>
                </div>
                <div className="channel-subs">
                    <span className="subs">
                        {props.subs}
                    </span>
                    <button>
                        subscribe
                    </button>
                </div>
            
        </div>
    )
}
