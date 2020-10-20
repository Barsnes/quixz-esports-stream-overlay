import React from "react"
import http from "../services/http"
import "../../teams.css"

export default class Team extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      team: undefined,
      error: false
    }
  }

  componentDidMount() {
    if (this.props.team !== undefined ) {
      http({
        method: "get",
        url: "/teams/" + this.props.team.id
      })
      .then(res => {
          let team = JSON.parse(res.request.response);
          this.setState({
            team: team
          })
      })
      .catch(error => {
          this.setState({
              error: true
          });
      });
    }

    // console.log(this.state.team)
  }


  render() {
    const team = this.state.team

    if (team === undefined) {
      return(
        <div></div>
      )
    }

    return (
      <div key={team.id} className={`team ${this.props.side}`}>
        <img src={`data:image/jpeg;base64,${team.logo}`} alt={`${team.name} logo`} />
        <h5 className="teamWins">{this.props.team.wins}</h5>
      </div>
    )
  }

}
