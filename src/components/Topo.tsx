
import Image from "next/image"
import Link from "next/link"

export default function Topo() {
    return (
        <header className={`
            bg-[#333]
            
        `}>
            <nav className={`
                h-16 flex justify-between items-center
                pt-2 px-[50px]
            `}>
                <div className={`
                flex justify-center gap-3 items-center
               
                `}>
                    <Image 
                    src="/images/pokeball.png"
                    width="30"
                    height="30"
                    alt="PokeNext"
                    />
                    <h1 className={`
                        text-slate-200 font-semibold text-[20px]
                    `}>PokeNext</h1>
                </div>

                <ul className={`
                flex items-center
                p-5 gap-4  text-slate-200 text-[16px]

                `}>
                    <li>
                        <Link href="/"> Main </Link>
                    </li>
                    <li>
                        <Link href="/about"> About </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}