import React from 'react';

class LiveScores extends React.Component{
    constructor(){
        super()
        this.state= {
            totalScore:0,
            Wicket:0,
            Over:0.0
        }
        this.updateScore = this.updateScore.bind(this)
        this.out = this.out.bind(this)
        this.over = this.over.bind(this)
    }
    updateScore(score){
        this.setState({
            totalScore: this.state.totalScore + score
            
        })
    }
    out(){
        this.setState({
            Wicket: this.state.Wicket + 1
                
        })
    }
    over(){
        this.setState({
            Over: this.state.Over + 1
                
        })
    }


    render(){
        return(
            <>
            <div>
                <h1>Current Score: {this.state.totalScore} / {this.state.Wicket}  in  {this.state.Over}</h1><br></br>
                <h2>RunRate: {this.state.totalScore/this.state.Over}</h2><br></br>
                <button className='score' onClick={() => this.updateScore(6)}>6</button>
                <button className='score' onClick={() => this.updateScore(5)}>5</button>
                <button className='score' onClick={() => this.updateScore(4)}>4</button>
                <button className='score' onClick={() => this.updateScore(3)}>3</button>
                <button className='score' onClick={() => this.updateScore(2)}>2</button>
                <button className='score' onClick={() => this.updateScore(1)}>1</button>
                <button className='score' onClick={() => this.updateScore(0)}>0</button><br></br>
                <button className='outwicket' onClick={(this.out)}>Out</button><br></br>
                <button className='outwicket' onClick={(this.over)}>overs</button>
            </div>
            {/* <button>6</button>
            <button>4</button>
            <button>3</button>
            <button>2</button>
            <button>1</button> */}
            </>
        )
    }
}

export default LiveScores