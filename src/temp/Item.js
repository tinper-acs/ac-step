/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.scss";

class Item extends React.Component {
  getCurrentStatusClass = index => {
    let { current, status } = this.props;
    if (current > index) {
      // 正在进行的步骤在当前步骤之后
      return "finish";
    }

    if (current == index) {
      if (["finish", "error", "process"].includes(status)) {
        return status;
      } else {
        return status || "process";
      }
    }
  };
  getArrow = () => {
    const { index } = this.props;
    return (
      <div className="arrowContent">
        <div
          className={classNames(
            "arrowStart",
            this.getCurrentStatusClass(index)
          )}
        />
        <div
          className={classNames(
            "arrowEnd",
            this.getCurrentStatusClass(index + 1)
          )}
        />
      </div>
    );
  };
  render() {
    const { title, index, className } = this.props;

    return (
      <div className={classNames("item", this.getCurrentStatusClass(index), className)}>
        <div className="content">{title}</div>
        {this.getArrow()}
      </div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.any,
  className: PropTypes.string,
  index: PropTypes.number,
  current: PropTypes.number,
  status: PropTypes.oneOf(["wait", "process", "finish", "error"])
};

export default Item;
