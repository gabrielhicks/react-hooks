// useRef and useEffect: DOM interaction
// 💯 (alternate) migrate from classes
// http://localhost:3000/isolated/exercise/05-classes.js

import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'

// If you'd rather practice refactoring a class component to a function
// component with hooks, then go ahead and do this exercise.

const Tilt = props => {
  const tiltRef = React.createRef()
  // componentDidMount() {
  const tiltNode = tiltRef.current
  const vanillaTiltOptions = {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.67,
  }
  VanillaTilt.init(tiltNode, vanillaTiltOptions)
  // }
  // componentWillUnmount() {
  //   this.tiltRef.current.vanillaTilt.destroy()
  // }
  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  )
}
function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}

export default App
