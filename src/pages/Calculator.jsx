import { useState, useEffect } from 'react'

const Calculator = () => {
  const [screen, setScreen] = useState('0')
  const [firstOperand, setFirstOperand] = useState(0)
  const [operator, setOperator] = useState('?')
  const [state, setState] = useState('S0')

  const numberClicked = (num) => {
    if (state === 'S0') {
      setScreen(num.toString())
      setState('S1')
    } else if (state === 'S1') {
      setScreen(screen + num.toString())
    } else if (state === 'S2') {
      setScreen(num.toString())
      setState('S3')
    } else if (state === 'S3') {
      setScreen(screen + num.toString())
    }
  }

  const operatorClicked = (op) => {
    setFirstOperand(Number(screen))
    setOperator(op)
    setState('S2')
  }

  const equalClicked = () => {
    const second = Number(screen)
    let result = 0
    if (operator === '+') result = firstOperand + second
    else if (operator === '-') result = firstOperand - second
    else if (operator === '×') result = firstOperand * second
    else if (operator === '÷') result = firstOperand / second
    setScreen(result.toString())
    setFirstOperand(result)
    setState('S1')
  }

  const ceClicked = () => {
    setScreen('0')
    setFirstOperand(0)
    setOperator('?')
    setState('S0')
  }

  const checkKeyboard = (event) => {
    if (event.key >= '0' && event.key <= '9') numberClicked(Number(event.key))
    else if (['+', '-', '*', '/'].includes(event.key))
      operatorClicked(
        event.key === '*' ? '×' : event.key === '/' ? '÷' : event.key
      )
    else if (event.key === 'Enter' || event.key === '=') equalClicked()
    else if (event.key === 'Escape') ceClicked()
  }

  useEffect(() => {
    document.addEventListener('keydown', checkKeyboard)
    return () => document.removeEventListener('keydown', checkKeyboard)
  })

  return (
    <div className='container mt-4 mb-5'>
      <h2 className='text-center fw-bold text-primary mb-3'>CALCULATOR</h2>
      <div
        className='border border-3 border-dark rounded p-3 mx-auto'
        style={{ width: '260px', background: '#f8f9fa' }}
      >
        <div
          className='bg-dark text-success text-end fs-3 fw-bold rounded mb-3 py-2 px-3'
          style={{ fontFamily: 'Courier New' }}
        >
          {screen}
        </div>
        <div className='d-flex justify-content-between mb-2'>
          <button className='btn btn-success btn-sm flex-fill me-1' disabled>
            MC
          </button>
          <button className='btn btn-success btn-sm flex-fill me-1' disabled>
            MR
          </button>
          <button className='btn btn-success btn-sm flex-fill me-1' disabled>
            M+
          </button>
          <button className='btn btn-success btn-sm flex-fill me-1' disabled>
            M−
          </button>
          <button
            className='btn btn-danger btn-sm flex-fill'
            onClick={ceClicked}
          >
            CE
          </button>
        </div>
        <div className='d-flex justify-content-between mb-2'>
          {[7, 8, 9].map((n) => (
            <button
              key={n}
              className='btn btn-secondary flex-fill me-1'
              onClick={() => numberClicked(n)}
            >
              {n}
            </button>
          ))}
          <button
            className='btn btn-success flex-fill'
            onClick={() => operatorClicked('÷')}
          >
            ÷
          </button>
        </div>
        <div className='d-flex justify-content-between mb-2'>
          {[4, 5, 6].map((n) => (
            <button
              key={n}
              className='btn btn-secondary flex-fill me-1'
              onClick={() => numberClicked(n)}
            >
              {n}
            </button>
          ))}
          <button
            className='btn btn-success flex-fill'
            onClick={() => operatorClicked('×')}
          >
            ×
          </button>
        </div>
        <div className='d-flex justify-content-between mb-2'>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className='btn btn-secondary flex-fill me-1'
              onClick={() => numberClicked(n)}
            >
              {n}
            </button>
          ))}
          <button
            className='btn btn-success flex-fill'
            onClick={() => operatorClicked('-')}
          >
            −
          </button>
        </div>
        <div className='d-flex justify-content-between'>
          <button
            className='btn btn-secondary flex-fill me-1'
            onClick={() => numberClicked(0)}
          >
            0
          </button>
          <button
            className='btn btn-success flex-fill me-1'
            onClick={() => operatorClicked('+')}
          >
            +
          </button>
          <button className='btn btn-success flex-fill' onClick={equalClicked}>
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator