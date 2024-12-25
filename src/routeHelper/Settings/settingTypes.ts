import { Dispatch, SetStateAction } from "react"
import { CustomFormHook } from "../../components/form/useCustomForm"
import { FieldValues } from "react-hook-form"

export interface SettingModalFormProps<T extends FieldValues> {
    form: CustomFormHook<T>
    isModalVisible: boolean, 
    setIsModalVisible: Dispatch<SetStateAction<boolean>>
    onSubmit: (data: T) => void | Promise<void>
}