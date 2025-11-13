import { useEffect, useState } from 'react'

// props = {initial: ??, name: '??' }

const Value = ({ name, initial, type, value, setValue }) => {
  ///***
  //const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(initial || 0)
  }, [initial])

  return (
    <div
      className='border border-black border-2 rounded-3 mx-auto p-2 bg-secondary-subtle mt-3'
      style={{
        width:
          name === 'COUNTER'
            ? '290px'
            : name === 'FAHRENHEIT'
            ? '250px'
            : '220px',
      }}
    >
      <h1 className='text-primary text-center fw-bold mb-2'>{name || 'VALUE'}</h1>
      <div className='d-flex justify-content-center align-items-center' style={{ gap: '4px' }}>
        <button
          className='btn btn-danger btn-ig px-3 py-2'
          onClick={() => setValue((p) => p - 1)}
        >
          &minus;
        </button>
        <div className='fs-4 fw-bold text-dark text-center' style={{ minWidth: '55px' }}>
          {type === 'real' ? value.toFixed(2) : Math.round(value)}
        </div>
        <button
          className='btn btn-success btn-ig px-3 py-2'
          onClick={() => setValue((p) => p + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Value