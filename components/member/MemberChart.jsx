import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '@/utils/SubscriptionContext'

export default function MemberChart({ chartData }) {
  const [income, setIncome] = useState(1000)

  // context
  const [state] = useContext(UserContext)
  // initial values

  const a = income ? income : 1000
  let c = Math.round(Math.round(chartData))
  let result = a + c
  // percent values
  const percenta = (a * 100) / result
  const percentc = (c * 100) / result

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get('/monthly-income')
      let getArrayOfIncome = data.data.map((sub) => sub.amount)
      let setUpdatedIncome = getArrayOfIncome.reduce((partialSum, a) => partialSum + a, 0) / 1000

      setIncome(setUpdatedIncome)
      // console.log(data)
    }

    if (state && state.token) getSubscriptions()
  }, [state && state.token])

  return (
    <div className='flex'>
      <div className='flex opacity-50per hover:opacity-100per transition-all transition-duration-200ms mt-25px'>
        <dl className='w-30rem'>
          <dd
            title={`your contribution ${percentc.toFixed(2)}%`}
            className='bg-blue h-20px mt-10px'
            style={{ width: `${percentc <= 3 ? '3' : Math.round(percentc)}%` }}></dd>
          <dd
            title={`greenCSS community ${percenta.toFixed(2)}%`}
            className='bg-green h-20px my-10px'
            style={{ width: `${Math.round(percenta)}% ` }}></dd>
        </dl>
      </div>
    </div>
  )
}
