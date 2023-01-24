import {useState} from 'react'

type hooksProps ={
  name: string;
  age: number;
  isMarried: boolean;
}

type User={
  name: string;
  origin: string;
  isEmployed: boolean;
}

const Hooks = ({name, age, isMarried}: hooksProps): JSX.Element => {

  // USESTATE HOOK
  // using a primitive type
  const [count, setCount] = useState<number>(0);

  // using an object type
  const [user, setUser] = useState<User | null>(null);

  // You can also use type assertions if a state is initialized soon after setup and always has a value after:
  const [patient, setPatient] = useState<User>({} as User);

  // USECALLBACK HOOK
  

  // handling count increment
  const handleIncrement = ():void =>{
    setCount(count + 1);
  }

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isMarried}</p>
      <button onClick={handleIncrement}>{count}</button>
    </div>
  )
}

export default Hooks;