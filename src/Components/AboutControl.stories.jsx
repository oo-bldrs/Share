import React from 'react'
import AboutControl from './AboutControl'


export default {
  title: 'BLDRS UI/Buttons/AboutControl',
  component: AboutControl,
  args: {
    installPrefix: '/',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

const Template = (args) => <AboutControl {...args} />

export const Button = Template.bind({})
