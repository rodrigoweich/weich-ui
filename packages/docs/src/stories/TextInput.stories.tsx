import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@w-ui/react'
import { EnvelopeSimple } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm" css={{ color: '$black' }}>
            Email address
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter your email address here...',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter your email address here...',
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter your email address here...',
    prefix: 'cal.com/',
  },
}

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter your email address here...',
    icon: <EnvelopeSimple weight="bold" />,
  },
}
