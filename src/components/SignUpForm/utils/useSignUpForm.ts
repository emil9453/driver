import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { SignUpFormValues } from '../declarations/SignUpForm.types'
import { validationSchema } from './validation'
export const useSignUpForm = () => {
  const onSubmit = (values: unknown) => {
    console.log('Values:::', values)
  }

  const onError = (error: unknown) => {
    console.log('ERROR:::', error, getValues())
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(validationSchema)
  })

  return {
    register,
    emailError: errors?.email?.message,
    phoneError: errors?.phone?.message,
    phonePrefixError: errors?.phonePrefix?.message,
    termsAndConditionsError: errors?.termsAndConditions?.message,
    cityError: errors?.city?.message,
    onSubmit: handleSubmit(onSubmit, onError)
  }
}
