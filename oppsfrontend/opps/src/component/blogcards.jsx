import React, {useEffect} from 'react'
import Carduserinfo from './carduserinfo';
import { Link } from 'react-router-dom';
import { getblogs } from '../API/apilinks';
import { fetchblogs } from '../API/fetchdata';

export default function Blogcards(props) {
  useEffect(() => {
    
    fetchblogs(getblogs)
    
  })
  

  const blogslist = [
    {
      title:`Top game's in world so this is logn title example so are you ready for that reaseul`,
      imgurl:"https://dthezntil550i.cloudfront.net/ax/latest/ax2103220259459090019404729/ef8f4a88-6286-4a9c-8acf-9f650e21f1b2.png",
      blogsub:'Game has done good impact and setup a more than 10 trilion market within 50 years this is the one of the most exting and fastest growing bunissing in the world after blockchain',
      byuser:{
        username:"ojus208",
        imageprofile:"https://avatars.githubusercontent.com/u/77000817?v=4"
      }
},
    {
      title:`5 exercise and fitness ..`,
      imgurl:"https://pub-static.fotor.com/assets/projects/pages/36ddb653-03dc-4a77-9c26-0ac5f1c0781b/fitness-tips-7a5f6fc6-1594-4e54-9016-431687c27377.jpg",
      blogsub:'Game has done good impact and setup a more than 10 trilion market within 50 years this is the one of the most exting and fastest growing bunissing in the world after blockchain',
      byuser:{
        username:"ojus208",
        imageprofile:"https://avatars.githubusercontent.com/u/77000817?v=4"
      }
    },
    {
      title:`Top game's in world so this is logn title example so are you ready for that reaseul`,
      imgurl:"https://dthezntil550i.cloudfront.net/ax/latest/ax2103220259459090019404729/ef8f4a88-6286-4a9c-8acf-9f650e21f1b2.png",
      blogsub:'Game has done good impact and setup a more than 10 trilion market within 50 years this is the one of the most exting and fastest growing bunissing in the world after blockchain',
      byuser:{
        username:"ojus208",
        imageprofile:"https://avatars.githubusercontent.com/u/77000817?v=4"
      }
},
{
  title:`5 exercise and fitness ..`,
  imgurl:"https://pub-static.fotor.com/assets/projects/pages/36ddb653-03dc-4a77-9c26-0ac5f1c0781b/fitness-tips-7a5f6fc6-1594-4e54-9016-431687c27377.jpg",
  blogsub:'Game has done good impact and setup a more than 10 trilion market within 50 years this is the one of the most exting and fastest growing bunissing in the world after blockchain',
  byuser:{
    username:"ojus208",
    imageprofile:"https://avatars.githubusercontent.com/u/77000817?v=4"
  }
},
{
  title:`5 exercise and fitness ..`,
  imgurl:"https://pub-static.fotor.com/assets/projects/pages/36ddb653-03dc-4a77-9c26-0ac5f1c0781b/fitness-tips-7a5f6fc6-1594-4e54-9016-431687c27377.jpg",
  blogsub:'Game has done good impact and setup a more than 10 trilion market within 50 years this is the one of the most exting and fastest growing bunissing in the world after blockchain',
  byuser:{
    username:"ojus208",
    imageprofile:"https://avatars.githubusercontent.com/u/77000817?v=4"
  }
},
    
    
  ];

  const blogsdata = [];
  for (let i = 0; i < blogslist.length; i++) {
    blogsdata.push(<Blogcard img={blogslist[i]['imgurl']} title={blogslist[i]['title']} key={i} index={i} blogsub={blogslist[i]['blogsub']} username={blogslist[i]['byuser']['username']} userimg={blogslist[i]['byuser']['imageprofile']} />);
  }
  return blogsdata;





    
}


const Blogcard =(props)=>{
  return (
    <Link to={'/blog/'+props.title} >
    <div className="tb-blogcard">
      <div className="bc-img">
        <img src={props.img} alt="" />
      </div>
      <div className="bc-title">
        <span className='bct-title'><Truncate str={props.title} n={20}  /></span>
        <span className='bct-para' > <p>
          <Truncate str={props.blogsub} n={50} />
          
          </p> </span>
      </div>
      <Carduserinfo username={props.username} img={props.userimg}  />
    </div>
    </Link>
  );
}

const Truncate = (props) => {
  return props.str?.length > props.n ? props.str.substr(0, props.n - 1) + "..." : props.str;
};