import React from 'react';
import SelectField from '../SelectField';

function DurationField() {
  const dayOptions = Array.from({ length: 32 }, (_, i) => (i+1).toString());
  const monthOptions = Array.from({ length: 13 }, (_, i) => i.toString());
  const weekOptions = Array.from({ length: 7 }, (_, i) => i.toString());

  return (
    <div className=' flex items-center gap-4'>
      <label className="block text-gray-600">Duration</label>
      <div className="flex items-center space-x-2">
        <div className="w-1/3">
          <SelectField label="Day" options={dayOptions} />
        </div>
        <div className="w-1/3">
          <SelectField label="Week" options={weekOptions} />
        </div>
        <div className="w-1/3">
          <SelectField label="Month" options={monthOptions} />
        </div>
      </div>
    </div>
  );
}

export default DurationField;
