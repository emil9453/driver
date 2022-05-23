import { UseFormRegisterReturn } from 'react-hook-form'
export type SelectBoxProps = {
  formProps: UseFormRegisterReturn
  defaultValue?: string
  options: string[]
  isInvalid?: boolean
}
