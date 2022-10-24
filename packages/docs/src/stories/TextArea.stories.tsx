import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@w-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm" css={{ color: '$black' }}>
            Observations
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
    disabled: true,
  },
}
