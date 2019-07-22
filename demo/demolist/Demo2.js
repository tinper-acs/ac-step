/**
 *
 * @title 错误状态的步骤条
 * @description 添加 status 为 error 代表当前步骤的状态，status 还可以设置其他状态为：["wait", "process", "finish", "error"]
 *
 */

import React, { Component } from 'react';
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

class Demo2 extends Component {
  render() {
    return (
      <div className="demoPadding">
        <Steps current={1} status="error">
          {data.map((item, index) => (
            <Steps.StepItem key={item.key} index={index} title={item.title} />
          ))}
        </Steps>
      </div>
    );
  }
}

export default Demo2;
