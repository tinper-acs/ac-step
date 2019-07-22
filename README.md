# 步骤条

## 如何使用

```
npm install ac-step
```

## 代码演示
```
import React, { Component } from "react";
import AcStep from "ac-step";
import "ac-step/dist/index.css";

class Demo extends Component {
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
      <Steps current={2} status="error">
        {data.map((item, index) => (
          <Steps.StepItem
            key={item.key}
            index={index}
            title={item.title}
          />
        ))}
      </Steps>
  );
  }
}

export default Demo;
```

## API

### AcSteps

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
| className| 类名 | string | - |
| current | 当前是的步骤的索引值 | number | 0 |
| status | 当前步骤的状态，允许输入的值有："wait", "process", "finish", "error" | string | process |
| successType | 成功状态显示内容："icon", "text" | string | text |

### AcSteps.StepItem

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
| className| 类名 | string | - |
| index | 索引值 | number | - |
| title | 显示的内容 | any | - |

## 注意事项

暂无

## 更新日志
