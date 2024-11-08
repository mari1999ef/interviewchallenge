import React, { useState } from 'react';


import TestA from './pages/TestA';
import TestB from './pages/Test‌B';
import TestC from './pages/TestC';
import styles from './stylesApp.module.css';
function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'testA':
        return <TestA/>;
      case 'testB':
        return <TestB/>;
      case 'testC':
        return <TestC/>;
      default:
        return <p className={styles.placeholderText}>Please select a test to view.</p>;
    }
  };

  return (
    <div className="App">
      <div className={styles.container}>
        <h1 className={styles.header}>Test Selector</h1>
        <div className={styles.buttonGroup}>
          <button
            onClick={() => setSelectedComponent('testA')}
            className={`${styles.button} ${styles.buttonBlue}`}
          >
            Test A
          </button>
          <button
            onClick={() => setSelectedComponent('testB')}
            className={`${styles.button} ${styles.buttonGreen}`}
          >
            Test B
          </button>
          <button
            onClick={() => setSelectedComponent('testC')}
            className={`${styles.button} ${styles.buttonRed}`}
          >
            Test C
          </button>
        </div>
        <div className={styles.content}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;
