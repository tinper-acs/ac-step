/**
 *
 * @title 应用组件名称
 * @description 应用组件描述
 *
 */

import React, { Component } from "react";
import Steps from "../../src/index";
import StepItem from "../../src/temp/Item";

class Demo1 extends Component {
  render() {
    const data = [
      {
        key: 0,
        title: "第一步"
      },
      {
        key: 1,
        title: "第二步"
      },
      {
        key: 2,
        title: "第三步"
      },
      {
        key: 3,
        title: "第四步"
      }
    ];
    return (
      <div className="demoPadding">
        <Steps current={2} status="error">
          {data.map((item, index) => (
            <StepItem key={item.key} index={index} title={item.title} />
          ))}
        </Steps>
      </div>
    );
  }
}

export default Demo1;
