import React from 'react'

type Props = {
  params : any
}

export default function spec({params}: Props) {
  return (
    <div>spec : {params.id}</div>
  )
}