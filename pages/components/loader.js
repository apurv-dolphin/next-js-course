import React from 'react'
import ReactLoading from 'react-loading';

export default function Loader() {
  return (
    <div style={{display: "flex" , justifyContent: "center" }}>
      <ReactLoading type="bars" color="blue" height={500} width={250} />
    </div>
  )
}
