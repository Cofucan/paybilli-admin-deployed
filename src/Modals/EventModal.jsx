const EventModal = ({
  onClose,
  onCreate
}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center '>
      <div className='bg-[#F9FAFB] w-[650px] p-6 rounded-lg shadow-lg'>
        {/* Modal Header */}
        <h2 className='text-lg font-semibold text-gray-800 mb-2'>
          Create an Event?
        </h2>

        {/* Modal Body */}
        <p className='text-sm text-gray-500 mb-6'>
          Are you certain you want to create this event?
        </p>

        {/* Buttons Section */}
        <div className='flex justify-end gap-4'>
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className='px-6 py-2 border border-light-blue-500 text-light-blue-500 rounded-lg'
          >
            Cancel
          </button>

          {/* Create Event Button */}
          <button
            onClick={onCreate}
            className='px-6 py-2 bg-light-blue-500 text-white rounded-lg hover:bg-[#349cc8] transition-all'
          >
            Create Event
          </button>
        </div>
      </div>

      {/* {isSuccessModal && <SuccessEventModal />} */}
    </div>
  )
}

export default EventModal
