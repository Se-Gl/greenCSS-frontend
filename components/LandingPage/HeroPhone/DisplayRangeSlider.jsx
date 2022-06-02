import { useEffect, useContext } from 'react'
import RangeSlider from '../CalculateFootprint/RangeSlider'
import DonationContext from '@/utils/DonationContext'

export default function DisplayRangeSlider({ maxWidth = '', descriptionClassName = 'mb-0px text-black-10 text-15px' }) {
  const { valueHour, valueWatt, setValueWatt, setValueHour } = useContext(DonationContext)

  // map RangeSlider
  const sliders = [
    {
      description: 'How many watts does your computer consume?',
      slider: <RangeSlider unit='W' max={1000} step={50} value={valueWatt} setValue={setValueWatt} />
    },
    {
      description: 'How many hours per week do you work?',
      slider: <RangeSlider unit='h' max={100} value={valueHour} setValue={setValueHour} />
    }
  ]

  // save set values to localstorage
  useEffect(() => {
    localStorage.setItem('valueWatt', JSON.stringify(valueWatt))
  }, [valueWatt])
  useEffect(() => {
    localStorage.setItem('valueHour', JSON.stringify(valueHour))
  }, [valueHour])

  return (
    <div className='m-auto sm:m-0px'>
      {sliders.map((slider, index) => (
        <div key={index} className={maxWidth}>
          <p className={`${descriptionClassName}`}>{slider.description}</p>
          {slider.slider}
        </div>
      ))}
    </div>
  )
}
