import { Meta, StoryFn } from '@storybook/react';
import { ContactListItem, ContactListItemProps } from '../components/ContactListItem/ContactListItem';

export default { title: 'ContactListItem', component: ContactListItem } as Meta;

const Template: StoryFn<ContactListItemProps> = (args) => <ContactListItem {...args}/>;

export const Default = Template.bind({});

Default.args = { name: 'Jane Doe', email: 'jane@example.com', avatarUrl: '' };