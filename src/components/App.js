import React from "react";
import PropTypes from "prop-types";

import IsTyping from "./IsTyping";

class App extends React.Component {
  state = {
    name: ""
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    const { params } = this.props.match;

    this.setState({ name: decodeURIComponent(params.name) });
  }

  render() {
    return <IsTyping name={this.state.name} />;
  }
}

export default App;
