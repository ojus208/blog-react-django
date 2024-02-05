import React from 'react'
import '../assets/css/pnscards.css'
import Carduserinfo from './carduserinfo';
export default function Problemcards() {
    const pnslist = [
        {
            problem:"What is the valuable information that helps people improve their lives?",
            solution:`1) The stomach gets scared when you don't eat breakfast.

            2) The kidneys are afraid when we don't drink 10 glasses of water in 24 hours.
            
            3) The gallbladder is scared when you don't sleep until 11pm and you don't wake up at sunrise.
            
            4) The small intestines get scared when eating cold and late food.`,
            byuser:{
                username:"ojus208",
                imgprofile:"https://avatars.githubusercontent.com/u/77000817?v=4",

            }
        },
        {
            problem:"How hard is it to get rich?",
            solution:"Because you’re doing it wrong! Tell me, can you take this nail out with your bare hands? Maybe, but very hard to do so! How could you take this nail out easier? WITH LEVERAGE! The ONLY way to become rich is by using some kind",
            byuser:{
                username:"Hector Quintanilla",
                imgprofile:"	https://qph.cf2.quoracdn.net/main-thumb-27072532-50-aykruqcjlisziiobyoymwiwgvgillygx.jpeg",

            }
        }
    ]


    const pnsdata = [];
    for (let i = 0; i < pnslist.length; i++) {
        
      pnsdata.push(<Pnscard img={pnslist[i]['imgurl']? pnslist[i]['imgurl']:"none" } problem={pnslist[i]['problem']} key={i} answer={pnslist[i]['solution']} username={pnslist[i]['byuser']['username']} userimg={pnslist[i]['byuser']['imgprofile']} />);
    }
    return pnsdata;
}


const Pnscard=(props)=>{
return(
    <div className="pns-card">
        <Carduserinfo username={props.username} img={props.userimg}  />
        <div className="pns-question">
            <span>{props.problem}</span>
        </div>
        <div className="pns-answer">
            <p><Truncate str={props.answer} n={130}  /> <button>read more</button> </p>
        </div>
    </div>
)
}

const Truncate = (props) => {
    return props.str?.length > props.n ? props.str.substr(0, props.n - 1) + "..." : props.str;
  };