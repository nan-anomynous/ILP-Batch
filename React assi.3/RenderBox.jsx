
import React from "react";

class RenderBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="box">{this.props.render(this.props.data)}</div>
      </>
    );
  }
}
export default RenderBox;
