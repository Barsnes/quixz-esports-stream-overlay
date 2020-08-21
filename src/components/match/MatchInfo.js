import React from "react"

import Team from "../teams/Team"

export default class MatchInfo extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let match = this.props.match

    return (
      <div>
        {
          match.right !== undefined &&
          <div className="bothTeams">
            <Team match={match.left}  side="left" />
            <h1>VS</h1>
            <Team match={match.right} side="right" />
          </div>
        }
      </div>
    )
  }

}
