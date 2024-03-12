import Image from "next/image";
import Link from "next/link";

export default function Card ({pokemon}:any) {
    return (

        <div className={`
            flex flex-col items-center 
            justify-center py-[2em] px-[1em]
            w-[20%] rounded-2xl border-[1px] border-solid border-[#E33D33] sm:w-[200px]
            shadow-[5px_5px_12px_rgba(0,0,0,0.5)]
            bg-[#333] text-[#FFF]
        `}>
            <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id < 10 ? "00" + pokemon.id : "0" + pokemon.id}.png`} 
            width="120"
            height="120" 
            alt={pokemon.name} />
            <p className={`
                flex justify-center items-center
                my-[1em] bg-[#E33D33] p-[5px]
                text-[#FFF] rounded-md sm:text-[14px] md:text-[16px] 
            `}>#{pokemon.id}</p>
            <h3 className={`
                capitalize mb-[1em] text-[1.4em] sm:text-[16px] md:text-[18px] 
            `}>{pokemon.name}</h3>

            <Link href={`/pokemon/${pokemon.id}`} className={`
                bg-[#FFF] text-[#222]  py-[0.7em] px-[1.2em] rounded-md font-bold transition duration-[0.5s] hover:bg-[#E33D33] hover:text-[#FFF] hover:scale-110 ease-out
                min-w-[10px] sm:text-[12px] md:text-[14px] 
            `}>
                Detalhes
            </Link>
        </div>
    )
}
