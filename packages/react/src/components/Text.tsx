import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$sans',
  lineHeight: '$normal',
  margin: '$0',
  color: '$white',

  variants: {
    size: {
      xs: { fontSize: '0.75rem' },
      sm: { fontSize: '0.875rem' },
      base: { fontSize: '1rem' },
      lg: { fontSize: '1.125rem' },
      xl: { fontSize: '1.25rem' },
    },
  },

  defaultVariants: {
    size: 'base',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
