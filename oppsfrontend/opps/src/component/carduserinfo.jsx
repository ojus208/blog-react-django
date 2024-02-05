import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../assets/css/carduserinfo.css'

export default function Carduserinfo(props) {
  return (
    <div className="carduserinfo">
        <div className="uci-userdetail">
            <div className="uci-userimg">
                <img src={props.img} alt="" />
            </div>
            <div className="uci-username">
                <span>{props.username}</span>
            </div>
        </div>
        <div className="uci-useractions">
            <MoreVertIcon />
        </div>
    </div>
  )
}
