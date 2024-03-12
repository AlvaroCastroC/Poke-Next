import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Pokemon.module.css"


const api = "https://pokeapi.co/api/v2/pokemon/"


export const getStaticPaths = async () => {
  
    const res = await fetch(api);
    const data = await res.json();

    const paths = data.results.map((_pokemon: any, index: number) => {
        return {
            params: {pokemonid: (index + 1).toString()},
        }
    })

    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps = async (context: any) => {
    const id = context.params.pokemonid

    const res = await fetch(api+ `${id}`)

    const data = await res.json()

    return {
        props: {pokemon: data}
    }
    
}

export default function Pokemon({pokemon}: any) {
    return (
        <>
            <Head>
                <title>
                    PokNext | Detalhes do {pokemon.name}
                </title>
            </Head>
            <div className={`
                flex flex-col items-center text-center
            `}>
                <h1 className={`
                    text-[2.5em] capitalize bg-[#333] text-[#FFF] p-[0.3em] my-[0.8em] mx-auto w-360px
                `}>{pokemon.name}</h1>
                <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id < 10 ? "00" + pokemon.id : "0" + pokemon.id}.png`} 
                width="120"
                height="120" 
                alt={pokemon.name} />

                <div>
                    <h3 className={`
                        my-[0.6em] mx-auto text-[1.2em]
                    `}>Número: </h3>
                    <p>#{pokemon.id}</p>

                </div>
                <div>
                    <h3 className={`
                        my-[0.6em] mx-auto text-[1.2em]
                    `}>Tipo: </h3>
                    <div className={`
                        flex items-center justify-center
                    `}>
                        {pokemon.types.map((item: any, index: number) => (
                            <span key={index} className={`
                            ${styles.type} ${styles['type_' + item.type.name]}
                            `}>{item.type.name}</span>

                        ))}
                    </div>
                </div>
                <div className={`
                        flex flex-row items-center justify-center mt-[0.5em] box-car
                    `}>
                    <div className={`
                        my-[1em] px-[1em] flex items-center justify-center flex-col
                    `}>
                        <h4>Altura:</h4>
                        <p >{pokemon.height} cm</p>
                    </div>
                    <div className={`
                        my-[1em] px-[1em] flex items-center justify-center flex-col
                        border-l border-solid border-[#CCC]
                    `}>
                        <h4>Peso:</h4>
                        <p>{pokemon.weight / 10} kg</p>
                    </div>
                </div>
            </div>
        </>
    )
}