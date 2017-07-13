import React from 'react'
import Document from '../components/Document'
import io from "socket.io-client"

class DocumentContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pageContent: "Dear Diary"
    }
  

  this.socket = io()
  this.socket.on ("essay", this.makeChange.bind(this))

}
  makeChange(event) {
    console.dir(event.target.value)
  }

  

  render() {
    return(
      <div>
      <Document pageContent={this.state.pageContent} onFinishEdit={this.makeChange} />
      </div>
      )
  }

}
export default DocumentContainer