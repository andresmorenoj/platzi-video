import React from 'react'
import {Footer} from './Footer'

export default {
  title: 'Footer/Info',
  component: Footer
}

const Template = (args) => <Footer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  terms: 'Terms of use',
  declaration: 'Privacity declaration',
  help: 'Help center',
}