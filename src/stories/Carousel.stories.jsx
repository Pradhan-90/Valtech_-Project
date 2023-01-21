import React from 'react';

import AntCarousel  from './Carousel';

export default {
    title: 'Example/Carousel',
    component: AntCarousel,
    argTypes: {
      title: { control: 'text' },
    },
  };

const Template = (args) => <AntCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Button',
};