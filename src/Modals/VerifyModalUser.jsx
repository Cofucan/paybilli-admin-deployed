// const VerifyModalUser = ({ user, onClose }) => {
//     const handleVerify = () => {
//       console.log(`Verifying user: ${user.name}`);
//       // Add your verification logic here (e.g., API call to verify user)
//       onClose(); // Close the modal after verification
//     };

//     return (
//       <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
//         <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4">
//             Verify {user.name}?
//           </h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Are you sure you want to verify {user.name} ({user.email})?
//           </p>
//           <div className="flex justify-end space-x-4">
//             <button
//               className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:shadow-md"
//               onClick={handleVerify}
//             >
//               Verify User
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default VerifyModalUser;
