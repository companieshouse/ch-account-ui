import React from 'react'

import Button from './Button'

export default {
  title: 'GDS-Components/Button',
  component: Button,
  args: {
    children: 'Button text',
    href: 'http://example.com',
    onClick: () => null,
    type: 'submit',
    testId: 'button'
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true
}

export const Warning = Template.bind({})
Warning.args = {
  warning: true
}

export const HasStartIcon = Template.bind({})
HasStartIcon.args = {
  hasStartIcon: true
}

export const RenderAsLink = Template.bind({})
RenderAsLink.args = {
  renderAs: 'link'
}
