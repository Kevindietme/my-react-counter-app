import { useState } from "react";

export default function Body() {
    const [counter, setCounter] = useState(12);

    return(
        <section>
            <h2>Counter</h2>
            <p>{counter}</p>
            <div className="flexButton">
            <button className='button'onClick ={ () => { setCounter(counter + 1)}}>+</button>
            <button className='button'onClick ={ () => { setCounter(counter - 1)}}>-</button>
            </div>
            
            <div className="flexButton">
            <button className='button'onClick={ () => { setCounter(0)}}>Reset</button>
            </div>
            
        </section>
    )

}
