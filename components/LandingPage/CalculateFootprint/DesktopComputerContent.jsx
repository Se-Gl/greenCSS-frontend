import { useContext } from 'react'
import DonationContext from '@/utils/DonationContext'
import DisplayRangeSlider from '../HeroPhone/DisplayRangeSlider'
import VisualChart from './VisualChart'
import CoTwo from './CoTwo'
import CalculatePrice from './CalculatePrice'
import { GreenButton } from '@/components/reusable/Button'
import Loader from '@/components/logo/Loader'

export default function DesktopComputerContent() {
  const { calculate, finalPrize } = useContext(DonationContext)

  return (
    <div id='calculate-footprint'>
      <div className='absolute top-27per left-12per w-40rem'>
        <h2>Calculate your green footprint</h2>
        <p className='text-black-10 text-15px'>
          You - as a developer - are usually not even aware of how much CO2 you produce in a single business week.
          Calculate your digital footprint quickly and efficiently. It won&apos;t take you a minute.
        </p>
      </div>
      <>
        <div className='absolute left-45per' style={{ top: '135%' }}>
          <DisplayRangeSlider />
        </div>
        {finalPrize >= 0.01 && (
          <div className='fade-in animate animation-forwards'>
            <div className='absolute left-45per' style={{ top: '160%' }}>
              <GreenButton href='/member#member-prediction' hasLink={true} isDefault={false}>
                Be emission free
              </GreenButton>
            </div>

            <div className='absolute left-55per' style={{ top: '115%' }}>
              <span className={`text-20px font-600`} id='calculation-result'>
                {calculate}kg
              </span>
              <br />
              <span className='text-gray'>CO2 per year</span>
            </div>
            <div className='absolute left-45per' style={{ top: '115%' }}>
              <CalculatePrice />
              <br />
              <span className='text-gray'>to compensate</span>
            </div>
          </div>
        )}

        <div className='absolute left-23per' style={{ top: '220%' }}>
          <div className='bg-greencss hover:bg-greencss-1 w-15rem h-50px rounded-5px text-white flex px-10px transition-all transition-duration-200ms'>
            <span className='my-auto'>
              compensate <br />
              <CalculatePrice />
            </span>
          </div>
        </div>

        <div className='absolute left-42per select-none' style={{ top: '220%' }}>
          <div className='border-1px border-solid border-greencss w-15rem h-50px rounded-5px flex text-greencss px-10px'>
            <span className='my-auto'>
              weekly emission <br />
              <span className='text-20px font-600'>{(calculate / 52).toFixed(2)}</span>kg CO2
            </span>
          </div>
        </div>

        <div className='absolute left-61per select-none' style={{ top: '220%' }}>
          <div className='border-1px border-solid border-greencss w-15rem h-50px rounded-5px flex text-greencss px-10px'>
            <span className='my-auto'>
              monthly emission <br />
              <span className='text-20px font-600'>{(calculate / 13).toFixed(2)}</span>kg CO2
            </span>
          </div>
        </div>

        {finalPrize >= 0.01 ? (
          <div className='absolute left-25per select-none' style={{ top: '222%' }}>
            <VisualChart
              data={calculate}
              descriptionClassName='mb-0px text-10px mb-0px'
              percentClassName='mb-0px text-black text-center text-10px font-600'
            />
          </div>
        ) : (
          <div className='opacity-33per min-w-80px absolute left-48per' style={{ top: '240%' }}>
            <div className='absolute z-10 fade-in animation-duration-500ms'>
              <Loader />
              <span className='text-black-10 text-center ml-neg-30px'>Waiting for your input</span>
            </div>
          </div>
        )}

        <div className='absolute left-20per w-35rem' style={{ top: '298%' }}>
          <h3>Conclusion about your footprint</h3>
          <p className='mb-0px mt-25px text-15px text-black-10'>
            In this calculation we have only calculated your PC/laptop consumption. We compared the mean energy
            expenditure of an average person in their free time (monday to friday), as well as the average amount of
            power used by a developer during working hours (monday to friday) with your relative values. Did you know
            that the worlds average <CoTwo /> footprint per person per year is{' '}
            <span className='font-700 text-red-7'>6.1 tonnes</span>? It is the total of flights, accommodation, mobility
            and energy.
          </p>
        </div>
      </>
    </div>
  )
}
