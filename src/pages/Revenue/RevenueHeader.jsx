import { useState } from 'react'
import ImportImgs from '../../components/ImportImgs'
import ArrowDown from '../../assets/ArrowDown.svg'
import Footer from '../../components/Footer'
import RevenueTableHeader from '../../Tables/RevenueTable/RevenueTableHeader'

const Card = ({ imgSrc, value, label }) => (
  <div className='smd:w-[30vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
    <img src={imgSrc} alt={label} className='ms-5' />
    <div className='flex flex-col'>
      <p className='text-[26px] smd:text-[18px] lg:text-[26px]'>{value}</p>
      <p className='text-gray-500'>{label}</p>
    </div>
  </div>
)

const RevenueHeader = () => {
  const images = ImportImgs()

  const [currency, setCurrency] = useState('Naira')
  const [values, setValues] = useState({
    balance: 24000000,
    incoming: 4000000,
    outgoing: 2000000,
    transaction: 24000000,
    commission: 3000000,
    refund: 5000000,
  })

  const handleCurrencyChange = newCurrency => {
    setCurrency(newCurrency)
    if (newCurrency === 'Crypto') {
      setValues({
        balance: 4000,
        incoming: 2400,
        outgoing: 1600,
        transaction: 4000,
        commission: 20000,
        refund: 30000,
      })
    } else {
      setValues({
        balance: 24000000,
        incoming: 4000000,
        outgoing: 2000000,
        transaction: 2400000,
        commission: 3000000,
        refund: 5000000,
      })
    }
  }

  return (
    <div className='w-full relative'>
      <div className='w-[95%] mx-auto'>
        <h1 className='text-[34px] py-7 text-[#1D1D1D] leading-[28px] font-semibold'>
          Revenue
        </h1>
        <div className='bg-white border-2 border-gray-300 rounded-lg px-1 py-1 w-[140px]'>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => handleCurrencyChange('Naira')}
              className={`px-2 py-1 rounded ${
                currency === 'Naira' ? 'bg-light-blue-500 text-white' : ''
              }`}
              aria-label='Change to Naira'
            >
              Naira
            </button>
            <button
              onClick={() => handleCurrencyChange('Crypto')}
              className={`px-2 py-1 rounded ${
                currency === 'Crypto' ? 'bg-light-blue-500 text-white' : ''
              }`}
              aria-label='Change to Crypto'
            >
              Crypto
            </button>
          </div>
        </div>
        <div className='xl:w-[100%] grid grid-cols-1 smd:grid-cols-3 lg:grid-cols-3 gap-12 my-3'>
          <Card
            imgSrc={images.GrossRevenue}
            value={
              currency === 'Naira'
                ? `₦${values.balance.toLocaleString()}`
                : `${values.balance.toLocaleString()} USDT`
            }
            label='Gross Revenue'
          />
          <Card
            imgSrc={images.NewRevenue}
            value={
              currency === 'Naira'
                ? `₦${values.incoming.toLocaleString()}`
                : `${values.incoming.toLocaleString()} USDT`
            }
            label='Net Revenue'
          />
          <Card
            imgSrc={images.MoneyUnder}
            value={
              currency === 'Naira'
                ? `₦${values.outgoing.toLocaleString()}`
                : `${values.outgoing.toLocaleString()} USDT`
            }
            label='Money Under Management'
          />
          <Card
            imgSrc={images.TransactionFee}
            value={
              currency === 'Naira'
                ? `₦${values.transaction.toLocaleString()}`
                : `${values.transaction.toLocaleString()} USDT`
            }
            label='Transaction Fees'
          />
          <Card
            imgSrc={images.CommissionRevenue}
            value={
              currency === 'Naira'
                ? `₦${values.commission.toLocaleString()}`
                : `${values.commission.toLocaleString()} USDT`
            }
            label='Commission Revenue'
          />
          <Card
            imgSrc={images.Refund}
            value={
              currency === 'Naira'
                ? `₦${values.refund.toLocaleString()}`
                : `${values.refund.toLocaleString()} USDT`
            }
            label='Refund and Charge-back'
          />
        </div>
      </div>
      <div className='flex justify-end lg:px-14 pt-12 mb-10'>
        <div className='flex gap-5 mx-2 lg:mx-0'>
          <button className='flex gap-2 px-8 py-3 font-semibold hover:shadow-md bg-[#4cb8ed] border border-[#4cb8ed] text-white rounded-xl'>
            <img src={ArrowDown} alt='#' className='w-6 h-6 object-cover' />
            Export Data
          </button>
        </div>
      </div>
      <RevenueTableHeader />
    </div>
  )
}

export default RevenueHeader
