import React from 'react'

const Heading = ({title , titleclass}) => {
  return (
    <>
      <h1 className={titleclass}>{title}</h1>
    </>
  )
}

export default Heading
