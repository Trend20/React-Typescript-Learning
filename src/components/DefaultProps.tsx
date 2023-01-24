import React from 'react'

// defaultProps are dying in react
// it is better to just use the object default values
type MyProp={
  greeting: string;
}
// function component
const DefaultProps1 = ({greeting}: MyProp) => {
  return (
    <div>DefaultProps</div>
  )
}

export default DefaultProps1;

// class component
type Prop={
  greeting: string;
}
type State={
  count: number;
}
export class DefaultProps2 extends React.Component<Prop, State>{
  render(): React.ReactNode {
    return(
      <div>
        <p>Default Props in class components</p>
      </div>
    )
  }
}


// typing default props

