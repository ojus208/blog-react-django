import React from 'react'
import Contentwrap from "../component/Contentwrap";
import ContentScroll from "../component/ContentScroll";

export default function Homecontent() {
  return (<>
    <ContentScroll title="Today's top blog's" content="blog" />
      <Contentwrap title="Top channel's" content="channel"  /> 
      <ContentScroll title="Top Problem's and solution's" content="pns" />
      </>
  )
}
