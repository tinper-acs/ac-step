/* eslint-disable */
import React, { cloneElement, Children, Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./style.scss";

class Steps extends Component {
  render() {
    const { current, status, children, className, successType } = this.props;

    const childProps = {
      current,
      status,
      successType
    };

    return (
      <div className={classNames("steps", className)}>
        {Children.map(children, child => cloneElement(child, childProps))}
      </div>
    );
  }
}

Steps.defaultProps = {
  current: 0,
  status: "process",
  successType: "text"
};

Steps.propTypes = {
  current: PropTypes.number.isRequired,
  status: PropTypes.oneOf(["wait", "process", "finish", "error"]),
  successType: PropTypes.oneOf(["icon", "text"]),
};

export default Steps;
