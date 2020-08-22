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
    if (this.props.match !== undefined ) {
      http({
        method: "get",
        url: "/teams/" + this.props.match.id
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

  }


  render() {
    const team = this.state.team

    if (team === undefined) {
      return(
        <div></div>
      )
    }

    return (
      <div key={team.id} className={`teamBox ${this.props.side}`}>
        <div className="teamImage"><img src={`data:image/jpeg;base64,${team.logo}`} alt={`${team.name} logo`} /></div>
        <h5 className="teamWins">{this.props.match.wins}</h5>
      </div>
    )
  }

}
