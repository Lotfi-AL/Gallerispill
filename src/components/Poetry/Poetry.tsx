import * as React from "react";
import { Component } from "react";
import "./Poetry.css";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useStatus } from "../Store/StatusProvider";

interface PoetryDB {
    author: String;
    title: String;
    lines: String[];
}
interface PoemMetaData {
    author: String;
    title: String;
}

const Poetry = () => {
    const linesRef = React.useRef(null);

    const [author, setAuthor] = useState(null);
    const [title, setTitle] = useState(null);
    const [lines, setLines] = useState(null);
    const [loading, setLoading] = useState(true);
    const { currScene } = useStatus();
    //let lineTimer : NodeJS.Timeout;
    const poemMetaList: PoemMetaData[] = [
        { author: "George Eliot", title: "God Needs Antonio" },
        { author: "Adam Lindsay Gordon", title: "A Song of Autumn" },
        { author: "Ben Jonson", title: "A Hymn to God the Father" },
        { author: "Thomas Campbell", title: "The River of Life" },
        { author: "William Shakespeare", title: "Spring" },
    ];

    const getPoem = async (a: String, t: String) => {
        console.log("getpoem");
        let response = await fetch("https://poetrydb.org/author,title/" + a + ";" + t);
        let data = await response.json();
        console.log("getpoemfinished");
        setAuthor(data[0].author);
        setTitle(data[0].title);
        setLines(data[0].lines);
    };

    const highlightPoem = () => {
        let currentLine = 0;

        if (!loading) {
            const lineTimer = setInterval(() => {
                if (currentLine > linesRef.current.children.length) {
                    clearInterval(lineTimer);
                }
                let p = linesRef.current.children[currentLine];
                let s = p.children[0];

                p.className += "word";
                s.className += "word";
                // console.log(p);

                // if(currentLine >0){
                //     let p1 = linesRef.current.children[currentLine-1]
                //     let s1 = p1.children[0]

                //     p1.className = "";
                //     s1.className = "";
                // }
                currentLine += 1;
            }, 3000);
        }
    };

    useEffect(() => {
        setLoading(true);
        getPoem(poemMetaList[currScene].author, poemMetaList[currScene].title).then(() => {
            setLoading(false);
            highlightPoem();
        });
    }, [currScene]);

    return (
        <div className="poemWrapper">
            <div className="poemContainer">
                {loading === false ? (
                    <>
                        <h1>{author}</h1>
                        <h2>{title}</h2>
                        <div ref={linesRef} className="poemLines">
                            {lines.map((line: string, index: number) => {
                                return (
                                    <p key={index} id={String(index)}>
                                        <span data-text={line}>{line}</span>
                                    </p>
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </div>
    );
};

export default Poetry;
