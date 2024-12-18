import ResetVerificationEmail from './ResetVerificationEmail.jsx'
import ResetOtpCode from './ResetOtpCode.jsx'
import ResetNewLogin from './ResetNewLogin.jsx'
import ResetVerificationSuccess from './ResetVerificationSuccess.jsx'
import { useState } from 'react'

const ResetPassword = () => {
  const [phase, setPhase] = useState(1)
  const [email, setEmail] = useState('')

  const navigate = () => {
    setPhase(x => x + 1)
  }

  return (
    <>
      {phase === 1 && (
        <ResetVerificationEmail navigate={navigate} setEmail={setEmail} />
      )}
      {phase === 2 && <ResetOtpCode navigate={navigate} email={email} />}
      {phase === 3 && <ResetNewLogin navigate={navigate} />}
      {phase === 4 && <ResetVerificationSuccess />}
    </>
  )
}

export default ResetPassword
