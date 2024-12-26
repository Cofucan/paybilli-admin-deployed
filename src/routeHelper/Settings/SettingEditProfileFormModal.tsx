import { FC } from "react";
import FormField from "../../components/form/FormField";
import Modal from "../../components/modal/Modal";
import { SettingModalFormProps } from "./settingTypes";
import { User } from "../../utils/types";

const SettingEditProfileFormModal: FC<SettingModalFormProps<User>> = ({
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
      title={<h2 className="text-xl font-medium">Edit Profile</h2>}
      showClose={false}
    >
      <form
        onSubmit={onEditProfile}
        onReset={onEditProfileReset}
        className="my-5 min-w-96 space-y-5"
      >
        <FormField intent={"admin"}>
          <span>First Name</span>
          <FormField.Input
            intent={"admin"}
            placeholder="Oke Chinedu"
            {...form.register(
              "first_name",
              form.formErrorHelper("First Name", {
                isRequired: true,
                minLength: 3,
              }),
            )}
            aria-invalid={form.formState.errors.first_name ? "true" : "false"}
          />
          <FormField.ErrorText error={form.formState.errors.first_name} />
        </FormField>
        <FormField intent={"admin"}>
          <span>Last Name</span>
          <FormField.Input
            intent={"admin"}
            placeholder="Oke Chinedu"
            {...form.register(
              "last_name",
              form.formErrorHelper("Last Name", {
                isRequired: true,
                minLength: 3,
              }),
            )}
            aria-invalid={form.formState.errors.last_name ? "true" : "false"}
          />
          <FormField.ErrorText error={form.formState.errors.last_name} />
        </FormField>
        <FormField intent={"admin"}>
          <span>Username</span>
          <FormField.Input intent={"admin"} placeholder="Oke chinozy" {...form.register(
            "username",
            form.formErrorHelper("Username", {
              isRequired: true,
              minLength: 3,
            }),
          )}
                           aria-invalid={form.formState.errors.username ? "true" : "false"} />
          <FormField.ErrorText
            error={form.formState.errors.username}

          />
        </FormField>
        <FormField intent={"admin"}>
          <span>Phone number</span>
          <FormField.Input intent={"admin"} type="number" placeholder="08032324356" {...form.register(
            "phone_number",
            form.formErrorHelper("Phone Number", {
              isRequired: true,
            }),
          )}
                           aria-invalid={form.formState.errors.phone_number ? "true" : "false"} />
          <FormField.ErrorText error={form.formState.errors.phone_number} />
        </FormField>
        <div className="flex items-center justify-between">
          <FormField.Button
            intent={"admin"}
            themeSize={"3"}
            themeColor={"rounded-grey"}
            type="reset"
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
