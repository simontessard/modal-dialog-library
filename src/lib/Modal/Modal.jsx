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
            <div class="image">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#000000"
                    d="M20 7L9.00004 18L3.99994 13"
                  ></path>{' '}
                </g>
              </svg>
            </div>
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
