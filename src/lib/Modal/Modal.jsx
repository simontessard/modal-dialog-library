import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './modal.css'

export function Modal({ children, isOpen, titleText, closeText, style }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  const handleClose = () => {
    setIsModalOpen((prev) => !prev)
  }

  const { content, logo, title, closeContainer, button } = style
  const contentStyle = { ...content }
  const logoStyle = { ...logo }
  const titleStyle = { ...title }
  const closeContainerStyle = { ...closeContainer }
  const closeButtonStyle = { ...button }

  return (
    isModalOpen && (
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" style={contentStyle} onClick={(e) => e.stopPropagation()}>
          <div className="image" style={logoStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#000000"
                  d="M20 7L9.00004 18L3.99994 13"
                ></path>{' '}
              </g>
            </svg>
          </div>
          <h1 className="modal-title" style={titleStyle}>
            {titleText}
          </h1>
          {children}
          <div className="modal-close-container" style={closeContainerStyle}>
            <button className="modal-close" style={closeButtonStyle} onClick={handleClose}>
              {closeText}
            </button>
          </div>
        </div>
      </div>
    )
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  titleText: PropTypes.string,
  closeText: PropTypes.string,
}

Modal.defaultProps = {
  titleText: 'Title',
  closeText: 'Close',
}
