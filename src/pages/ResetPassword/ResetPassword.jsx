import ResetVerificationEmail from './ResetVerificationEmail.jsx'
import ResetOtpCode from './ResetOtpCode.jsx'
import ResetNewLogin from './ResetNewLogin.jsx'
import ResetVerificationSuccess from './ResetVerificationSuccess.jsx'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

const ResetPassword = () => {
  const [page, setPage] = useState(1)
  const [email, setEmail] = useState('')
  const { authData } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (authData)
      navigate('/', { replace: true })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nextPage = () => {
    setPage(x => x + 1)
  }

  return (
    <>
      {page === 1 && (
        <ResetVerificationEmail navigate={nextPage} setEmail={setEmail} />
      )}
      {page === 2 && <ResetOtpCode navigate={nextPage} email={email} />}
      {page === 3 && <ResetNewLogin navigate={nextPage} />}
      {page === 4 && <ResetVerificationSuccess />}
    </>
  )
}

export default ResetPassword
