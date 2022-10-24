import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastAction,
  ToastRoot,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastProvider> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider swipeDirection="right" label={title}>
      <ToastRoot>
        <ToastTitle>
          <Heading css={{ color: '$black', margin: '$0' }}>{title}</Heading>
        </ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <X size={20} />
        </ToastAction>
        <ToastClose />
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}
