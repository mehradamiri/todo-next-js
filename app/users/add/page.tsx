"use client"

import { useState } from "react";
import { useRouter } from 'next/router';

const AddPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const router = useRouter();

  const handleSubmit = async (e:Event) => {
    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent('');
    setTitle('');
    
  };

  return (
    <form onSubmit={e => handleSubmit}>
      <div className="flex justify-center h-screen items-center " dir="rtl">
        <div className="flex flex-col p-6 rounded-lg bg-gray-100 shadow-2xl shadow-sky-200 border-t-4 border-r-4 border-black ">
          <p className="mt-2">نام متن</p>
          <input
            type="text"
            className="bg-gray-200 border-2 border-black w-72 rounded-md py-3 px-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="mt-2">توضیحات </p>
          <textarea
            className="bg-gray-200 border-2 h-40 border-black w-72 rounded-md py-3 px-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button className="mt-4 bg-black py-4 text-white transition duration-700 shadow-2xl border-sky-200 hover:shadow-blue-500 hover:bg-zinc-700">ثبت</button>
        </div>
      </div>
    </form>
  );
};

export default AddPage;
