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
  { id: 1, name: 'Dianne Russell', email: 'dianne@example.com', avatarUrl: '' },
  { id: 2, name: 'Ronald Richards', email: 'ronald@example.com', avatarUrl: '' },
  { id: 3, name: 'Arlene McCoy', email: 'arlene@example.com', avatarUrl: '' },
  { id: 4, name: 'Darlene Robertson', email: 'darlene@example.com', avatarUrl: '' },
  { id: 5, name: 'Theresa Webb', email: 'theresa@example.com', avatarUrl: '' },
  { id: 6, name: 'Savannah Nguyen', email: 'savannah@example.com', avatarUrl: '' },
  { id: 7, name: 'Jerome Bell', email: 'jerome@example.com', avatarUrl: '' },
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