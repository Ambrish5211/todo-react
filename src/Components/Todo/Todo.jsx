import React from 'react'

const Todo = ({text, isFInished}) => {
  return (
    <div>
        <input type="checkbox" checked={isFInished} />
        <span>{text}</span>
        <button> Edit</button>
        <button> Delete</button>
    </div>
  )
}

export default Todo