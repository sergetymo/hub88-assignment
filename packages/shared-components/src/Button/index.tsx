import React from 'react'

interface Props {
  title?: string
}

function Button ({ title }: Props) {
  return <button>{ title || 'Default title' }</button>
}

export default Button