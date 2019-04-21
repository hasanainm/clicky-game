import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Avengers from "./components/Avengers"
import avengers from "./avengers.json";
import "./App.css";

class App extends React.Component {

  state = {
    avengers: avengers,
    score: 0,
    topscore: 0,
    message: "Click any Image to begin!"
  }

  imgSelect = id => {

    const sortedAvengers = this.state.avengers.sort(() => Math.random() - 0.5);
    this.setState({
      avengers: sortedAvengers
    });

    const selectedElement = this.state.avengers.find(element => element.id === id);
    console.log(selectedElement)

    if (selectedElement.clicked) {

      var reset = this.state.avengers;

      for (let i = 0; i < reset.length; i++) {
        reset[i].clicked = false;
      }

      this.setState({
        score: 0,
        avengers: reset,
        message: "OOPS, TRY AGAIN!"
      })


    }
    else {
      selectedElement.clicked = true;
      if (this.state.score < 11) {
        this.setState({
          score: this.state.score + 1,
          message: "You got this!!!"
        });
        if (this.state.score === this.state.topscore) {
          this.setState({
            topscore: this.state.topscore + 1,
          });
        }
      } if (this.state.score === 11) {
        const clear = this.state.avengers.map(element => {
          return { ...element, clicked: false }
        });
        this.setState({
          score: 0,
          topscore: 0,
          avengers: clear,
          message: "BOO YEAH! YOU WON!!!"
        });

      }

    }

  };

  render() {
    return (
      <React.Fragment>
        <Navbar score={this.state.score} topscore={this.state.topscore} message={this.state.message}>Clicky Game</Navbar>
        <Jumbotron />

        <div className="container">
          {
            this.state.avengers.map((avengers, index) => (
              <Avengers key={index} id={avengers.id} image={avengers.image} imgSelect={this.imgSelect} />
            ))
          }
        </div>

      </React.Fragment>
    );
  }

}

export default App;