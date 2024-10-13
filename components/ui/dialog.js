import React from 'react'

export const Dialog = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export const DialogContent = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export const DialogHeader = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export const DialogTitle = ({ children, ...props }) => {
  return (
    <h2 {...props}>
      {children}
    </h2>
  )
}
