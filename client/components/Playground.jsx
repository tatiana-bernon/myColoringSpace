import React, { useState, useEffect, useRef } from 'react'
import randomColor from 'randomcolor'

export default function Playground() {
  const [count, setCount] = useState(30)

  const inputRef = useRef()

  const [color, setColor] = useState(null)
  useEffect(() => {
    setColor(randomColor())
    inputRef.current.focus()
  }, [count])

  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      {count}
      <button onclick={() => setCount(currentCount => currentCount - 1)}> - </button>
      <button onclick={() => setCount(currentCount => currentCount + 1)}> + </button>
      <hr />
      <input ref={inputRef} type="range" onCharge={e => setCount(e.target.value)} value={count} />
    </div>
  )
}

function Calculate(num) {
  // first call, num === 3... ok I will calculate that
  return fetchComplicatedAlgorithmToAdd47(3) // returns 50 after awhile
  
  // second call, num === 5... ok I guess I have to calculate that too
  return fetchComplicatedAlgorithmToAdd47(5) // returns 52 after awhile
  
  // third call, num === 3... WAIT, I've seen this before! I know this one!
  return 50 // immediately
}
