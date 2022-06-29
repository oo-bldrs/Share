import React from 'react'
import Alert from './Alert'


export default {
  title: 'BLDRS UI/Dialogs/Alert',
  component: Alert,
  args: {
    title: 'Oops!',
    message: 'Something went wrong.',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

const Template = (args) => {
  return (
    <Alert
      {...args}
      onCloseCb={() => {}}
    />
  )
}

export const Dialog = Template.bind({})
