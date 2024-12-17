import ResetVerificationEmail from "./ResetVerificationEmail.jsx";
import ResetOtpCode from "./ResetOtpCode.jsx";
import ResetNewLogin from "./ResetNewLogin.jsx";
import ResetVerificationSuccess from "./ResetVerificationSuccess.jsx";
import {useState} from "react";

const ResetPassword = () => {
  const [phase, setPhase] = useState(1);

  const navigate = () => {
    setPhase((x) => x + 1);
  };

  return (
    <>
      {phase === 1 && <ResetVerificationEmail navigate={navigate} />}
      {phase === 2 && <ResetOtpCode navigate={navigate} />}
      {phase === 3 && <ResetNewLogin navigate={navigate} />}
      {phase === 4 && <ResetVerificationSuccess />}
    </>
  );
};

export default ResetPassword;
