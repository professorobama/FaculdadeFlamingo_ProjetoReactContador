import React, { useState } from "react";

function App() {
  
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Aplicativo Counter</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className = "btn btn-success mx-3" onClick={()=> setCount(count+1)}>Incremento</button>
            <button className = "btn btn-danger mx-3" onClick={()=> setCount(count-1)} disabled = {count === 0}>Decremento</button>
            <button className = "btn btn-secondary mx-3"onClick={()=> setCount(0)} disabled ={count===0}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
