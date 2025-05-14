import React from 'react';
import styles from './ContactListItem.module.css';

export interface ContactListItemProps { 
    name: string; 
    email: string; 
    avatarUrl?: string; 
}

export const ContactListItem: React.FC<ContactListItemProps> = ({ name, email, avatarUrl }) => (
  <div className={styles.container}>
    {avatarUrl && <img src={avatarUrl} className={styles.avatar} alt={name}/>}   
    <div className={styles.text}><span className={styles.name}>{name}</span><span className={styles.email}>{email}</span></div>
  </div>
);