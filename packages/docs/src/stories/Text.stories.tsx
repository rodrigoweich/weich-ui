import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@weich-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'base',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quia praesentium sit repellendus fugit corporis porro maxime recusandae. Vel necessitatibus vero impedit doloribus provident exercitationem, illo at sapiente. Sequi, quae.',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [],
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
