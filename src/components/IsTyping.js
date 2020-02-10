import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import BackButton from "./BackButton";

const IsTyping = props => (
  <>
    <Helmet>
      <title>{props.name} is typing...</title>
    </Helmet>
    <div>{props.name} is typing...</div>
    <BackButton />
  </>
);

IsTyping.propTypes = {
  name: PropTypes.string.isRequired
};

export default IsTyping;
