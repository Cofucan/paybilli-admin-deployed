import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ResetVerificationEmail from "../../routeHelper/reset-password/ResetVerificationEmail.tsx";
import ResetOtpCode from "../../routeHelper/reset-password/ResetOtpCode.tsx";
import ResetNewLogin from "../../routeHelper/reset-password/ResetNewLogin.tsx";
import ResetVerificationSuccess from "../../routeHelper/reset-password/ResetVerificationSuccess.tsx";

export const Route = createFileRoute("/account/_noAuth/reset-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");

  const nextPage = () => {
    setPage((x) => x + 1);
  };

  return (
    <>
      {page === 1 && <ResetVerificationEmail navigate={nextPage} setEmail={setEmail} />}
      {page === 2 && <ResetOtpCode navigate={nextPage} email={email} />}
      {page === 3 && <ResetNewLogin navigate={nextPage} />}
      {page === 4 && <ResetVerificationSuccess />}
    </>
  );
}
