import React from 'react';
import { bool } from 'prop-types';

import { Body } from './Body';
import { Display } from './Display';
import { Headline } from './Headline';
import { Title } from './Title';
import { Info } from './Info';

export default {
  title: 'Components/Typography',
  component: Body,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = args => (
  <>
    <Display mb={4}>
      {args.children || `Display D/4rem(64px) M/3rem(48px)`}
    </Display>
    <Headline mb={4}>
      {args.children || `Headline D/2rem(32px) M/1.5rem(24px)`}
    </Headline>
    <Title mb={4}>
      {args.children || `Title D/1.5rem(24px) M/1.5rem(24px)`}
    </Title>
    <Body mb={4}>
      {args.children || `Body D/1.25rem(20px) M/1.25rem(20px)`}
    </Body>
    <Info mb={4}>
      {args.children || `Info D/0.875rem(14px) M/0.875rem(14px)`}
    </Info>
  </>
);

export const TypeRamp = Template.bind({});
