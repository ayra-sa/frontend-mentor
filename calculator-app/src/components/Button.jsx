import React from 'react'
import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getClassName = btn => {
    const className = {
        'DEL' : 'del',
        'RESET' : 'reset',
        '=' : 'equal'
    }

    return className[btn]
}


const Button = ({ value }) => {

  const {calc, setCalc} = useContext(CalcContext)

  // user click comma button
  const comma = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }

  // user click reset button
  const reset = () => {
    setCalc({sign: '', num: 0, res: 0})
  }

  // user click number button
  const handleNumberButton = () => {
    const numberString = value.toString()
    
    let numberValue;
    if (numberString === '0' && calc.num === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calc.num + numberString)
    }
    
    setCalc({
      ...calc,
      num: numberValue
    })
  }

  // user click operation button
  const sign = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }

  // user click equal button
  const equal = () => {
    const math = (a, b, sign) => {
      const results = {
        "+": () => a + b,
        "-": () => a - b,
        "x": () => a * b,
        "/": () => a / b
      }

      return results[sign](a, b)
    }

    setCalc({
      res: math(calc.res, calc.num, calc.sign),
      num: 0,
      sign: ''
    })
  }

  // user click del button
  const del = () => {

    if (calc.num > 0) {
      const val = calc.num.toString()
      const valDelete = val.slice(0, -1)
      
      setCalc({
        ...calc,
        num: Number(valDelete)
      })
    }
  }
  
  const handleBtnClick = () => {
    const result = {
      "." : comma,
      "RESET": reset,
      "+": sign,
      "-": sign,
      "x": sign,
      "/": sign,
      "=": equal,
      "DEL": del
    }

    if (result[value]) {
      return result[value]()
    } else {
      return handleNumberButton()
    }

  }

  return (
    <button onClick={handleBtnClick} className={`${getClassName(value)} toggle`}>
        {value}
    </button>
  )
}

export default Button