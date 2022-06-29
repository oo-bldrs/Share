import React from 'react'
import Dialog from './Dialog'
import {AddCircle, Announcement, ArrowBack, ArrowForward, Check, Help} from '@mui/icons-material'
import {useArgs} from '@storybook/addons'


export default {
  title: 'BLDRS UI/Dialogs/Dialog',
  component: Dialog,
  argTypes: {
    icon: {
      options: ['add', 'announcement', 'back', 'check', 'forward', 'help'],
      mapping: {
        add: <AddCircle/>,
        announcement: <Announcement />,
        back: <ArrowBack/>,
        check: <Check/>,
        forward: <ArrowForward/>,
        help: <Help/>,
      },
      control: {
        type: 'select',
      },
      defaultValue: 'announcement',
    },
  },
  args: {
    headerText: 'Header',
    isDialogDisplayed: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

const Template = (args) => {
  const [{isDialogDisplayed}, updateArgs] = useArgs()
  const setIsDialogDisplayed = (v) => updateArgs({isDialogDisplayed: v})

  return (
    <Dialog
      {...args}
      isDialogDisplayed={isDialogDisplayed}
      setIsDialogDisplayed={setIsDialogDisplayed}
      content={'Dialog content is rendered here.'}
    />
  )
}

export const ADialog = Template.bind({})
