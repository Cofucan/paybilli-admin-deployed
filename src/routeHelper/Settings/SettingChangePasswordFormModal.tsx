import { FC } from "react";
import FormField from "../../components/form/FormField";
import Modal from "../../components/modal/Modal";
import { AccountChangePasswordRequest } from "../../hooks/useAccount";
import { SettingModalFormProps } from "./settingTypes";

const SettingChangePasswordFormModal: FC<SettingModalFormProps<AccountChangePasswordRequest>> = ({
  form,
  isModalVisible,
  setIsModalVisible,
  onSubmit,
}) => {
  const onPasswordChange = form.handleSubmit(async (data) => {
    // TODO: Use Query Mutation
    setIsModalVisible(false);
    await onSubmit(data);
  });

  const onPasswordChangeReset = () => {
    setIsModalVisible(false);
    form.reset();
  };

  function toggleModalVisible(): void | Promise<void> {
    setIsModalVisible((x) => !x);
  }

  return (
    <Modal
      isVisible={isModalVisible}
      toggleVisibility={toggleModalVisible}
      title={<h2 className='text-2xl font-bold'>Password Settings</h2>}
      showClose={false}
    >
      <p className='text-gray-500'>Update password for enhanced account Security</p>
      <form
        onSubmit={onPasswordChange}
        onReset={onPasswordChangeReset}
        className='my-5 min-w-96 space-y-5'
      >
        <FormField>
          <span>Current Password</span>
          <FormField.Input
            type='password'
            intent={"admin"}
            placeholder='*******'
            {...form.register(
              "old_password",
              form.formErrorHelper("Current Password", {
                isRequired: true,
                minLength: 6,
                maxLength: 50,
              }),
            )}
            aria-invalid={form.formState.errors.old_password ? "true" : "false"}
          />
          <FormField.ErrorText error={form.formState.errors.old_password} />
        </FormField>
        <FormField intent={"admin"}>
          <span>New Password</span>
          <FormField.Input
            type={"password"}
            intent={"admin"}
            {...form.register(
              "new_password",
              form.formErrorHelper("New Password", {
                isRequired: true,
                minLength: 6,
                maxLength: 50,
              }),
            )}
            aria-invalid={form.formState.errors.new_password ? "true" : "false"}
          />
          <FormField.ErrorText error={form.formState.errors.new_password} />
        </FormField>

        {/*retype password */}
        <FormField intent={"admin"}>
          <span>Confirm Password</span>
          <FormField.Input
            type={"password"}
            intent={"admin"}
            {...form.register(
              "confirm_new_password",
              form.formErrorHelper("Confirm Password", {
                validate: (value, formValues) => value === formValues.new_password,
              }),
            )}
            aria-invalid={form.formState.errors.confirm_new_password ? "true" : "false"}
          />
          <FormField.ErrorText error={form.formState.errors.confirm_new_password} />
        </FormField>
        <div className='flex items-center justify-between'>
          <FormField.Button
            intent={"admin"}
            themeSize={"3"}
            themeColor={"rounded-grey"}
            type='reset'
          >
            Cancel
          </FormField.Button>
          <FormField.Button intent={"admin"} themeSize={"3"} themeColor={"full-blue"}>
            Update Password
          </FormField.Button>
        </div>
      </form>
    </Modal>
  );
};

export default SettingChangePasswordFormModal;
