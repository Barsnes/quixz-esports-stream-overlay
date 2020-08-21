import React from "react"
import http from "../services/http"

export default class Teams extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      teams: {},
      error: false
    }
  }


  componentDidMount() {
      http({
        method: "get",
        url: "/teams"
      })
      .then(res => {
          let teams = JSON.parse(res.request.response);
          this.setState({
            teams: teams
          })
          console.log(teams)
      })
      .catch(error => {
          this.setState({
              error: true
          });
      });
  }


  render() {
    let teamsArr = [];
    for (var i = 0; i < this.state.teams.length; i++) {
      teamsArr.push(this.state.teams[i])
    }

    teamsArr = teamsArr.map(team => (
      <div key={team.id}>
        <h4>Name: {team.name}</h4>
        <img src={team.logo} style={{ width: "40px" }} alt={`${team.name} Logo`} />
      </div>
    ))


    return (
      <div>
        <h2>Teams</h2>
        {teamsArr}
      </div>
    )
  }

}
