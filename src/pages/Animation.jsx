import { useEffect, useState, useRef } from 'react'

const Animation = () => {
  const [running, setRunning] = useState(false)
  const [ballType, setBallType] = useState('none')
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [dir, setDir] = useState({ right: true, down: true })

  const vx = 5
  const vy = 5
  const fieldWidth = 700
  const fieldHeight = 400
  const ballDiameter = 100
  const maxX = fieldWidth - ballDiameter - 2
  const maxY = fieldHeight - ballDiameter - 2

  const intervalRef = useRef(null)

  const runClicked = () => setRunning((p) => !p)
  const ballClicked = (type) => setBallType(type)
  const noneClicked = () => setBallType('none')

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setPos((prev) => {
          let { x, y } = prev
          let { right, down } = dir

          if (right) {
            x += vx
            if (x >= maxX) right = false
          } else {
            x -= vx
            if (x <= 0) right = true
          }

          if (down) {
            y += vy
            if (y >= maxY) down = false
          } else {
            y -= vy
            if (y <= 0) down = true
          }

          setDir({ right, down })
          return { x, y }
        })
      }, 25)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [running, dir])

  const getBallImage = () => {
    const base = import.meta.env.BASE_URL || '/'
    switch (ballType) {
      case 'basketball':
        return `${base}basketball.png`
      case 'football':
        return `${base}football.png`
      case 'volleyball':
        return `${base}volleyball.png`
      case 'human':
        return `${base}human.png`
      case 'cartoon':
        return `${base}cartoon.png`
      default:
        return null
    }
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === ' ') runClicked()
      else if (e.key === '0') noneClicked()
      else if (e.key === '1') ballClicked('basketball')
      else if (e.key === '2') ballClicked('football')
      else if (e.key === '3') ballClicked('volleyball')
      else if (e.key === '4') ballClicked('human')
      else if (e.key === '5') ballClicked('cartoon')
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  })

  return (
    <div className='container text-center mt-4 mb-5'>
      <h2 className='fw-bold text-primary mb-3'>ANIMATION</h2>

      <div
        className='border border-2 border-dark rounded-3 mx-auto position-relative'
        style={{
          width: fieldWidth + 'px',
          height: fieldHeight + 'px',
          backgroundImage: `url(${import.meta.env.BASE_URL}field.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          className='position-absolute rounded-circle border border-dark d-flex align-items-center justify-content-center'
          style={{
            width: ballDiameter + 'px',
            height: ballDiameter + 'px',
            left: pos.x + 'px',
            top: pos.y + 'px',
            backgroundColor: ballType === 'none' ? 'lightgray' : 'transparent',
          }}
        >
          {getBallImage() && (
            <img
              src={getBallImage()}
              alt={ballType}
              className='rounded-circle'
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          )}
        </div>
      </div>

      <div className='d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3'>
        <button
          className={`btn ${
            running ? 'btn-warning' : 'btn-success'
          } fw-bold px-4`}
          onClick={runClicked}
        >
          {running ? 'PAUSE' : 'RUN'}
        </button>

        <div className='d-flex flex-wrap justify-content-center gap-2'>
          <button
            className={`btn ${
              ballType === 'none' ? 'btn-secondary' : 'btn-outline-secondary'
            }`}
            onClick={noneClicked}
          >
            None
          </button>
          {['basketball', 'football', 'volleyball', 'human', 'cartoon'].map(
            (type) => (
              <button
                key={type}
                className={`btn ${
                  ballType === type ? 'btn-primary' : 'btn-outline-primary'
                }`}
                onClick={() => ballClicked(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Animation