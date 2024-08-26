import React from 'react';
import styles from './aside.module.css';
import Card from '../Card/Card';
import { useEquipmentContext } from '../../context/EquipmentContext';

export const Aside: React.FC = () => {
  const { filteredData, organizedData, filtered } = useEquipmentContext();

  const dataToDisplay =
    filtered && filteredData.length === 0
      ? []
      : filtered
        ? filteredData
        : organizedData;

  return (
    <div className={styles.container}>
      <Card data={dataToDisplay} />
    </div>
  );
};
