import React from 'react';
import ReactDOM from 'react-dom';
import {Data} from './data'
import {Tours} from './tours'
import './styles.css'
export const Main = ()=>{
const [loading, nonloading] = React.useState(false);
const [tours, setTours] = React.useState(Data);
const [condition, SetCondition] = React.useState(false);

const RemoveID = (id)=>{
  const NewList = tours.filter((items)=> items.id !== id);
  setTours(NewList);
}
console.log(tours.length);

const NewFunction = ()=>{
  setTours(Data);
  SetCondition(true);
}


//Using multiple returns
//This condition is when there is no tour left
if(loading){
  return(
    <>
    <h2>Loading...</h2> 
    </>
  )
}
if(tours.length === 0){
  return (
    <>
      <section className='endcontainer'>
        <h2>No Tours Left</h2>
        <button type="button" onClick={NewFunction}>
          Refresh
        </button>
      </section>
    </>
  );
}
return (
  <>
      <Tours tours={tours} RemoveID={RemoveID} />
  </>
);
}


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);


