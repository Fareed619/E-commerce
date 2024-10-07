/* eslint-disable react/prop-types */
import './Button.css';

const ButtonComponent = ({text, color}) => {
  return (
    <div>
        <button style={color?{backgroundColor:color} : {backgroundColor:"orangered"}} className='btn'>{text}</button>
      
    </div>
  )
}

export default ButtonComponent
