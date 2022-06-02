export default function VisualChart({
  data,
  descriptionClassName = 'mb-0px text-black-10 text-15px',
  percentClassName = 'mb-0px text-white text-center',
  isHero = false
}) {
  // initial values
  const a = Math.round(71.7)
  const b = Math.round(286.7)
  let c = Math.round(data)
  let result = a + b + c
  // percent values
  const percenta = (a * 100) / result
  const percentb = (b * 100) / result
  const percentc = (c * 100) / result

  const averageFootprint = [
    {
      description: 'Your yearly emission',
      bgColor: 'bg-blue',
      percent: percentc
    },
    {
      description: 'Emission of an average person',
      bgColor: 'bg-green',
      percent: percenta
    },
    {
      description: 'Emission of an average developer',
      bgColor: 'bg-orange',
      percent: percentb
    }
  ]

  return (
    <div className={`${isHero && 'flex'}`}>
      <div
        className={`flex opacity-50per hover:opacity-100per transition-all transition-duration-200ms ${
          !isHero && 'mt-75px mb-25px'
        }`}>
        {!isHero && (
          <dl className='w-30rem'>
            <dd className={`w-${Math.round(percentc)}per bg-blue h-20px mt-10px`}></dd>
            <dd className={`w-${Math.round(percenta)}per bg-green h-20px my-10px`}></dd>
            <dd className={`w-${Math.round(percentb)}per bg-orange h-20px`}></dd>
          </dl>
        )}
        <div
          id='footprint-chart'
          className={`w-100px min-w-100px h-100px rounded-50per bg-white block ml-auto ${isHero && 'opacity-50per'}`}
          style={{
            background: `${
              percentc <= percenta
                ? `conic-gradient(#066ef9 ${percentc}%, #f99106 ${percentc}% ${percentb}%, #80f906 ${percentb}% ${percenta}%)`
                : `conic-gradient(#80f906 ${percenta}%, #f99106 ${percenta}% ${percentb}%, #066ef9 ${percentb}% ${percentc}%)`
            }`
          }}></div>
      </div>

      <div className={`w-100per ${!isHero && 'flex'}`}>
        {averageFootprint.map((average, index) => (
          <div key={index}>
            <div className={`${!isHero ? 'flex' : 'ml-15px'}`}>
              <div
                className={`${isHero ? 'h-10px w-10px mr-10px' : 'h-10px w-10px mx-5px'} rounded-50per mt-3px ${
                  average.bgColor
                }`}></div>
              <p className={descriptionClassName}>
                {average.description} {isHero && Math.round(average.percent) + '%'}
              </p>
            </div>
            {!isHero && <p className={percentClassName}>{Math.round(average.percent)}%</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
