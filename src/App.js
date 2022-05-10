import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Teams from './components/Teams';
import Footer from'./components/Footer';
import Individualteams from './components/Individualteams';
import LiveScores from './components/LiveScores';
import FunState from './components/FunState';
function App() {
  const data = [
    {
      teamName: "teamname",
      batsman: "batsman",
      bowler: "bowler",
      allrounder: "allrounder",
    },
    {
      teamName: "RCB",
      batsman: "7",
      bowler: "6",
      allrounder: "4",
    },
    {
      teamName: "KKR",
      batsman: "7",
      bowler: "6",
      allrounder: "4",
    },
    {
      teamName: "CSK",
      batsman: "7",
      bowler: "6",
      allrounder: "4",
    },
    {
      teamName: "MI",
      batsman: "7",
      bowler: "6",
      allrounder: "4",
    },
  ]

  const rcbdata=[{
    player:"DINESH KARTHIK",
    type:"Wicket Keeper Batsman"
  },
  {
    player:"FAF DU PLESSIS",
    type:"batsman-captain"
  },
  {
    player:"VIRAT KOHLI",
    type:"Batsman"
  },
  {
    player:"Anuj RAWAT",
    type:"batsman"
  },
  {
    player:"MAXWELL",
    type:"All Rounder"
  },
  {
    player:"Mahipal Lomror",
    type:"Batsman"
  },
  {
    player:"SHABAZ AHMED",
    type:"All Rounder"
  },
  {
    player:"SIRAJ",
    type:"Bowler"
  },
  {
    player:"HARSHAL PATEL",
    type:"Bowler"
  },
  {
    player:"HASARANGA",
    type:"Bowler"
  },
  {
    player:"HAZELWOOD",
    type:"Bowler"
  },
  
]

  return (
    <div className='App'>
      <Header></Header>
      <Teams teamName={data[0].teamName} batsman={data[0].batsman} bowler={data[0].bowler} allrounder={data[0].allrounder}></Teams>
      <Teams teamName={data[1].teamName} batsman={data[1].batsman} bowler={data[1].bowler} allrounder={data[1].allrounder}></Teams>
      <Teams teamName={data[2].teamName} batsman={data[2].batsman} bowler={data[2].bowler} allrounder={data[2].allrounder}></Teams>
      <Teams teamName={data[3].teamName} batsman={data[3].batsman} bowler={data[3].bowler} allrounder={data[3].allrounder}></Teams>
      <Teams teamName={data[4].teamName} batsman={data[4].batsman} bowler={data[4].bowler} allrounder={data[4].allrounder}></Teams>
      <br></br>
      RCB TEAM
      <br></br>
      {rcbdata.map((item) => <Individualteams player={item.player} type={item.type}></Individualteams>)}
      <br></br>
      Current LiveScores
      <br></br>


      <LiveScores></LiveScores>
      <br></br>
      <FunState></FunState>


      {/* <Individualteams player={rcbdata[0].player} type={rcbdata[0].type}></Individualteams>
      <Individualteams player={rcbdata[1].player} type={rcbdata[1].type}></Individualteams>
      <Individualteams player={rcbdata[2].player} type={rcbdata[2].type}></Individualteams>
      <Individualteams player={rcbdata[3].player} type={rcbdata[3].type}></Individualteams>
      <Individualteams player={rcbdata[4].player} type={rcbdata[4].type}></Individualteams>
      <Individualteams player={rcbdata[5].player} type={rcbdata[5].type}></Individualteams>
      <Individualteams player={rcbdata[6].player} type={rcbdata[6].type}></Individualteams>
      <Individualteams player={rcbdata[7].player} type={rcbdata[7].type}></Individualteams>
      <Individualteams player={rcbdata[8].player} type={rcbdata[8].type}></Individualteams>
      <Individualteams player={rcbdata[9].player} type={rcbdata[9].type}></Individualteams>
      <Individualteams player={rcbdata[10].player} type={rcbdata[10].type}></Individualteams> */}
      <Footer></Footer>
    </div>
  );
}
//function Teams(batsman,bouler,allrounder)
export default App;
