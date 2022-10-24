import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray-900',
  padding: '$2 $3',
  borderRadius: '$md',
  boxSizing: 'border-box',
  border: '2px solid $gray-900',
  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$primary-base',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$sans',
  fontSize: '$sm',
  color: '$gray-400',
  fontWeight: '$medium',
})

export const Icon = styled('span', {
  fontFamily: '$sans',
  fontSize: '$sm',
  color: '$white',
  marginRight: '$3',
  display: 'flex',
  justifyContent: 'center',
  paddingRight: '$3',
  borderRight: '0.5px solid $white',

  '& svg': {
    width: '$5 !important',
    height: '$5 !important',
  },
})

export const Input = styled('input', {
  fontFamily: '$sans',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray-400',
  },
})
