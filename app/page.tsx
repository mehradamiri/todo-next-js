import Link from "next/link"

export default function Home() {
  return (
  <>
    <h1 className="text-5xl font-fat text-center mt-6">به این سایت خوش آمدی برای شروع روی<br /> دکمه زیر کلیک کن</h1>
    <Link href={"/users"}>
    <div className="flex justify-center mt-10">
    <button className="text-2xl font-bold text-white bg-black py-2 px-16 transition duration-700 shadow-2xl hover:shadow-blue-500 hover:bg-zinc-700">دکمه زیر</button>
    </div>
    </Link>
  </>
  )
}