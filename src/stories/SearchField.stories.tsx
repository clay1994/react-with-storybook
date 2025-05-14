import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SearchField, SearchFieldProps } from '../components/SearchField/SearchField';

export default { title: 'SearchField', component: SearchField } as Meta;

const Template: StoryFn<SearchFieldProps> = (args) => { 
    const [value, setValue] = useState(''); 
    return <SearchField {...args} value={value} onChange={setValue}/>; 
};

export const Default = Template.bind({});

Default.args = { placeholder: 'Search contacts...' };