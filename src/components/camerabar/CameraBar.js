import React from "react"

import Team from "./Team"
import ScrollingText from "./ScrollingText"

import Clock from 'react-live-clock';
import ScrollText from 'react-scroll-text'

import http from "../services/http"
import "../../camerabar.css"


export default class CameraBar extends React.Component {

  constructor(props) {
    super(props)

    this.getMatch = this.getMatch.bind(this)

    this.state = {
      error: false
    }
  }

  getMatch() {
    http({
      method: "get",
      url: "/match"
    })
    .then(res => {
        let match = JSON.parse(res.request.response);
        for (var i = 0; i < match.length; i++) {
          if (match[i].current) {
            this.setState({
              match: match[0]
            })
          }
        }
      })

    .catch(error => {
        this.setState({
            error: true
        });
    });
  }

  componentDidMount() {
    this.getMatch()
  }

  render() {

    if (this.state.match === undefined) {
      return(
        <div></div>
      )
    }

    if (this.state.match.left === undefined) {
      return(
        <div></div>
      )
    }


    return (
      <div className="camerabar-capsulator">
        <div className="sponsors">
        </div>
        <div className="camerabar">
          <div className="teams">
            <Team team={this.state.match.left} side="left" />
            <h5>:</h5>
            <Team team={this.state.match.right} side="right" />
          </div>

          <ScrollingText match={this.state.match} />

          <div className="time">
            <h2>LOCAL TIME</h2>
            <Clock format={'HH:mm'} ticking={true} timezone={'CET'} />
          </div>
        </div>
      </div>
    )
  }
}
