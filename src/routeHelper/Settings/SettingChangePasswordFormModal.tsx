import { FC } from "react";
import FormField from "../../components/form/FormField";
import { SettingModalFormProps } from "./settingTypes";
import Modal from "../../components/modal/Modal";

export interface SettingChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const SettingChangePasswordFormModal: FC<SettingModalFormProps<SettingChangePasswordForm>> = ({
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
              "currentPassword",
              form.formErrorHelper("Current Password", {
                isRequired: true,
                minLength: 6,
                maxLength: 50,
              }),
            )}
            aria-invalid={form.formState.errors.currentPassword ? "true" : "false"}
          />
          <FormField.ErrorText error={form.formState.errors.currentPassword} />
        </FormField>
        <FormField intent={"admin"}>
          <span>New Password</span>
          <FormField.Input
            type={"password"}
            intent={"admin"}
            {...form.register(
              "newPassword",
              form.formErrorHelper("New Password", {
                isRequired: true,
                minLength: 6,
                maxLength: 50,
              }),
            )}
            aria-invalid={form.formState.errors.newPassword ? "true" : "false"}
          />
          <FormField.ErrorText error={form.formState.errors.newPassword} />
        </FormField>

        {/*retype password */}
        <FormField intent={"admin"}>
          <span>Confirm Password</span>
          <FormField.Input
            type={"password"}
            intent={"admin"}
            {...form.register(
              "confirmPassword",
              form.formErrorHelper("Confirm Password", {
                validate: (value, formValues) => value === formValues.newPassword,
              }),
            )}
            aria-invalid={form.formState.errors.confirmPassword ? "true" : "false"}
          />
          <FormField.ErrorText error={form.formState.errors.confirmPassword} />
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
