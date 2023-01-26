import React from 'react'
import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'


const Screen = () => {
  const { calc } = useContext(CalcContext)

  const numString = calc.num.toString()

  return (
    <div className={`screen ${numString.length < 8 ? '' : 'max'}`}>{calc.num ? calc.num : calc.res}</div>
  )
}

export default Screen