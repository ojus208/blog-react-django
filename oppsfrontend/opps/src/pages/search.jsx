import React from 'react'
import '../assets/css/explore.css'
import Searchbar from '../component/searchbar'
import ContentScroll from '../component/ContentScroll'

export default function Search() {
  return (
    <div className="explore">
      <Searchbar />
      <ContentScroll title="Person id's" content='channel'/>
      <ContentScroll title="Blog's" content='blog'/>
      <ContentScroll title="Question and answer" content='pns'/>
    </div>
  )
}
