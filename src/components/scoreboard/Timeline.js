import React from "react"
import "../../timeline.css"

export default class Timeline extends React.Component {

  render() {

    if (this.props.match === undefined || this.props.match.vetos === undefined) {
      return( <div></div> )
    }

    const match = this.props.match
    let finishedMaps = []
    let matchBoxes = []

    finishedMaps = match.vetos.reverse().filter(veto => veto.mapEnd)

    if (finishedMaps[0] === undefined) {
      return( <div></div> )
    }

    matchBoxes = finishedMaps[0].rounds.map(round => (
      <div key={Math.random()} className={`timeline-box ${round.winner}`}>
        {`Round ${round.round}`}
        <img alt={round.win_type} src={`/images/${round.win_type}.png`}></img>
      </div>
    ))


    return (
      <div className="timeline">
        {matchBoxes}
      </div>
    )
  }

}
