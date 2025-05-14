import React, { useState } from 'react';
import {
  SearchField
} from './components/SearchField/SearchField';
import {
  ContactListItem
} from './components/ContactListItem/ContactListItem';
import {
  SectionHeader
} from './components/SectionHeader/SectionHeader';
import {
  Section
} from './components/Section/Section';

interface Contact {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
}

const mockContacts: Contact[] = [
  { id: 1, name: 'Dianne Russell', email: 'dianne@example.com', avatarUrl: 'https://www.w3schools.com/howto/img_avatar.png' },
  { id: 2, name: 'Ronald Richards', email: 'ronald@example.com', avatarUrl: 'https://www.w3schools.com/w3images/avatar2.png' },
  { id: 3, name: 'Arlene McCoy', email: 'arlene@example.com', avatarUrl: 'https://www.w3schools.com/w3images/avatar5.png' },
  { id: 4, name: 'Darlene Robertson', email: 'darlene@example.com', avatarUrl: 'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg' },
  { id: 5, name: 'Theresa Webb', email: 'theresa@example.com', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2iQvAPNLkPLllOM8WVfxC7-sZoa7_SfU9g&s' },
  { id: 6, name: 'Savannah Nguyen', email: 'savannah@example.com', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtV9gfYw0MLRJDCzusdtjAn3jJqZoMgAMjU8BZj7cD5XLm8Zj-hFNOem5kPPj5IiUIJp8&usqp=CAU' },
  { id: 7, name: 'Jerome Bell', email: 'jerome@example.com', avatarUrl: 'https://avatar.iran.liara.run/public/1' },
];

function App() {
  const [search, setSearch] = useState('');

  const filtered = mockContacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '16px' }}>
      {/* Search Field */}
      <SearchField value={search} onChange={setSearch} placeholder="Search Contacts..." />

      {/* Section: Attended */}
      <div style={{ marginTop: '24px' }}>
        <Section>
          <SectionHeader title="Attended" />
          {filtered.map(contact => (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              email={contact.email}
              avatarUrl={contact.avatarUrl}
            />
          ))}
        </Section>
      </div>
    </div>
  );
}

export default App;