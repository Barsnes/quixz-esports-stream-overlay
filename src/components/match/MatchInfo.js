import React from "react"

import Team from "../teams/Team"

export default function MatchInfo(props) {

    return (
      <div>
        {
          props.match.right !== undefined &&
          <div className="bothTeams">
            <Team match={props.match.left}  side="left" />
            <h1>VS</h1>
            <Team match={props.match.right} side="right" />
          </div>
        }
      </div>
    )

}
