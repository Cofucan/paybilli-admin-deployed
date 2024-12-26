import { createFileRoute, useNavigate } from "@tanstack/react-router";
import SubPageHeader from "../../../components/custom-buttons/SubPageHeader";
import FormField from "../../../components/form/FormField";
import { useCoreGetCommonQuery } from "../../../hooks/useCoreQuery";
import { useEventsCreate } from "../../../hooks/useEventQuery";
import useCustomForm from "../../../components/form/useCustomForm";

export const Route = createFileRoute("/_auth/event/create")({
  component: RouteComponent,
});
interface CreateForm {
  event_name: string;
  event_type: string;
  amount: number;
  currency: string;
  due_date: string;
}
function RouteComponent() {
  // Get User from Get User Query
  const commonQuery = useCoreGetCommonQuery();
  console.log(commonQuery.data?.event_types ?? []);
  

  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
    reset,
    formErrorHelper,
  } = useCustomForm<CreateForm>();
  const navigate = useNavigate();
  const mutate = useEventsCreate();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await mutate.mutateAsync({
      event_name: data.event_name,
      due_date: data.due_date,
      event_type: data.event_type,
      amount: data.amount,
      currency: data.currency,
    });
    await navigate({ to: "/events" });
  });

  async function onReset(): Promise<void> {
    reset();
    await navigate({ to: "/events" });
  }
  return (
    <main className='m-8 mr-64'>
      <SubPageHeader to='/events' title='Create New Event' />
      <form className='mt-6 grid grid-cols-2 gap-6' onSubmit={onSubmit} onReset={onReset}>
        <FormField intent={"admin"}>
          <span className='font-medium'>Bet Name</span>
          <FormField.Input
            intent={"admin"}
            placeholder='Enter Event Name'
            {...register("event_name", formErrorHelper("Bet Name", { isRequired: true, minLength: 3 }))}
            aria-invalid={errors.event_name ? "true" : "false"}
          />
          <FormField.ErrorText error={errors.event_name} />
        </FormField>
        <FormField intent={"admin"}>
          <span className='font-medium'>Bet Type </span>
          <FormField.Select
            intent={"admin"}
            options={(commonQuery.data?.event_types ?? []).map((x) => ({
              title: x.name,
              value: x.name,
            }))}
            {...register("event_type", formErrorHelper("Bet Type", { isRequired: true }))}
            aria-invalid={errors.event_type ? "true" : "false"} disabled={commonQuery.isLoading}
          />
          <FormField.ErrorText error={errors.event_type} />
        </FormField>
        <FormField intent={"admin"}>
          <span className='font-medium'>Amount</span>
          <FormField.Input
            intent={"admin"}
            placeholder='Write Amount here'
            type='number'
            min={0}
            {...register("amount", formErrorHelper("Amount", { isRequired: true, min: 1 }))}
            aria-invalid={errors.amount ? "true" : "false"}
          />
          <FormField.ErrorText error={errors.amount} />
        </FormField>
        <FormField intent={"admin"}>
          <span className='font-medium'>Payment Method </span>
          <FormField.Select
            intent={"admin"}
            options={[
              { value: "ngn", title: "Naira" },
              { value: "usd", title: "Dollars" },
            ]}
            {...register("currency", formErrorHelper("Currency", { isRequired: true }))}
            aria-invalid={errors.currency ? "true" : "false"}
          />
          <FormField.ErrorText error={errors.currency} />
        </FormField>
        <FormField intent={"admin"}>
          <span className='font-medium'>Due Date</span>
          <FormField.Input
            intent={"admin"}
            type='date'
            min={new Date().toISOString().split("T")[0]}
            {...register("due_date", formErrorHelper("Due Date", { isRequired: true }))}
            aria-invalid={errors.due_date ? "true" : "false"}
          />
          <FormField.ErrorText error={errors.due_date} />
        </FormField>

        {/* TODO: Remove Later */}
        <div></div>
        {/* Action Buttons */}

        {/* Cancel Button */}
        <FormField.Button
          type='reset'
          intent={"admin"}
          themeColor={"rounded-grey"}
          themeSize={"3"}
          className='w-max bg-white'
        >
          Cancel
        </FormField.Button>

        {/* Save Changes Button */}
        <FormField.Button
          isSubmitted={isSubmitting}
          intent={"admin"}
          themeColor={"full-blue"}
          themeSize={"36"}
          className='max-w-max justify-self-end'
        >
          Save Changes
        </FormField.Button>
      </form>
    </main>
  );
}
