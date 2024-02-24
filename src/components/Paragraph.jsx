
import React from 'react'

const Paragraph = ({text, textclass}) => {
  return (
    <>
      <p className={textclass}>{text}</p>
    </>
  )
}

export default Paragraph
