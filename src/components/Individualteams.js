import React from "react";
class Individual extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="teams-item">
                {
                    this.props.type==="batsman-captain" ?
                    (<div className="batsman">{this.props.player}</div>):
                    (<div className="rest">{this.props.player}</div>)
                    
                }
                <div>{this.props.type}</div>
            </div>
        )
    }

};
export default Individual;