import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home () {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000')
    .then(res => {
      setMessage(res.data.message)
    })
  })

  return (
    <div>
      <h1>Home</h1>
      <p>{message}</p>
    </div>
  )
}