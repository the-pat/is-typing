import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

class NamePicker extends React.Component {
  name = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToName = event => {
    event.preventDefault();

    const name = this.name.current.value;

    this.props.history.push(`/${encodeURIComponent(name)}`);
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Is Typing...</title>
        </Helmet>
        <form className="name-selector" onSubmit={this.goToName}>
          <input type="text" ref={this.name} required placeholder="Name" />
          <button type="submit">Is Typing...</button>
        </form>
      </>
    );
  }
}

export default NamePicker;
