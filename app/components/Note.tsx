import Link from "next/link";

const Note = ({note}:any) => {
    const {id,title,content} = note  || {}
    return <>
    <Link href={`/users/${id}`} className="mx-2">
    <div className="bg-black text-center flex flex-col justify-start text-white h-52 w-52 p-3 my-auto overflow-y-scroll">
         <h1 className="font-fat text-2xl">{title}</h1>
          <p className="text-base">{content}</p>
     </div>
     </Link>
    </>;
}
 
export default Note;