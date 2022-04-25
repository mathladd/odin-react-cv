import React from 'react'

function EditBox(props) {
  return (
    <input
        type="text" className="edit-box"
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.onChange}
    ></input>
  )
}

export default EditBox;