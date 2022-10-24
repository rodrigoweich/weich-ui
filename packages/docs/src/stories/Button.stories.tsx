import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@w-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send Message',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
}

export const WithIconAtTheBeginning: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <ArrowRight weight="bold" />
        Next Step
      </>
    ),
  },
}

export const WithIconAtTheEnd: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const DisabledWithIconAtTheEnd: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
    disabled: true,
  },
}
