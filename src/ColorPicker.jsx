import React, {useState} from 'react'
function ColorPicker (){
const [color , setColor] = useState();

const displayColor = (event) => {
    setColor(event.target.value)
}





return (
    <div>
        <nav style={{backgroundColor:color}}>
            <h3>Color Picker</h3>
        </nav>
        <h1 style={{color:color}} >Color Picker</h1>
        <div className="display" style={{backgroundColor:color}}></div>
        <input type="text" placeholder='#hex values only ;)' onChange={displayColor} value={color}/>
        <input type="color" name="color" id="color" value={color} onChange={displayColor} />
    </div>
)

}
export default ColorPicker