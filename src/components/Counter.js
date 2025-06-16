import { useState } from 'react';
import './Counter.css';

function Counter(){

    let [i,changeIvalue] = useState(0);


    function increaseCounterHandler(){
        changeIvalue(i+1);
    }

    function decreaseCounterHandler(){
        if(i>0){
            changeIvalue(i-1);
        }
    }

    function refreshCounterHandler(){
        changeIvalue(0);
    }

    return (

        <div className='outerContainer'>

            <div className='Container'>
                <div><button onClick={decreaseCounterHandler}> - </button></div>
                <p>counter = {i} </p>
                <div><button onClick={increaseCounterHandler}> + </button></div>
            </div>

            <div>
                <button onClick={refreshCounterHandler} className='refreshbutton'>refresh counter</button>
            </div>

        </div>

    );


}

export default Counter;