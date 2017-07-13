import React from 'react'
import Document from '../components/Document'
import io from "socket.io-client"

class DocumentContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pageContent: "Dear Diary",
    }

  this.handleEmit = this.handleEmit.bind(this)
  this.makeChange = this.makeChange.bind(this)
  this.receiveNew = this.receiveNew.bind(this)

  this.socket = io()
  this.socket.on ("diary", this.receiveNew)



}
  receiveNew(newContent) {
    console.log("recievenew", newContent)
    this.setState({pageContent: newContent})
    console.log("page",this.state.pageContent)
  }

  makeChange(event) {
    // var content = this.state.pageContent
    // var newContent = event.target.value
    // console.log("event", newContent)
    this.setState({ pageContent: event.target.value}) 
    // console.log(this.state.pageContent)
    this.handleEmit(event.target.value)
  }

  handleEmit(newContent) {

    this.socket.emit("diary", newContent)
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