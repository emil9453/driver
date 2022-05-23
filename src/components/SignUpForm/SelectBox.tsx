import React, { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { SelectCallback } from 'react-bootstrap/esm/helpers'
import { SelectBoxProps } from './declarations/SelecBox.types'
import styles from './styles/SelectBox.module.css'

export const SelectBox = ({ formProps, defaultValue, options, isInvalid }: SelectBoxProps) => {
  const [value, setValue] = useState<string>(defaultValue ?? options[0])

  const handleSelect: SelectCallback = selected => {
    if (selected) setValue(selected)
  }
  return (
    <>
      <input type="hidden" value={value} {...formProps} />
      <DropdownButton title={value} className={`${styles.field} ${isInvalid ? styles.isInvalid : ''}`} onSelect={handleSelect} size="lg" variant="default">
        {options.map(option => (
          <Dropdown.Item eventKey={option} key={option} active={option === value}>
            {option}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  )
}
