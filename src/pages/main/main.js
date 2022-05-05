import React, { Component } from 'react'
import './assets/main.css'

export class Main extends Component{
    render() {
        return (
            <section className="welcome">
                <div className="container">
                    <div className="show">
                        
                    </div>
                </div>
                <div className="discover">
                    <button type="button" id="discover">
                        <h2>Discover</h2>
                        <img src="assets/icons/Vector.svg" alt="scroll down"/>
                    </button>
                </div>
            </section>
        )
    }
}

export default Main