import React, { useEffect, useState } from 'react'

const App = () => {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])

  return (
    <>
      <div className='px-4 flex flex-col items-center py-8 justify-center'>
        <h1 className='text-4xl font-semibold'>01-StopWatch</h1>

        <div className='text-2xl font-semibold py-4'>
          <span>
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span>
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          </span>
          <span>
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>

        <div className='flex justify-between flex-row gap-6 text-2xl'>
        {running ? 
          (<button className='bg-red-800 border rounded-lg p-4' onClick={() => { setRunning(false) }}>Stop</button>) 
          : 
          (<button className='bg-green-800 border rounded-lg p-4' onClick={() => { setRunning(true) }}>Start</button>)
        }
        <button className='border rounded-lg p-4' onClick={() => { setTime(0) }}>Reset</button>
        </div>

      </div>
    </>
  )
}

export default App