/**
 *
 * @title 错误状态的步骤条
 * @description 通过这事 successType 为 icon，可以定义成功之后的显示内容为对勾还是文字，默认设置为文字
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

class Demo3 extends Component {
  render() {
    return (
      <div className="demoPadding">
        <Steps current={1} successType="icon">
          {data.map((item, index) => (
            <Steps.StepItem key={item.key} index={index} title={item.title} />
          ))}
        </Steps>
      </div>
    );
  }
}

export default Demo3;
