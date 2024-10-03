import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="alert alert-success" role="alert" style={{height:"20p"}} >
  {props.alert.massage}
</div>
  )
}
