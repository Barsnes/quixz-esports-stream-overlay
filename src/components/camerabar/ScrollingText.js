import React from "react"

import http from "./../services/http"

import ScrollText from 'react-scroll-text'


export default class ScrollingText extends React.Component {

  constructor(props) {
    super()

    this.getTeams = this.getTeams.bind(this)

    this.state = {
      teams: undefined,
      text: ["Telialigaen Div 3 | ", "Quixz spiller med 3 standins | Dobbeltap kan føre til nedrykk for Quixz | "]
    }
  }

  componentDidMount() {
    this.getTeams()

    if (this.state.teams === undefined) {
       this.getTeams();
    }
  }

  getTeams() {
    http({
      method: "get",
      url: "/teams"
    })
    .then(res => {
        let teams = JSON.parse(res.request.response);
        this.setState({
          teams: teams
        })
    })
    .catch(error => {
      console.error(error)
        this.setState({
            error: true
        });
    });
  }

  render() {

    if (this.state.teams === undefined) {
      return (
        <div></div>
      )
    }

    let text = []
    text.push(this.state.text)
    const veto = this.props.match.vetos
    const teams = this.state.teams

    console.log(this.props.match)
    console.log(this.state.teams)

    for (var i = 0; i < veto.length; i++) {
      if (veto[i].teamId !== "") {
        let team = teams.filter(team => team._id === veto[i].teamId)[0]
        let firstTeam = teams.filter(team => team._id === Object.keys((veto[i].score || ['','']))[0])
        let secondTeam = teams.filter(team => team._id === Object.keys((veto[i].score || ['','']))[1])

        if (veto[i].type === "pick") {
          text.push(
            team.name + " " + veto[i].type + "s " + veto[i].mapName.substr(3).charAt(0).toUpperCase() +
            veto[i].mapName.substr(4) + " | "
          )
        }
      }
    }

    for (var i = 0; i < veto.length; i++) {
      if (veto[i].teamId !== "") {
        let team = teams.filter(team => team._id === veto[i].teamId)[0]
        let firstTeam = teams.filter(team => team._id === Object.keys((veto[i].score || ['','']))[0])
        let secondTeam = teams.filter(team => team._id === Object.keys((veto[i].score || ['','']))[1])

        if (veto[i].mapEnd) {
            text.push(
              veto[i].mapName.substr(3).charAt(0).toUpperCase() + veto[i].mapName.substr(4) +
              " ends " +
              firstTeam[0].name + " " +
              Object.values((veto[i].score || ['-','-'])).join(":") + " " +
              secondTeam[0].name + " | "
          )
        }
      }
    }

    console.log(text)

    return (

      <ScrollText className="middle">
       {text}
      </ScrollText>

    )
  }

}
