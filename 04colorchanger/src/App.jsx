import { useState } from "react"

function App() {
  const [color, setColor] = useState("black"); 
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
      
      <div className="fixed bottom-12 left-0 right-0 flex justify-center px-2">
      
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-3xl"> 
      
      <button
      onClick={() => setColor("red")}
      className="outline-none px-2 py-2 rounded-full text-voilet shadow-lg"
      style={{backgroundColor: "red"}}
      >red</button> 

      <button
      onClick={() => setColor("blue")}
      className="outline-none px-2 py-2 rounded-full text-voilet shadow-lg"
      style={{backgroundColor: "blue"}}
      >blue</button> 

      <button
      onClick={() => setColor("yellow")}
      className="outline-none px-2 py-2 rounded-full text-voilet shadow-lg"
      style={{backgroundColor: "yellow"}}
      >yellow</button> 
    
      <button
      onClick={() => setColor("green")}
      className="outline-none px-2 py-2 rounded-full text-voilet shadow-lg"
      style={{backgroundColor: "green"}}
      >green</button> 

      <button
      onClick={() => setColor("pink")}
      className="outline-none px-2 py-2 rounded-full text-violet shadow-lg"
      style={{backgroundColor: "pink"}}
      >pink</button>

      <button
      onClick={() => setColor("violet")}
      className="outline-none px-2 py-2 rounded-full text-violet shadow-lg"
      style={{backgroundColor: "violet"}}
      >Violet</button>
      
      <button
      onClick={() => setColor("White")}
      className="outline-none px-2 py-2 rounded-full text-violet shadow-lg"
      style={{backgroundColor: "White"}}
      >White</button>


      </div>
     
      </div>
     
      </div>
    </>
  )
}

export default App
