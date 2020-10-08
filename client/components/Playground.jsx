import React, { useState, useEffect } from 'react'
import randomColor from  'randomcolor'

export default function Playground() {
  const [count, setCount] = useState(0)
  
  const [color, setColor] = useState(null)
  useEffect(() => {
    setColor(randomColor())
  }, [count])

  return (
  <div style={{ borderTop: `10px solid ${color}`}}>
    {count}
  <button onclick={() => setCount(currentCount => currentCount -1)}> - </button>
  <button onclick={() => setCount(currentCount => currentCount + 1)}> + </button>
  </div>
  )
}
