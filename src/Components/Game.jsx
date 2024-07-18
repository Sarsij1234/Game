import React,{Component} from 'react'

class Game extends Component{
  constructor(props){
    super(props)
    this.state={
      playerVal: null,
      computerVal: null,
      playerScore: 0,
      compScore: 0,
    };

  }
  logic=(playerVal,computerVal)=>{
    if(playerVal==computerVal){
      return 0;
    }
    else if((playerVal=="ROCK"&&computerVal=="SCISSORS")||
    (playerVal=="SCISSORS"&& computerVal=="PAPER")||
    (playerVal=="PAPER"&&computerVal=="ROCK")
    ){
      return 1;
    }else{
      return -1;
    }
  }
  decision=(playerChoice)=>{
    const choices=["ROCK","PAPER","SCISSORS"];
    const compChoice=choices[Math.floor(Math.random()* choices.length)];
    const val=this.logic(playerChoice, compChoice)
    if(val==1){
      console.log("hello")
      this.setState({
        playerChoice: playerChoice,
        computerVal: compChoice,
        playerScore:this.state.playerScore +1
      })
    }else if(val==-1){
      console.log("hello")
      this.setState({
        playerVal:playerChoice,
        computerval:compChoice,
        compScore:this.state.compScore+1
      })
    }else {
      console.log("Hello")
      this.setState({
        computerVal:compChoice,
        playerVal:playerChoice
      })
    }
  }

render(){
  const {playerVal, computerVal, playerScore, compScore}=this.state;



  return (
    <div className="bg-slate-900 w-full h-auto">
      <h1 className="text-2xl text-green-500 font-bold">WELCOME TO ROCK, PAPER, SCISSORS GAME</h1>
      <div className=" text-white grid-row gap-4  my-10 ">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>this.decision("ROCK")}
        >Rock</button>
        <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mx-2"
        onClick={()=>this.decision("PAPER")}
        >Paper</button>
        <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded md:cursor-pointer"
        onClick={()=>this.decision("SCISSORS")}
        >Scissor</button>
      </div>
      <div className=" text-white py-5">
        <p>Your Choice  :{playerVal}</p>
        <p>Computer's Choice  :{computerVal}</p>
        <br/>
        <h2 className="text-green-600">Your Score:{playerScore}</h2>
        <h2 className="text-red-600">Computer Score:{compScore}</h2>


      </div>
    </div>
  )
}
}
export default Game
