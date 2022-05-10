import React from 'react'

class Footer extends React.Component{
    constructor(){
        super()
        this.name = {
            companyName: "BCCI",
            sponsor:"TATA"
        }

    }

    render(){
        return(
            <div>
                <div style={{color:'black', padding:'3px',}}>Copyright 2022 - {this.name.companyName} | Title sponsor- {this.name.sponsor}</div>
            </div>
        )
    }
}

export default Footer;