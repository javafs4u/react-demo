import { useEffect, useState } from "react";

function CounterComponent() {
    const[count, setCount] = useState(0);

    const[count2, setCount2] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const increment2 = () =>{
        setCount2(count2 + 1);
    }

    useEffect(()=>{
        console.log('useEffect called');
    },[count])

    return(
        <div>
            <p>Count 1: {count}</p>
            <p>Count 2: {count2}</p>
            <button onClick={increment} disabled={count === 10}>Increment</button>
            <button onClick={increment2} disabled={count2 === 10}>Increment</button>
        </div>
    )
}

export default CounterComponent;