import { useContext } from 'react'
import DonationContext from '@/utils/DonationContext'
import DisplayRangeSlider from '../HeroPhone/DisplayRangeSlider'
import VisualChart from './VisualChart'
import CoTwo from './CoTwo'
import CalculatePrice from './CalculatePrice'
import { GreenButton } from '@/components/reusable/Button'

export default function DesktopComputerContent() {
  const { calculate, finalPrize } = useContext(DonationContext)

  return (
    <div id='calculate-footprint'>
      <div className='absolute top-31per left-5per w-40rem'>
        <h2>Calculate your green footprint</h2>
        <p className='text-black-10 text-15px'>
          You - as a developer - are usually not even aware of how much CO2 you produce in a single business week.
          Calculate your digital footprint quickly and efficiently. It won&apos;t take you a minute.
        </p>
      </div>
      <div className=''>
        <div className='absolute left-50per' style={{ top: '110%' }}>
          <DisplayRangeSlider />
        </div>
        {finalPrize >= 0.01 && (
          <div className='fade-in animate animation-forwards'>
            <div className='absolute left-50per' style={{ top: '140%' }}>
              <GreenButton href='#donation' hasLink={true} isDefault={false}>
                Donate
              </GreenButton>
            </div>

            <div className='absolute left-25per text-white' style={{ top: '107%' }}>
              <span className={`text-20px font-600`} id='calculation-result'>
                {calculate}kg
              </span>
              <br />
              CO2 per year
            </div>
            <div className='absolute left-9per text-white' style={{ top: '114%' }}>
              <CalculatePrice />
              <br />
              to compensate
            </div>
          </div>
        )}

        <div className='absolute left-23per' style={{ top: '187%' }}>
          <div className='bg-greencss w-15rem h-50px rounded-5px text-white flex px-10px'>
            <span className='my-auto'>
              compensate <br />
              <CalculatePrice />
            </span>
          </div>
        </div>

        <div className='absolute left-42per' style={{ top: '187%' }}>
          <div className='border-1px border-solid border-greencss w-15rem h-50px rounded-5px flex text-greencss px-10px'>
            <span className='my-auto'>
              weekly emission <br />
              <span className='text-20px font-600'>{(calculate / 52).toFixed(2)}</span>kg CO2
            </span>
          </div>
        </div>

        <div className='absolute left-61per' style={{ top: '187%' }}>
          <div className='border-1px border-solid border-greencss w-15rem h-50px rounded-5px flex text-greencss px-10px'>
            <span className='my-auto'>
              monthly emission <br />
              <span className='text-20px font-600'>{(calculate / 13).toFixed(2)}</span>kg CO2
            </span>
          </div>
        </div>

        <div className='absolute left-25per' style={{ top: '200%' }}>
          <VisualChart
            data={calculate}
            descriptionClassName='mb-0px text-10px mb-0px'
            percentClassName='mb-0px text-black text-center text-10px font-600'
          />
        </div>

        <div className='absolute left-20per w-55rem' style={{ top: '280%' }}>
          <p className='mb-0px mt-50px text-15px'>
            <span className='text-greencss text-15px font-bold'>NOTE: </span>In this calculation we have only calculated
            your PC/laptop consumption. We compared the mean energy expenditure of an average person in their free time
            (monday to friday), as well as the average amount of power used by a developer during working hours (monday
            to friday) with your relative values. Did you know that the worlds average <CoTwo /> footprint per person
            per year is <span className='font-700 text-red-7'>6.1 tonnes</span>? It is the total of flights,
            accommodation, mobility and energy.
          </p>
        </div>
      </div>
    </div>
  )
}
