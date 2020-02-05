import React from "react";
import PropTypes from "prop-types";

class NamePicker extends React.Component {
  name = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToName = event => {
    event.preventDefault();

    const name = this.name.current.value;

    this.props.history.push(`/${name}`);
  };

  render() {
    return (
      <form className="name-selector" onSubmit={this.goToName}>
        <input type="text" ref={this.name} required placeholder="Name" />
        <button type="submit">Is Typing</button>
      </form>
    );
  }
}

export default NamePicker;
