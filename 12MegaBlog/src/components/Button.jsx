import React from 'react'

function Button({
    childern,
    type = 'button',
    bgColor = bg-blue-6,
    textcolor = 'text-yellow',
    className = '',
    ...props
}) {
  return (
    <button>
        {childern}
    </button>
  )
}

export default Button