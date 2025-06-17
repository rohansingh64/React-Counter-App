import { useState } from 'react';
import './Counter.css';

function Counter(){



    // when you use usestate  -->  when there is change in data and want to new data reflects on UI also



    // useState is a React Hook that lets you add state (i.e., data that changes over time) to functional components.

    // syntax -->  let [varName,changeValueFunction] = useState(initialValue);

    //   changeValueFunction(newValue);

    //  ------    useState  not change value immediataly  --> it schedule change then render new value on UI





    // we use useState for rendering again the UI content after change in i variable



    //************************************************** */
    // if we do not use useState --> then if we change in i then i value changed [verify by clg(i)] but not render on UI






    //  alternative of eventlistner(of js) in react --->

    //  event --> click event --> how to add click event --> use onClick = {Handlerfn} as props <------**************#######

    // change in input  ---> onChange={Handlerfnfn} as props

    // submit  ---> onSubmit={Handlerfnfn} as props







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

            <div>
                <span>Increment</span>
                <span>  &  </span>
                <span>Decrement</span>
            </div>

            <div className='Container'>
                <div><button onClick={decreaseCounterHandler}> - </button></div>
                <p>counter = {i} </p>
                <div><button onClick={increaseCounterHandler}> + </button></div>
            </div>

            <div>
                <button onClick={refreshCounterHandler} className='refreshbutton'>reset</button>
            </div>

        </div>

    );


}

export default Counter;