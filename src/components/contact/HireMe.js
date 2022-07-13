import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { Hire } from './HireMe.style'

export default function HireMe() {
  return (
      <Hire>
          <h1>Interested working with me?</h1>
          <button>
              Contact Me <FaLocationArrow/>
          </button>
      </Hire>
  )
}
