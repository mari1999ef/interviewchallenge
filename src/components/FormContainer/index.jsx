import React, { useState, useRef, useEffect } from 'react';
import TextArea from '../TextArea';
import InputField from '../InputField';
import SelectField from '../SelectField';
import DurationField from '../DurationField';
import RadioGroup from '../RadioGroup';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { PiNoteLight } from 'react-icons/pi';
import styles from './styles.module.css';

function FormContainer() {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>General</h2>
          <button onClick={toggleForm} className={styles.toggleButton}>
            {isOpen ? <SlArrowUp /> : <SlArrowDown />}
          </button>
        </div>
        <form className={styles.form}>
          <div
            ref={contentRef}
            className={styles.formContent}
            style={{ maxHeight: maxHeight }}
          >
            <div className={styles.formSection}>
              <TextArea label="Symptom/Reason for visit" rows={2} />
              <div className={styles.gridLayout}>
                <InputField label="Onset of Symptom" />
                <SelectField label="Severity" options={['Select', 'Mild', 'Moderate', 'Severe']} />
                <SelectField label="Progression" options={['Select', 'Stable', 'Improving', 'Worsening']} />
                <DurationField />
                <div className={styles.flexRow}>
                  <SelectField label="Urination" options={['Select', 'Normal', 'Increased', 'Decreased']} />
                  <PiNoteLight className={styles.iconStyle} />
                </div>
              </div>
              <RadioGroup label="Coughing/Sneezing" options={['Yes', 'No']} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormContainer;
