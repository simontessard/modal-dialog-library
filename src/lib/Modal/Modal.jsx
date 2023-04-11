import React, { useState } from 'react'
import './modal.css'

export function Modal({ children, isOpen, titleText, closeText }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">
              <h1>{titleText}</h1>
              <button className="modal-close" onClick={handleClose}>
                {closeText}
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
