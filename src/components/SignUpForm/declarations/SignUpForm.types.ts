export type SignUpFormProps = {
  cities: string[]
  phonePrefixes: string[]
}

export type SignUpFormValues = { 
    email: string
    city: string
    phonePrefix: string
    phone: string
    termsAndConditions: boolean
}