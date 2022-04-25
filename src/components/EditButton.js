import React from 'react'

function EditButton(props) {
  return (
    <i
        className="fa fa-pencil per-edit"
        aria-hidden="true"
        onClick={props.onClick}
    ></i>
  )
}

export default EditButton;