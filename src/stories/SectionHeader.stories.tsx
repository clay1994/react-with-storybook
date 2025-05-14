import { Meta, StoryFn } from '@storybook/react';
import { SectionHeader, SectionHeaderProps } from '../components/SectionHeader/SectionHeader';

export default { title: 'SectionHeader', component: SectionHeader } as Meta;

const Template: StoryFn<SectionHeaderProps> = (args) => <SectionHeader {...args}/>;

export const Default = Template.bind({});

Default.args = { title: 'Attended' };