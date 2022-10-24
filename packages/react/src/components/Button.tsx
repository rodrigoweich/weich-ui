import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$base',
  fontWeight: '$medium',
  fontFamily: '$sans',
  textAlign: 'center',
  minWidth: '$10',
  boxSizing: 'border-box',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  svg: {
    width: '$4',
    height: '$4',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary-base',
        '&:not(:disabled):hover': {
          background: '$primary-light',
        },
        '&:disabled': {
          backgroundColor: '$gray-500',
        },
      },
      secondary: {
        color: '$primary-base',
        border: '2px solid $primary-base',
        '&:not(:disabled):hover': {
          background: '$primary-base',
          color: '$white',
        },
        '&:disabled': {
          color: '$gray-500',
          borderColor: '$gray-500',
        },
      },
      tertiary: {
        color: '$gray-200',
        '&:not(:disabled):hover': {
          color: '$primary-base',
        },
        '&:disabled': {
          color: '$gray-500',
        },
      },
    },
    size: {
      sm: {
        height: '$6',
      },
      md: {
        height: '$8',
      },
      lg: {
        height: '$10',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
