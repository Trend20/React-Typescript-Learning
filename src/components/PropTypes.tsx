type propTypes = {
  name: string;
  age: number;
  isMarried: boolean;
  // object
  person:{
    isActive: boolean;
    name: string;
  }
  // string array
  names: string[];
  // union type
  phone: number | string;

  // array of objects
  myObj:{
    material: string;
    size: number;
    isStrong: boolean;
  }[];

   /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;

   /** function with named prop (VERY COMMON) */
  onChange: (val: string) => void;

    /** function type syntax that takes an event (VERY COMMON) */
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PropTypes = () =>{
  return(
    <div>
      <h3>PropTypes Component</h3>
    </div>
  )
}

export default PropTypes;