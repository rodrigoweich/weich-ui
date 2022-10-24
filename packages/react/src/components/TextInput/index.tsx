import { ComponentProps } from 'react'
import { Icon, Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  icon?: SVGElement | any
}

export function TextInput({ prefix, icon, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!icon && <Icon>{icon}</Icon>}
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
