import { useEffect, useContext } from 'react'
import DonationContext from '@/utils/DonationContext'

export default function CalculatePrice({ data }) {
  const { finalPrize } = useContext(DonationContext)
  let ceiledPrice = Math.ceil(finalPrize)

  useEffect(() => {
    localStorage.setItem('estimatedFootprint', JSON.stringify(Math.ceil(ceiledPrice)))
  }, [data])

  return (
    <>
      <span className='text-20px font-600'>USD {Math.ceil(ceiledPrice)}$ </span>{' '}
    </>
  )
}
