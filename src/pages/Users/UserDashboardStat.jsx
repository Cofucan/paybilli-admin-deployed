const UserDashboardStat = () => {
  const stats = [
    {
      title: 'Total Bets',
      amount: '4,000',
      change: '+10% from last month',
    },
    {
      title: 'Total Money Spent',
      amount: 'NGN 450,000.00',
      change: '+20% from last month',
    },
    {
      title: 'Total Amount Earned',
      amount: 'NGN 280,000.00',
      change: '+150% from last month',
    },
    {
      title: 'Total Bets Won',
      amount: '2,500',
      change: '+10% from last month',
    },
    {
      title: 'Total Bets Lost',
      amount: '1,400',
      change: '+20% from last month',
    },
    {
      title: 'Undecided Bets',
      amount: '100',
      change: '+150% from last month',
    },
  ]

  return (
    <div className='w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100'>
      {stats.map((stat, index) => (
        <div
          key={index}
          className='bg-white shadow-md shadow-[#dff2fc] text-left rounded-lg px-6 py-5 hover:shadow-lg transition-shadow duration-200 ease-in-out'
        >
          <h4 className='text-black text-sm font-medium'>{stat.title}</h4>
          <p className='text-2xl font-semibold '>{stat.amount}</p>
          <p className='text-sm text-gray-500'>{stat.change}</p>
        </div>
      ))}
    </div>
  )
}

export default UserDashboardStat
