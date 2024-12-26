const StatisticCardLoading = () => {
  return (
    <div className='flex w-full gap-3 rounded-lg bg-white px-4 py-3 shadow-sm'>
      <div className='w-full rounded bg-gray-500 object-cover'></div>
      <div className='flex size-16 w-full flex-col gap-2'>
        <div className='h-6 rounded bg-gray-500'></div>
        <p className='h-8 rounded bg-gray-500'></p>
      </div>
    </div>
  );
};
export default StatisticCardLoading;
