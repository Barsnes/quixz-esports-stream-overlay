import React from "react"

export default class Scores extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.veto === undefined || this.props.teams === undefined) {
      return (<div></div>)
    }

    let veto = this.props.veto
    let teams = this.props.teams
    let vetoBoxes = []
    veto = veto.filter(veto => veto.mapEnd === true)

    for (var i = 0; i < veto.length; i++) {
      let team = teams.filter(team => team._id === veto[i].winner)[0]
      vetoBoxes.push(
          <div className="scoreBox" key={veto[i]}>
            <img src={team.logo} />
            <span>{veto[i].mapName.substr(3).charAt(0).toUpperCase() + veto[i].mapName.substr(4)} {" "}</span>
            <span className="score">{Object.values((veto[i].score || ['-','-'])).sort().join(":")}</span>
          </div>
        )
    }

    return (
      <div className="scoreBoxes">
        {vetoBoxes}
      </div>
    )
  }

}
