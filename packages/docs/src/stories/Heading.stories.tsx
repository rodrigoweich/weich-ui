import type { Meta, StoryObj } from '@storybook/react'
import { Box, Heading, HeadingProps } from '@w-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Some Heading',
    size: 'base',
    css: { color: '$black' },
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return <Box css={{ textAlign: 'center' }}>{Story()}</Box>
    },
  ],
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the heading will always be an `h2`, but we can change this with the `as` property.',
      },
    },
  },
}
