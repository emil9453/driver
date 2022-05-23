import React from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { SignUpFormProps } from './declarations/SignUpForm.types'
import { SelectBox } from './SelectBox'
import styles from './styles/SignUpForm.module.css'
import { useSignUpForm } from './utils/useSignUpForm'

export const SignUpForm = ({ cities, phonePrefixes }: SignUpFormProps) => {
  const {
    onSubmit,
    emailError,
    cityError,
    phoneError,
    phonePrefixError,
    termsAndConditionsError,
    register
  } = useSignUpForm()

  return (
    <Container className={styles.container}>
      <p className={styles.title}>
        <strong>Become a Bolt driver</strong>
      </p>
      <p className={styles.subtitle}>
        If you have multiple cars or drivers{' '}
        <a className={styles.link} href="#/">
          sign up as a fleet owner
        </a>
      </p>
      <Form onSubmit={onSubmit}>
        <Form.Group className={emailError ? 'mb-2' : 'mb-4'}>
          <Form.Label className="font-weight-bold">Email</Form.Label>
          <Form.Control isInvalid={!!emailError} size="lg" type="email" placeholder="Email" {...register('email')} />
          {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
        </Form.Group>

        <Form.Group className={phoneError ? 'mb-2' : 'mb-4'}>
          <Form.Label className="font-weight-bold">Phone number</Form.Label>
          <InputGroup className="sm-2">
            <SelectBox
              isInvalid={!!phoneError || !!phonePrefixError}
              formProps={register('phonePrefix')}
              options={phonePrefixes}
            />
            <Form.Control
              size="lg"
              type="text"
              placeholder="Phone"
              isInvalid={!!phoneError}
              {...register('phone')}
              className={styles.phoneField}
            />
          </InputGroup>
          {phoneError && <Form.Text className="text-danger">{phoneError}</Form.Text>}
        </Form.Group>

        <Form.Group className={cityError ? 'mb-2' : 'mb-4'} controlId="formGridState">
          <Form.Label className="font-weight-bold">City</Form.Label>
          <SelectBox isInvalid={!!cityError} formProps={register('city')} options={cities} />
          {cityError && <Form.Text className="text-danger">{cityError}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Check
            type="checkbox"
            className={styles.termsAndConditions}
            isInvalid={!!termsAndConditionsError}
            aria-label="Terms and conditions"
            label={
              <>
                I agree to Bolt's{' '}
                <a className={styles.link} href="#/">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a className={styles.link} href="#/">
                  Privacy Policy
                </a>
              </>
            }
            {...register('termsAndConditions')}
          />
        </Form.Group>

        <Button variant="success" type="submit" block className={`${styles.submit} rounded-pill`}>
          SIGN UP AS A DRIVE
        </Button>
      </Form>
    </Container>
  )
}
