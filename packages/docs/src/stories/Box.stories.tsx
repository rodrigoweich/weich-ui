import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@w-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text css={{ color: '$black' }}>This is a text.</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const WithLightThemeSimulation: StoryObj<BoxProps> = {
  args: {
    children: (
      <Text css={{ color: '$black' }}>This is a text inside a box.</Text>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: '$white',
          }}
        >
          <Text css={{ color: '$black' }}>
            This is an example of a webpage with a clear theme and inside, a box
            component...
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
}

export const WithDarkThemeSimulation: StoryObj<BoxProps> = {
  args: {
    children: <Text>This is a text inside a box.</Text>,
    css: {
      backgroundColor: '$gray-800',
      color: '$white',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: '$gray-900',
          }}
        >
          <Text css={{ color: '$white' }}>
            This is an example of a webpage with a clear theme and inside, a box
            component...
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
}
