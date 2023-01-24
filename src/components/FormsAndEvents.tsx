import React from 'react'

const FormsAndEvents = () => {
  return (
    <div>FormsAndEvents</div>
  )
}

export default FormsAndEvents;

// class component
type MyState={
  text: string
}
export class FormEvent extends React.Component<MyState>{
  state={
    text: ""
  }
  // on input change method
  onChange=(event: React.FormEvent<HTMLInputElement>):void =>{
    this.setState({
      text: event.currentTarget.value
    })
  }
  render(): React.ReactNode {
    return(
      <div>
        <p>Form events in react and typescript</p>
        <h3>{this.state.text}</h3>
        <input type="text" value={this.state.text} onChange={this.onChange} />
      </div>
    )
  }
}

// form events
export class FormEvents extends React.Component{
  render(): React.ReactNode {
    return(
      <div>
        <h3>Form Submit event</h3>
        <form onSubmit={(e: React.SyntheticEvent) =>{
          e.preventDefault();
          const target = e.target as typeof e.target & {
            email: {value: string},
            password: {value: string}
          }
          const email = target.email.value; // typechecks!
          const password = target.password.value; // typechecks!
    // etc...
        }}>
        <div>
    <label>
      Email:
      <input type="email" name="email" />
    </label>
  </div>
  <div>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
  </div>
  <div>
    <input type="submit" value="Log in" />
  </div>
        </form>
      </div>
    )
  }
}


