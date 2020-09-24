import * as React from 'react';
import { Component } from 'react';
import './Poetry.css';
import '../App.css';


interface PoetryDB{
    author: String,
    title: String,
    lines: String[]
}


export default class Poetry extends Component<{}, PoetryDB> {

   
    async getPoem(a:String, t:String) {
      
        let response = await fetch('https://poetrydb.org/author,title/'+a+';'+t);
        
        let data = await response.json();
        this.setState({
            author: data[0].author,
            title: data[0].title,
            lines: data[0].lines 
        })  
        

    };
    highlightPoem() {
        console.log("fungerer dette?")
        let currentLine = 0;
        console.log("listelengde" + this.state.lines.length);
        const lineTimer = setInterval(() => {
            if(currentLine > this.state.lines.length) {
                clearInterval(lineTimer);
            }

            currentLine += 1;
            console.log(currentLine);
            const id = document.querySelector("#" + currentLine); 
            id.className += "word";

        }, 2000)


        /*
        this.state.lines.forEach((s, i) => {
            console.log("beginning loop")
            setTimeout(() => {
                const id = document.getElementById(String(i)); 

                id.className += "word";
            }, i * 5000)
            console.log("after loop")
            

        })*/

    }
    
    componentDidMount(){
        this.getPoem("George Eliot", "God Needs Antonio").then(() => {this.highlightPoem()});
        
    }
    render() {
        if (!this.state) {
            return <div>
                <p>Loading...</p>
            </div>
        }
        
        console.log(this.state.author)
        const items = this.state.lines.map((line, index) => {
            return <p key={index} id={String(index)}><span data-text={line}>{line}</span></p>
        })

        return (
            
            <div className="poemContainer">
                <h1>{this.state.author}</h1>
                <h2>{this.state.title}</h2>
                <div className="poemLines">
                    {items}
                    
                </div>
            </div>
            
        );
    }
}

