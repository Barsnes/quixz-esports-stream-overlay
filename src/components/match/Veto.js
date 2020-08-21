import React from "react"
import http from "../services/http"

import "../../veto.css"

export default class Veto extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.teams === undefined || this.props.veto === undefined) {
      return ( <div></div> )
    }

    const veto = this.props.veto
    const teams = this.props.teams

    let vetoBoxes = []

    // vetoBoxes = veto.map(veto => (
    //   veto.teamId && <div key={`veto-${veto.mapName}`}>{teams.filter(team => team.id === veto.teamId)[0]} {veto.type} {veto.mapName}</div>
    // ))

    for (var i = 0; i < veto.length; i++) {
      if (veto[i].teamId !== "") {
          let team = teams.filter(team => team._id === veto[i].teamId)[0]
          let firstTeam = teams.filter(team => team._id === Object.keys((veto[i].score || ['','']))[0])
          let secondTeam = teams.filter(team => team._id === Object.keys((veto[i].score || ['','']))[1])

          vetoBoxes.push(
            <div className={`vetoBox ${veto[i].type}`} key={`veto-${veto[i].mapName}`}>
              <img src={team.logo}></img>
              <span>
                {veto[i].type}s{" "}
                {veto[i].mapName.substr(3).charAt(0).toUpperCase() + veto[i].mapName.substr(4)}
              </span>
              { veto[i].mapEnd && <span className="final-score">
                <img src={firstTeam[0].logo}/>
                {Object.values((veto[i].score || ['-','-'])).join(":")}
                <img src={secondTeam[0].logo}/>
              </span> }
            </div>
          )
      }
    }


    return (
      <div className="vetoBoxes">
        {vetoBoxes}
      </div>
    )
  }
}
