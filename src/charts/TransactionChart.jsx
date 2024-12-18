import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Jan', value: 500000 }, // 500k
  { name: 'Feb', value: 600000 }, // 600k
  { name: 'Mar', value: 550000 }, // 550k
  { name: 'Apr', value: 450000 }, // 450k
  { name: 'May', value: 500000 }, // 500k
  { name: 'Jun', value: 480000 }, // 480k
  { name: 'Jul', value: 510000 }, // 510k
  { name: 'Aug', value: 530000 }, // 530k
  { name: 'Sep', value: 455749 }, // 455.75k (shown on the tooltip)
  { name: 'Oct', value: 470000 }, // 470k
  { name: 'Nov', value: 500000 }, // 500k
  { name: 'Dec', value: 520000 }, // 520k
]

const formatYAxis = tick => {
  if (tick >= 1000000) {
    return `${tick / 1000000}m`
  } else if (tick >= 1000) {
    return `${tick / 1000}k`
  }
  return tick
}

const TransactionChart = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#4DBD74' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#4DBD74' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' />
        <YAxis
          tickFormatter={formatYAxis}
          ticks={[0, 1000, 10000, 50000, 100000, 500000, 1000000]} // Custom tick values
          domain={[0, 1000000]} // Ensure the domain covers the range of your ticks
        />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip
          formatter={value => new Intl.NumberFormat('en').format(value)}
        />
        <Area
          type='monotone'
          dataKey='value'
          stroke='#4DBD74'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default TransactionChart
