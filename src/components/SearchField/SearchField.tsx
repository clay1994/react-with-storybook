import React, { ChangeEvent } from 'react';
import styles from './SearchField.module.css';
export interface SearchFieldProps { 
    value: string; 
    placeholder?: string; 
    onChange: (v: string) => void; 
}

export const SearchField: React.FC<SearchFieldProps> = ({ value, placeholder='Search', onChange }) => (
  <div className={styles.container}>
    <input
      className={styles.input}
      type="text" value={value} placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  </div>
);