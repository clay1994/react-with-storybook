import React from 'react';
import styles from './Section.module.css';

export interface SectionProps { 
    children: React.ReactNode; 
}

export const Section: React.FC<SectionProps> = ({ children }) => <div className={styles.container}>{children}</div>;