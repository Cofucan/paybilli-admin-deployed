import { FC } from "react";
import FormField from "../../components/form/FormField";
import Modal from "../../components/modal/Modal";
import { SettingModalFormProps } from "./settingTypes";
export interface SettingEditProfileForm {
  name: string;
  username: string;
  email: string;
  number: string;
}
const SettingEditProfileFormModal: FC<SettingModalFormProps<SettingEditProfileForm>> = ({
  form,
  isModalVisible,
  setIsModalVisible,
  onSubmit,
}) => {
  const onEditProfile = form.handleSubmit(async (data) => {
    // TODO: Use Query Mutation
    setIsModalVisible(false);
    await onSubmit(data);
  });

  const onEditProfileReset = () => {
    setIsModalVisible(false);
    form.reset();
  };

  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Modal
      isVisible={isModalVisible}
      toggleVisibility={toggleModalVisible}
      title={<h2 className='text-xl font-medium'>Edit Profile</h2>}
      showClose={false}
    >
      <form
        onSubmit={onEditProfile}
        onReset={onEditProfileReset}
        className='my-5 min-w-96 space-y-5'
      >
        <FormField intent={"admin"}>
          <span>Full Name</span>
          <FormField.Input
            intent={"admin"}
            placeholder='Oke Chinedu'
            {...form.register(
              "name",
              form.formErrorHelper("Full Name", {
                isRequired: true,
                minLength: 3,
              }),
            )}
            aria-invalid={form.formState.errors.username ? "true" : "false"}
          />
          <FormField.ErrorText error={form.formState.errors.name} />
        </FormField>
        <FormField intent={"admin"}>
          <span>Username</span>
          <FormField.Input intent={"admin"} placeholder='Oke chinozy' />
          <FormField.ErrorText
            error={form.formState.errors.username}
            {...form.register(
              "username",
              form.formErrorHelper("Username", {
                isRequired: true,
                minLength: 3,
              }),
            )}
            aria-invalid={form.formState.errors.username ? "true" : "false"}
          />
        </FormField>
        <FormField intent={"admin"}>
          <span>Your email address</span>
          <FormField.Input intent={"admin"} type='email' placeholder='okechinedu@gmail.com' />
          <FormField.ErrorText
            error={form.formState.errors.email}
            {...form.register(
              "email",
              form.formErrorHelper("Email", {
                isRequired: true,
              }),
            )}
            aria-invalid={form.formState.errors.email ? "true" : "false"}
          />
        </FormField>
        <FormField intent={"admin"}>
          <span>Phone number</span>
          <FormField.Input intent={"admin"} type='number' placeholder='08032324356' />
          <FormField.ErrorText error={form.formState.errors.number} />
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
            Update Profile
          </FormField.Button>
        </div>
      </form>
      {/* Add the form content for editing profile */}
    </Modal>
  );
};

export default SettingEditProfileFormModal;
