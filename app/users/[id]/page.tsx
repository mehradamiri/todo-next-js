"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

async function getNote(noteId : any) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`);
  const data = await res.json();
  return data;
}

async function deleteById(noteId:any) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
    method:"DELETE"
  });
  if (res.ok) {
    return true;
  } else {
    return false;;
  }
}

const Notepage = ({ params }:any) => {
  const [note, setNote] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchNote = async () => {
      const note = await getNote(params.id);
      setNote(note);
    };
    fetchNote();
  }, [params.id]);

  const handleDelete = async () => {
    await deleteById(params.id);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'نوت شما با موفقیت پاک شد',
      showConfirmButton: false,
      timer: 1500
    })
    router.push('/users')
  };

  return (
    <>
      {note ? (
        <div className="bg-black flex justify-center h-screen flex-col items-center" dir="rtl">
          <div className="flex flex-col bg-zinc-800 h-72 p-4 w-80 overflow-y-scroll">
            <h2 className="text-white font-fat text-5xl mx-auto">{note.title}</h2>
            <p className="mx-auto mt-5 break-all text-white text-xl">{note.content}</p>
            <p className="mt-5 text-white text-xs">{note.created}</p>
          </div>

          <button className="bg-red-600 bg-opacity-25 p-2 rounded-full mt-5 hover:bg-opacity-30" onClick={handleDelete}>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C6.44772 2 6 2.44772 6 3H12C12 2.44772 11.5523 2 11 2H7ZM14 5H4V15C4 16.6569 5.34315 18 7 18H11C12.6569 18 14 16.6569 14 15V5ZM2 5V15C2 17.7614 4.23858 20 7 20H11C13.7614 20 16 17.7614 16 15V5H17C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H14C14 1.34315 12.6569 0 11 0H7C5.34315 0 4 1.34315 4 3H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5H2ZM7 7C7.55228 7 8 7.44772 8 8V15C8 15.5523 7.55228 16 7 16C6.44772 16 6 15.5523 6 15V8C6 7.44772 6.44772 7 7 7ZM11 7C11.5523 7 12 7.44772 12 8V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V8C10 7.44772 10.4477 7 11 7Z" fill="#FF0000"/>
          </svg>
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Notepage;
