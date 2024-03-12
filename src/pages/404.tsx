import Link from "next/link";

export default function NotFound() {
    return (
        <main className={`
            min-h-[70vh] flex flex-col justify-center items-center
        `}>
            <h1 className={`
                text-[4em] text-[#E33d33]
            `}> ⚠️ 404 ⚠️</h1>
            <p className={`
                text-[1.5em] 
            `}>Parece que a página não foi encontrada.</p>
            <p className={`
                text-[1.5em] mb-[2em]
            `}>Clique no botão abaixo para retornar.</p>

            <Link href="/" className={`
                bg-[#FFF] text-[#222]  py-[0.7em] px-[1.2em] rounded-md font-bold transition duration-[0.5s] hover:bg-[#E33D33] hover:text-[#FFF] hover:scale-110 ease-out shadow-md shadow-[#858585]
                min-w-[10px] sm:text-[12px] md:text-[14px]
            `}> 
                Voltar
            </Link>
        </main>
    )
}