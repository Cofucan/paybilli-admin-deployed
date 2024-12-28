const UserProfileLoading = () => {
  return (
    <div className='mx-10 animate-pulse'>
      <div className='flex items-center gap-2 pt-10'>
        <div className='h-6 w-6 rounded-full bg-gray-300'></div>
        <div className='h-7 w-32 rounded bg-gray-300'></div>
      </div>
      <div className='relative my-10 w-[95%] rounded-md bg-white shadow-sm shadow-[#c8edff]'>
        <div className='flex px-10 py-8'>
          <div className='flex w-[30%] flex-col items-center'>
            <div className='h-40 w-40 rounded-full bg-gray-300'></div>
            <div className='space-y-2 px-5 pt-10'>
              <div className='h-4 w-24 rounded bg-gray-300'></div>
              <div className='h-4 w-36 rounded bg-gray-300'></div>
            </div>
          </div>

          <div className='w-[70%]'>
            <div className='mt-6 grid grid-cols-1 gap-10 md:grid-cols-4'>
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className='space-y-2'>
                  <div className='h-4 w-20 rounded bg-gray-300'></div>
                  <div className='h-4 w-32 rounded bg-gray-300'></div>
                </div>
              ))}
            </div>
            <div className='flex w-[95%] items-center justify-between pt-8'>
              <div className='h-10 w-28 rounded bg-gray-300'></div>
              <div className='h-10 w-28 rounded bg-gray-300'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileLoading;
