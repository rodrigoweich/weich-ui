import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray-900',
  padding: '$2 $3',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray-900',

  fontFamily: '$sans',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$normal',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$primary-base',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray-400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
