import * as React from 'react';
import { Component } from 'react';


interface PoetryDB{
    author: String,
    title: String,
    lines: String[]
}



export default class Poetry extends Component<{}, PoetryDB> {
    async getPoem(a:String, t:String) {
        let response = await fetch('https://poetrydb.org/author,title/'+a+';'+t);
        let data = await response.json();
        console.log(data);
        this.setState({
            author: data[0].author,
            title: data[0].title,
            lines: data[0].lines
        });    
         console.log('FAEN', data);
        // console.log(this.state);
    };

    componentDidMount(){
        console.log("1");
        this.getPoem("George Eliot", "God Needs Antonio");
        console.log(this.state);
    }
    

   
    render() {
        console.log(this.state);
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>{this.state.author}</h2>
                <p>{this.state.lines}</p>
            </div>
        // <p> {this.state}</p>
        );
    }
}