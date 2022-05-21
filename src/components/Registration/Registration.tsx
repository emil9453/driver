import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { RegistrationProps } from './declarations/Registration.types'
import styles from './styles/Registration.module.css'
import { validationSchema } from './utils/validation'

export const Registration = ({ cities }: RegistrationProps) => {
  const onSubmit = (values: unknown) => {
    console.log('Values:::', values)
  }

  const onError = (error: unknown) => {
    console.log('ERROR:::', error)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema)
  })

  return (
    <Container className={styles.container}>
      <p className={styles.title}>
        <strong>Become a Bolt driver</strong>
      </p>
      <p className={styles.subtitle}>
        If you have multiple cars or drivers{' '}
        <a className={styles.link} href="#">
          sign up as a fleet owner
        </a>
      </p>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter" {...register('email')} />
          {errors?.email && <Form.Text className="text-danger">{errors?.email?.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" placeholder="Phone number" {...register('phone')} />
          {errors?.phone && <Form.Text className="text-danger">{errors?.phone?.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" {...register('city')} />
          {errors?.city && <Form.Text className="text-danger">{errors?.city?.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label={
              <>
                I agree to Bolt's{' '}
                <a className={styles.link} href="#">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a className={styles.link} href="#">
                  Privacy Policy
                </a>
              </>
            }
            {...register('termsAndConditions')}
          />
          {errors?.termsAndConditions && (
            <Form.Text className="text-danger">{errors?.termsAndConditions?.message}</Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
