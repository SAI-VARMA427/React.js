import './style.css'

function Teams(props) {
    console.log("hi")


    return(
        <div>
            <div className='teams-item'>
                <div>{props.teamName}</div>
                <div>{props.batsman}</div>
                <div>{props.bowler}</div>
                <div>{props.allrounder}</div>
            </div>
        </div>
    //     <div className="teams-item">
    //   <table id="teams">
    //     <tr>
    //       <th>Teams</th>
    //       <th>Bats Man</th>
    //       <th>Bowler</th>
    //       <th>All-Rounder</th>
    //     </tr>
    //     <tr>
    //       <td>CSK</td>
    //       <td>7</td>
    //       <td>4</td>
    //       <td>3</td>
    //     </tr>
    //     <tr>
    //       <td>SRH</td>
    //       <td>5</td>
    //       <td>3</td>
    //       <td>3</td>
    //     </tr>
    //     <tr>
    //       <td>RCB</td>
    //       <td>4</td>
    //       <td>5</td>
    //       <td>2</td>
    //     </tr>
    //     <tr>
    //       <td>MI</td>
    //       <td>6</td>
    //       <td>2</td>
    //       <td>3</td>
    //     </tr>
    //   </table>
    // </div>
    );
    
}

export default Teams;