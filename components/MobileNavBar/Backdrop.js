// components/Backdrop.js
import React from 'react'

const Backdrop = ({ className, onClick }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 blur-md z-40 ${className}`}
      onClick={onClick}
    />
  )
}

export default Backdrop
