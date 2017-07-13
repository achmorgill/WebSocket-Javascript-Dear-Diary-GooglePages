import React from 'react'

class Document extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
        <textarea id="text-area" rows="20" cols="50" name="text-box" form="usrForm" onChange={this.props.onFinishEdit} value={this.props.pageContent}>
          

        </textarea>
      )
  }
}
export default Document