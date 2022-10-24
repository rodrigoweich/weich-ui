import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@weich-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: 'Some title...',
    description:
      'Some content... Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in aliquid nesciunt nostrum voluptatem. Neque rem incidunt tempore nam quas sapiente consectetur nihil aspernatur accusantium quos, officia dignissimos vel illo.',
    duration: 9999,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
