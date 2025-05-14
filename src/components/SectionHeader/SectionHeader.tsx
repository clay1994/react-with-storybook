import React from 'react';
import styles from './SectionHeader.module.css';

export interface SectionHeaderProps { 
    title: string; 
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => <div className={styles.container}><h3 className={styles.title}>{title}</h3></div>;