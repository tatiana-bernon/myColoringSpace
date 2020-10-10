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
  const renderCount = useRef(1)
  return <div>{renderCount.current++}</div>
}
