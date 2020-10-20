import React from "react"


export default class Scoreboard extends React.Component {

  render() {
    const match = this.props.match

    if (match === undefined || match.vetos === undefined) {
      return( <div /> )
    }

    let lastMap = match.vetos.reverse().filter(veto => veto.mapEnd)
    let playersArr = {}
    let playerBoxes = []

    if (lastMap[0] === undefined) {
      return( <div></div> )
    }

    console.log(lastMap[0])

      for (var i = 0; i < lastMap[0].rounds.length; i++) {

        let players = lastMap[0].rounds[i].players

        Object.entries(players).map(function(player) {

          if (playersArr[player[0]] === undefined) {
            playersArr[player[0]] = player
            playersArr[player[0]].kills = parseInt(player[1].kills)
          } else {
            playersArr[player[0]].kills = parseInt(player[1].kills) + parseInt(playersArr[player[0]].kills)
          }

        })

      }

    Object.entries(playersArr).map((player) => {
        playerBoxes.push(<div key={player[0]} className="player">{`Player: ${player[0]} - Kills ${player[1].kills}`}</div>);
    });


    return (
      <div>
        Scoreboard
        {playerBoxes}
      </div>
    )
  }

}
