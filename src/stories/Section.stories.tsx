import { Meta, StoryFn } from '@storybook/react';
import { Section, SectionProps } from '../components/Section/Section';

export default { title: 'Section', component: Section } as Meta;

const Template: StoryFn<SectionProps> = (args) => <Section {...args}>{args.children}</Section>;

export const Default = Template.bind({});

Default.args = { children: <p>Section content here</p> };