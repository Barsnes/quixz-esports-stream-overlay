import React from 'react';
import './App.css';
import http from "./components/services/http"

import MatchInfo from "./components/match/MatchInfo"
import Teams from "./components/teams/Teams"
import MatchBar from "./components/match/MatchBar"
import Veto from "./components/match/Veto"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getMatch = this.getMatch.bind(this)

    this.state = {
      match: [
        {"id": "e0a7445e-7374-4f91-a7c2-ba01621bcffc",
        "current": true,
        "left": {
          "id": "i8v4JBZ2bmkvZ0cU",
          "wins": "1"
        },
        "right": {
          "id": "leb0epGP25EGBcMT",
          "wins": "0"
        },
          "matchType": "bo2"}
        ],
      leftTeam: undefined,
      rightTeam: undefined,
      error: false
    }
  }


  componentDidMount() {
    this.getMatch()

    try {
         this.intervalID = setInterval(async () => {
             this.getMatch();
         }, 1000);
     } catch (e) {
         console.log(e);
     }

  }

  getMatch() {
    http({
      method: "get",
      url: "/match"
    })
    .then(res => {
        let match = JSON.parse(res.request.response);
        for (var i = 0; i < match.length; i++) {
          if (match[i].current) {
            this.setState({
              match: match[0]
            })
          }
        }
      })

    .catch(error => {
        this.setState({
            error: true
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Veto veto={this.state.match.vetos} />
        <MatchInfo match={this.state.match} />
        <MatchBar />
      </div>
    );
  }
}

export default App;
