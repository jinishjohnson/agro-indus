import { TypeAnimation } from 'react-type-animation';
import "./Typer.css"

const Typer = () => {
  return (
  <>
  <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'We produce food for Mice',
    1000,
    'We produce food for Hamsters',
    1000,
    'We produce food for Guinea Pigs',
    1000,
    'We produce food for Chinchillas',
    1000,
  ]}
  speed={50}
  className="typer-text" 
  repeat={Infinity}
/>
  </>    
  )
}

export default Typer