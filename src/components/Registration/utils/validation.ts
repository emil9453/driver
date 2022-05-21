import * as yup from 'yup'
const phoneRegExp = /^\d{4,6}$/
export const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    phonePrefix: yup.number().required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    city: yup.string().required(),
    termsAndConditions: yup.boolean().oneOf([true], 'Must be Checked!')
  })
  .required()
