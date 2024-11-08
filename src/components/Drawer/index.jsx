import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import URLInputField from '../URLInputField';
import Button from '../Button';
import URLList from '../URLList';
import { IoIosClose } from 'react-icons/io';



const Drawer = ({ isOpen, onClose }) => {
  const { register, handleSubmit, setError, reset } = useForm();
  const [urls, setUrls] = useState([]);

  const addURL = ({ url }) => {
    if (urls.includes(url)) {
      setError('url', { type: 'manual', message: 'Duplicate URL' });
    } else {
      setUrls([...urls, url]);
      reset();
    }
  };

  const removeURL = (index) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end rounded-md ">
      <div className="bg-white w-96 h-full relative  rounded-tl-xl overflow-hidden">
        <h2 className="text-md font-medium bg-black text-white p-5 text-left rounded-tl-xl">Canonical
          <IoIosClose onClick={onClose} className='cursor-pointer float-right text-4xl font-semibold -top-2 relative' />
        </h2>
        <form onSubmit={handleSubmit(addURL)} className="flex  m-4 items-end ">
          
          <URLInputField register={register} />
          <Button type="submit" className="text-3xl !py-[2.5px]">+</Button>
        </form>
        <URLList urls={urls} removeURL={removeURL} />
        <Button className="absolute right-4 bg-transparent hover:!text-white !text-black rounded !border border-black w-32 mx-auto bottom-1" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
};

export default Drawer;