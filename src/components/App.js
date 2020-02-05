import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    name: ""
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    const { params } = this.props.match;

    this.setState({ name: params.name });
  }

  render() {
    return <div>{this.state.name} is typing</div>;
  }
}

export default App;
