import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Box = styled('div', {
  padding: '1rem',
  borderRadius: '0.375rem',
  backgroundColor: '$gray-100',
  border: '1px solid $gray-400',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
