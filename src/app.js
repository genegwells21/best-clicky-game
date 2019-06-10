import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matchcards.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickMessages = "You earn points by clicking on an image but dont click one one twice!";

class App extends Component     {

    state= {
        matches,
        correctGuesses,
        bestScore,
        clickMessage
    };

    setClicked = id =>  {

        const matches = this.state.matches;


        const clickedMatch = matches.filter(match => match.id === id);

        if (clickedMatch[0].clicked)    {

            console.log ("Guesses that remain correct: " + correctGuesses);
            console.log("Greatest Score: " + bestScore)

            correctGuesses = 0;
            clickMessages = "Please try not to click the same one as it onyl results in trying again."

            for (let i = 0; i < match.length; i++)  {
                matches[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ correctGuesses });
            this.setState ({matches});

        } else if (correctGuesses < 11) {

            clickMatch[0].clicked = true;

            clickMessage = "Wonderful job, proceed!";
            
            if (correctGuesses > bestScore) {
                bestScore = correctGuesses;
                this.setState ({ bestScore});
            }

            matches.sort (function(a, b){return 0.5 - Math.random()});

            this.setState({ matches});
            this.setState({correctGuesses});
            this.setState({clickMessage});
        } else{

            clickedMatch[0].clicked = true;

            correctGuesses= 0;

            clickMessage = "You have complete this, congratulations!";
            bestScore = 12;
            this.setState({ bestScore});
            
            for (let i = 0; i < matches.length ; i++)   {
                matches[i].clicked = false;
            }

            matches.sort(function (a,b){return 0.5 - Math.random()});

            this.setState({matches });
            this.setState({correctGuesses});
            this.setState({clickMessage});

        }
    };

    render()    {
        return(
            <wrapper>
                <title> Please begin your journey to riches via this app </title>

                <h2 className="scoreRepresentative">
                    {this.state.clickMessage}
                </h2>

                <h2 className="scoreRepresentative">
                  Your correct guesses:  {this.state.correctGuesses}
                  <br />
                  Your Best Score:  {this.state.bestScore}

                </h2>

                {this.state.matches.map(match =>    (
                    <MatchCard
                    setClicked = {this.setClicked}
                    id={match.id}
                    key={match.id}
                    image={match.image}
                    />

                ))}
            </wrapper>
        );
    }
}