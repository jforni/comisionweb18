import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function HomePage() {
  return (
    <div>
      <NavLink to='/turnos'>
        <Button>Turnos</Button>
      </NavLink>
    </div>
  )
}
