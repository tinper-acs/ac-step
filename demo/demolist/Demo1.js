/**
 *
 * @title 步骤条基础使用
 * @description 通过设置 current 为当前步骤， 设置 StepItem 的 title 和 index 为名称和索引
 *
 */

import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button } from 'tinper-bee';
import Steps from '../../src/index';

const data = [
  {
    key: 0,
    title: '第一步',
  },
  {
    key: 1,
    title: '第二步',
  },
  {
    key: 2,
    title: '第三步',
  },
  {
    key: 3,
    title: '第四步',
  },
];

class Demo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };
  }

  handleNext = () => {
    const number = data.length;
    const { current } = this.state;

    if (current < number) {
      this.setState({
        current: current + 1,
      });
    }
  };

  handlePre = () => {
    const { current } = this.state;

    if (current > 0) {
      this.setState({
        current: current - 1,
      });
    }
  };

  render() {
    const { current } = this.state;
    return (
      <div className="demoPadding">
        <div className="oprationContainer">
          {current > 0 && <Button onClick={this.handlePre}>上一步</Button>}
          {current < data.length && (
            <Button colors="primary" onClick={this.handleNext}>
              下一步
            </Button>
          )}
        </div>
        <Steps current={current}>
          {data.map((item, index) => (
            <Steps.StepItem key={item.key} index={index} title={item.title} />
          ))}
        </Steps>
      </div>
    );
  }
}

export default Demo1;
