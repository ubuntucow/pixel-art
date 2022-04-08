import { useState } from "react"
import Cell from "./components/Cell"
import "./index.css";
import { CompactPicker } from 'react-color';
const App = () => {
    const [width, setWidth]= useState(4)
    const [height, setHeight]= useState(4)
    const [dimensions, setDimensions] = useState([0, 0])
    const [color, setColor] = useState("#fff")
    return <>
    <h1>
        Mosaic Painter
        </h1> 
        <label htmlFor="width">Width</label>
        <input type="number" name="width" min={4} max={14} value={width} onChange={(e) => setWidth(parseInt (e.target.value))}/>
        <br />
        <label htmlFor="height">Height</label>
        <input type="number" name="height" min={4} max={14} value={height} onChange={(e) => setHeight(parseInt(e.target.value))}/>
        
        <button onClick={() => setDimensions([width, height])}>Create</button>
     <br />   <CompactPicker color={color.hex} onChangeComplete={(color) => setColor(color)}/>
        <div class="lh">
        {[...Array(dimensions[1])].map(() => 
       <> <br /> { [...Array(dimensions[0])].map((v,i) => <Cell key={i} color={color.hex}/>)}</>)}
        
        </div>
    </>
}

export default App 