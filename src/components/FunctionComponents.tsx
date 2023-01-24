// declare the type to be used as the prop type in the function component.
type FCProps={
  message: string;
}

// give the function a return type of JSX.Element so that an error is thrown if the function returns something else.
const FunctionComponents = ({message}: FCProps): JSX.Element =>{
  return(
    <div>
      <p>Functional Components In React-Typescript.</p>
      <h3>{message}</h3>
    </div>
  )

}

export default FunctionComponents;