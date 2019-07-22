import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard';
import './demo.scss';

import Demo1 from './demolist/Demo1';
import Demo2 from './demolist/Demo2';
import Demo3 from './demolist/Demo3';

const DemoArray = [
  {
    example: <Demo1 />,
    title: ' 步骤条基础使用',
    code:
      "/**\n *\n * @title 步骤条基础使用\n * @description 通过设置 current 为当前步骤， 设置 StepItem 的 title 和 index 为名称和索引\n *\n */\n\nimport React, { Component } from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport { Button } from 'tinper-bee';\nimport Steps from '../../src/index';\n\nconst data = [\n  {\n    key: 0,\n    title: '第一步',\n  },\n  {\n    key: 1,\n    title: '第二步',\n  },\n  {\n    key: 2,\n    title: '第三步',\n  },\n  {\n    key: 3,\n    title: '第四步',\n  },\n];\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      current: 0,\n    };\n  }\n\n  handleNext = () => {\n    const number = data.length;\n    const { current } = this.state;\n\n    if (current < number) {\n      this.setState({\n        current: current + 1,\n      });\n    }\n  };\n\n  handlePre = () => {\n    const { current } = this.state;\n\n    if (current > 0) {\n      this.setState({\n        current: current - 1,\n      });\n    }\n  };\n\n  render() {\n    const { current } = this.state;\n    return (\n      <div className=\"demoPadding\">\n        <div className=\"oprationContainer\">\n          {current > 0 && <Button onClick={this.handlePre}>上一步</Button>}\n          {current < data.length && (\n            <Button colors=\"primary\" onClick={this.handleNext}>\n              下一步\n            </Button>\n          )}\n        </div>\n        <Steps current={current}>\n          {data.map((item, index) => (\n            <Steps.StepItem key={item.key} index={index} title={item.title} />\n          ))}\n        </Steps>\n      </div>\n    );\n  }\n}\n\n\n",
    desc: ' 通过设置 current 为当前步骤， 设置 StepItem 的 title 和 index 为名称和索引',
  },
  {
    example: <Demo2 />,
    title: ' 错误状态的步骤条',
    code:
      '/**\n *\n * @title 错误状态的步骤条\n * @description 添加 status 为 error 代表当前步骤的状态，status 还可以设置其他状态为：["wait", "process", "finish", "error"]\n *\n */\n\nimport React, { Component } from \'react\';\nimport Steps from \'../../src/index\';\n\nconst data = [\n  {\n    key: 0,\n    title: \'第一步\',\n  },\n  {\n    key: 1,\n    title: \'第二步\',\n  },\n  {\n    key: 2,\n    title: \'第三步\',\n  },\n  {\n    key: 3,\n    title: \'第四步\',\n  },\n];\n\nclass Demo2 extends Component {\n  render() {\n    return (\n      <div className="demoPadding">\n        <Steps current={1} status="error">\n          {data.map((item, index) => (\n            <Steps.StepItem key={item.key} index={index} title={item.title} />\n          ))}\n        </Steps>\n      </div>\n    );\n  }\n}\n\n\n',
    desc:
      ' 添加 status 为 error 代表当前步骤的状态，status 还可以设置其他状态为：["wait", "process", "finish", "error"]',
  },
  {
    example: <Demo3 />,
    title: ' 错误状态的步骤条',
    code:
      "/**\n *\n * @title 错误状态的步骤条\n * @description 通过这事 successType 为 icon，可以定义成功之后的显示内容为对勾还是文字，默认设置为文字\n *\n */\n\nimport React, { Component } from 'react';\nimport Steps from '../../src/index';\n\nconst data = [\n  {\n    key: 0,\n    title: '第一步',\n  },\n  {\n    key: 1,\n    title: '第二步',\n  },\n  {\n    key: 2,\n    title: '第三步',\n  },\n  {\n    key: 3,\n    title: '第四步',\n  },\n];\n\nclass Demo3 extends Component {\n  render() {\n    return (\n      <div className=\"demoPadding\">\n        <Steps current={1} successType=\"icon\">\n          {data.map((item, index) => (\n            <Steps.StepItem key={item.key} index={index} title={item.title} />\n          ))}\n        </Steps>\n      </div>\n    );\n  }\n}\n\n\n",
    desc: ' 通过这事 successType 为 icon，可以定义成功之后的显示内容为对勾还是文字，默认设置为文字',
  },
];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  fCloseDrawer = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {
      title, example, code, desc, scss_code,
    } = this.props;

    const header = (
      <div>
        <p className="component-title">{title}</p>
        <p>{desc}</p>
        <span className="component-code" onClick={this.handleClick}>
          {' '}
          查看源码
          {' '}
          <i className="uf uf-arrow-right" />
          {' '}
        </span>
      </div>
    );
    return (
      <Col md={12} id={title.trim()} className="component-demo">
        <Panel header={header}>{example}</Panel>

        <Drawer
          className="component-drawerc"
          title={title}
          show={this.state.open}
          placement="right"
          onClose={this.fCloseDrawer}
        >
          <div className="component-code-copy">
            {' '}
            JS代码
            <Clipboard action="copy" text={code} />
          </div>
          <pre className="pre-js">
            <code className="hljs javascript">
              {code.replace('../../src/index', COMPONENT).replace('../../src', COMPONENT)}
            </code>
          </pre>
          {scss_code ? (
            <div className="component-code-copy copy-css">
              {' '}
              SCSS代码
              <Clipboard action="copy" text={scss_code} />
            </div>
          ) : null}
          {scss_code ? (
            <pre className="pre-css">
              <code className="hljs css">{scss_code}</code>
            </pre>
          ) : null}
        </Drawer>
      </Col>
    );
  }
}

class DemoGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        {DemoArray.map((child, index) => (
          <Demo
            example={child.example}
            title={child.title}
            code={child.code}
            scss_code={child.scss_code}
            desc={child.desc}
            key={index}
          />
        ))}
      </Row>
    );
  }
}

ReactDOM.render(<DemoGroup />, document.getElementById('root'));
