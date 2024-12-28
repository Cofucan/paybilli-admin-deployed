interface Stat {
  title: string;
  amount: string;
  change: string;
}

const UserStatistics = () => {
  const stats: Stat[] = [
    {
      title: "Total Bets",
      amount: "4,000",
      change: "+10% from last month",
    },
    {
      title: "Total Money Spent",
      amount: "NGN 450,000.00",
      change: "+20% from last month",
    },
    {
      title: "Total Amount Earned",
      amount: "NGN 280,000.00",
      change: "+150% from last month",
    },
    {
      title: "Total Bets Won",
      amount: "2,500",
      change: "+10% from last month",
    },
    {
      title: "Total Bets Lost",
      amount: "1,400",
      change: "+20% from last month",
    },
    {
      title: "Undecided Bets",
      amount: "100",
      change: "+150% from last month",
    },
  ];

  return (
    <div className='mb-10 me-12'>
      <div className='mx-auto grid w-[93%] grid-cols-1 gap-6 bg-gray-100 md:grid-cols-2 lg:grid-cols-3'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='rounded-lg bg-white px-6 py-5 text-left shadow-md shadow-[#dff2fc] transition-shadow duration-200 ease-in-out hover:shadow-lg'
          >
            <h4 className='text-sm font-medium text-black'>{stat.title}</h4>
            <p className='text-2xl font-semibold'>{stat.amount}</p>
            <p className='text-sm text-gray-500'>{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStatistics;
