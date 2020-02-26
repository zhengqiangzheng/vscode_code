import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
//纯的ui js 可以写成无状态组件节省性能
const TodoListUi = props => {
  return (
    <div>
      <div style={{ margin: '10px' }}>
        <Input
          onChange={props.ChangeInput}
          placeholder={props.placeHolderValue}
          style={{ width: '250px', marginRight: '10px', marginTop: '10px' }}
          value={props.inputValue}
        />
        <Button type={'primary'} onClick={props.AddTask}>
          添加任务
        </Button>
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <List
          dataSource={props.list}
          bordered
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.deleteItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
// class TodoListUi extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <div style={{ margin: '10px' }}>
//           <Input
//             onChange={this.props.ChangeInput}
//             placeholder={this.props.placeHolderValue}
//             style={{ width: '250px', marginRight: '10px', marginTop: '10px' }}
//             value={this.props.inputValue}
//           />
//           <Button type={'primary'} onClick={this.props.AddTask}>
//             添加任务
//           </Button>
//         </div>
//         <div style={{ margin: '10px', width: '300px' }}>
//           <List
//             dataSource={this.props.list}
//             bordered
//             renderItem={(item, index) => (
//               <List.Item
//                 onClick={() => {
//                   this.props.deleteItem(index);
//                 }}
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default TodoListUi;
