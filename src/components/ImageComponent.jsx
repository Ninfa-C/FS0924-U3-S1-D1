import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return(
        <div>
        <img src={this.props.srcImage} alt={this.props.altImage} width="300"/>
        </div>
    )
  }
}

export default ImageComponent;
