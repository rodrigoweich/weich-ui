import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$sans',
  lineHeight: '$4',
  margin: '$4',
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

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
