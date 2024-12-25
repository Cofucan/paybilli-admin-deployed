import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/event/$eventId/create')({
  component: RouteComponent,
})

function RouteComponent() {
    return <></>
}

// function RouteComponent() {
//   const navigate = useNavigate()
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [isSuccessEventModal, setIsSuccessEventModal] = useState(false)

//   // Fetch Bet Types using React Query
//   const {
//     data: betTypes,
//   } = useQuery({
//     queryKey: ['betTypes'],
//     queryFn: fetchBetTypes,
//   });

//   // Set up the mutation with success and error handling
//   const { mutate } = useMutation({
//     mutationFn: createEvent,
//     onSuccess: () => {
//       console.log('Event created successfully')
//       setIsModalOpen(false)
//       setIsSuccessEventModal(true)
//     },
//     onError: err => {
//       console.error('Error creating event:', err.message)
//     },
//   });

//   // Submit the form
//   const handleCreateEvent = () => {
//     const eventData = {
//       event_name: betName,
//       due_date: dueDate,
//       bet_type: betType,
//       win_condition: winningCondition,
//       refund_condition: refundCondition,
//       amount: amount,
//       currency: paymentMethod === 'Naira' ? 'ngn' : 'usd',
//     }
//     mutate(eventData)
//   }

//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//   }

//   const handleCloseSuccessModal = () => {
//     setIsSuccessEventModal(false)
//   }

//   return (
//     <section className='relative w-full'>
//       <div className='lg:w-full'>
//         <div className='w-[95%] mx-auto mt-14 smd:mt-14 lg:mt-8 xl:mt-4'>
//           <button
//             onClick={() => navigate('/admin/event')}
//             className='flex items-center gap-2 text-[34px] py-10 xl:py-5 text-[#1D1D1D] leading-[28px] font-semibold'
//           >
//             <FaArrowLeftLong className='text-2xl text-black hover:text-black' />
//             Create New Event
//           </button>
//         </div>
//       </div>

//       <div className='flex flex-col items-center justify-center'>
//         <div className='w-[95%] mx-auto mb-10'>
//           {/* Form Fields Section */}
//           <div className='grid grid-cols-2 gap-6 mb-6 w-[80%]'>
//             {/* Bet Name */}
//             <div>
//               <label className='block pt-6 pb-2 font-medium'>Bet Name</label>
//               <input
//                 type='text'
//                 value={betName}
//                 onChange={e => setBetName(e.target.value)}
//                 placeholder='Enter Event Name'
//                 className='w-full px-4 py-2 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500'
//               />
//             </div>

//             {/* Bet Type Dropdown */}
//             <div>
//               <label className='block pt-6 pb-2 font-medium'>Bet Type</label>
//               {betType ? (
//                 <select
//                   value={betType}
//                   onChange={e => setBetType(e.target.value)}
//                   className='w-full px-4 py-2 text-gray-400 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500'
//                 >
//                   <option value='' disabled>
//                     Select a bet type
//                   </option>
//                   {betTypes.map(type => (
//                     <option key={type.id} value={type.name}>
//                       {type.name}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <select
//                   disabled
//                   className='w-full px-4 py-2 text-gray-400 border-2 border-gray-200 rounded-lg bg-gray-100 cursor-not-allowed'
//                 >
//                   <option>Loading bet types...</option>
//                 </select>
//               )}
//             </div>

//             {/* Bet Category */}
//             <div>
//               <label className='block py-2 font-medium'>Bet Category</label>
//               <select
//                 value={betCategory}
//                 onChange={e => setBetCategory(e.target.value)}
//                 className='w-full px-4 py-2 text-gray-400 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500'
//               >
//                 <option className='text-sm'>Sports</option>
//                 <option className='text-sm'>Politics</option>
//               </select>
//             </div>

//             {/* Amount Input */}
//             <div>
//               <label className='block py-2 font-medium'>Amount</label>
//               <input
//                 type='text'
//                 value={amount}
//                 onChange={e => setAmount(e.target.value)}
//                 placeholder='Write amount here'
//                 className='w-full px-4 py-2 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500'
//               />
//             </div>

//             {/* Payment Method Dropdown */}
//             <div>
//               <label className='block font-medium'>Payment Method</label>
//               <select
//                 value={paymentMethod}
//                 onChange={e => setPaymentMethod(e.target.value)}
//                 className='w-full px-4 py-2 border-2 border-gray-200 text-gray-400 text-sm rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500'
//               >
//                 <option className='text-sm'>Crypto</option>
//                 <option className='text-sm'>Naira</option>
//               </select>
//             </div>

//             {/* Due Date Input */}
//             <div>
//               <label className='block font-medium'>Due Date</label>
//               <input
//                 type='date'
//                 value={dueDate}
//                 onChange={e => setDueDate(e.target.value)}
//                 className='w-full px-4 py-2 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500'
//               />
//             </div>

//             {/* Condition for Winning */}
//             <div>
//               <label className='block font-medium'>Condition for winning</label>
//               <textarea
//                 value={winningCondition}
//                 onChange={e => setWinningCondition(e.target.value)}
//                 placeholder='Write bet condition here'
//                 className='w-full px-4 pt-2 pb-20 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500'
//               ></textarea>
//             </div>

//             {/* Condition for Refund */}
//             <div>
//               <label className='block font-medium'>Condition for refund</label>
//               <textarea
//                 value={refundCondition}
//                 onChange={e => setRefundCondition(e.target.value)}
//                 placeholder='Write condition for refund here'
//                 className='w-full px-4 pt-2 pb-20 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500'
//               ></textarea>
//             </div>
//           </div>

//           {/* Action Button */}
//           <div className='flex justify-end w-[80%]'>
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className='bg-light-blue-500 text-sm text-white px-10 py-3 rounded-lg hover:shadow-md'
//             >
//               Save Event
//             </button>
//           </div>
//         </div>

//         {/* Confirmation Modal */}
//         {isModalOpen && (
//           <EventModal onClose={handleCloseModal} onCreate={handleCreateEvent} />
//         )}

//         {isSuccessEventModal && (
//           <SuccessEventModal onClose={handleCloseSuccessModal} />
//         )}
//       </div>
//       <div className='mt-96'>
//         <Footer />
//       </div>
//     </section>
//   )
// }

// export default CreateNewEvent

