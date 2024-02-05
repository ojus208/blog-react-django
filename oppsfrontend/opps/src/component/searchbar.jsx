import React from 'react'
import '../assets/css/searchbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import cx from "classnames";

import { useDispatch, useSelector } from 'react-redux';
import {setfilter} from '../redux/sclices/searchfilter'

export default function Searchbar() {

    const filter = useSelector((state)=>state.filter.filter)
    const dispatch = useDispatch()
    const filterslist = ['ALL','PERSON','BLOG','Q&A']




  return (
    <div className="searchbar">
        <div className="sb-left">
            <div className="sb-input">
                <input type="text" placeholder='Search here' />
                <button>
                    <SearchOutlinedIcon />
                </button>
            </div>
        </div>
        <div className="sb-right">
        <div className="sb-filter">
            {filterslist.map(f=>
                {
                    const currentfilter = f
                    return(
                        <button onClick={()=>dispatch(setfilter(f))} className={cx("sbf-element", currentfilter === filter &&  "sbfe-active")} key={f}>
                {returnicon(f)}
                <span>{f}</span>
            </button> 
                    )
                }
            )}
                   
        </div>
        </div>
    </div>
  )
}


const returnicon=(iconname)=>{
switch (iconname) {
    case 'ALL':
        return <DensitySmallIcon/>
    case 'PERSON':
        return <PersonSearchOutlinedIcon/>
    case 'BLOG':
        return <DynamicFeedOutlinedIcon/>
    case 'Q&A':
        return <QuestionAnswerOutlinedIcon/>
}
}