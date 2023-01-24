import { Component} from 'react';

// define prop type
type MyProps={
  message: string;
}

// define state type
type MyState={
  count: number;
}

// for class components you have to define the 
class ClassComponent extends Component<MyProps, MyState>{
  state: MyState ={
    count: 3
  }
  render(): React.ReactNode {
    return(
      <div>
        <p>This is a class component!</p>
        <p>{this.props.message} {this.state.count}</p>
      </div>
    )
  }
}

export default ClassComponent;