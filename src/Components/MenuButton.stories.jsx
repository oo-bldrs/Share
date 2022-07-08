import React from 'react'
import MenuButton from './MenuButton'


export default {
  title: 'BLDRS UI/Buttons/MenuButton',
  component: MenuButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

const Template = () => {
  return (
    <MenuButton
      onClick={() => {}}
    />
  )
}

export const Button = Template.bind({})
