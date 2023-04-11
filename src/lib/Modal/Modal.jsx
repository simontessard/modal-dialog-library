import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
            </div>
            {children}
            <div className="modal-close-container">
              <button className="modal-close" onClick={handleClose}>
                {closeText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.array,
  isOpen: PropTypes.bool.isRequired,
  titleText: PropTypes.string,
  closeText: PropTypes.string,
}

Modal.defaultProps = {
  isOpen: false,
  titleText: 'Title',
  closeText: 'Close',
}
