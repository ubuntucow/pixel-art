import {  useState } from "react"

export default function Cell(props) {
    const [clicked, setClicked] = useState(false)
    const [color, setColor] = useState("white")
    const toggle = () => {setClicked(!clicked); setColor(props.color) }

    
  return (
    <span className="cell" style={{backgroundColor: clicked ? color : "white"}} onClick={toggle}></span>
  )
}
