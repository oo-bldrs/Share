import React from 'react'
import Logo from './Logo'


export default {
  title: 'BLDRS UI/Overlays/Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

const Template = () => {
  return (
    <Logo
      onClick={() => {}}
    />
  )
}

export const Overlay = Template.bind({})
