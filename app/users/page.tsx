import Note from "../components/Note";
import icon from "../../public/add.svg"
import Link from "next/link";

const getNote = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}

const userPage = async () => {
    const notes = await getNote()
    return <>
        <div className="flex h-screen justify-center pt-10 flex-wrap">
            {
                notes.map(notes => <Note key={notes.id}  note={notes}/>)
            }
            <div className="bg-black h-min w-min self-end p-4 fixed mb-6 rounded-full transition duration-700 shadow-2xl hover:shadow-blue-500 hover:bg-zinc-700">
                <Link href={'users/add'}>
                    <svg width="50" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 24.5L46 24.5M24.5 46L24.5 3" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
            </div>
        </div>
    </>;
}
 
export default userPage;