import { useState } from 'react'

import RedixCounter from '../components/RadixCounter'
import Value from '../components/Value'
import Adder from '../components/Adder'
import Timer from '../components/Timer'
import Temperature from '../components/Temperature'

const Components = () => {

    const [counter, setCounter] = useState(0)

  return (
    <div className='main-container'>

      <div className='text-center'>
      <h1 className='fw-bold bg-black text-white p-2 rounded-3 d-inline-block'>REACT COMPONENTS</h1>
      </div>

      {/* <RedixCounter/> */}
      <div className='d-flex justify-content-center align-items-start gap-2'>
        <div className='d-flex flex-column align-items-center'>
          <Value name={'COUNTER'} value={counter} setValue={setCounter}/>
          <Timer/>
        </div>
        <Adder/>
      </div>

      <div className='text-center'>
      <Temperature/>
      </div>

      <div className='text-center'>
        <h2 className='text-center fw-bold mt-3 bg-black text-white p-2 rounded-3 d-inline-block'>67160172 นางสาวภัสสร เพ็ญพรเลิศชัย</h2>
      </div>

    </div>
  )
}

export default Components