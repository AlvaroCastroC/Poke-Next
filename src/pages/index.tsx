import Card from "@/components/Card";
import { DataM } from "@/types/Data";
import Head from "next/head";
import Image from "next/image";

const api = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"

interface DataPoke {
  pokemons :{
    results: DataM
  }
}
export default function Home({pokemons}: DataPoke) {
  const {results} = pokemons


  return (
    

    <>
      <Head>
        <title>PokeNext</title>
      </Head>

      <main>
        <div className={`
          flex justify-center items-center my-8
        `}>
          <h1 className={`
            text-[#E33d33] text-center text-[3em] mr-[.4em]
          `}>Poke<span className={`
            text-[#333]
          `}>Next</span></h1>
          <Image src='/images/pokeball.png' width="50" height="50" alt="PokeNext" />
        </div>
        <div className="{`
          flex flex-wrap flex-row justify-center items-center max-w-[1200px] mx-auto gap-[3em]
        `}">
          {
            results.map((i)=>(
              <Card key={i.id} pokemon={i} />
            ) )
          }
        </div>
      </main>

    </>
  );
}


export const getStaticProps = async () => {
    
  const res = await fetch(api);
  const data = await res.json();
  
  data.results.forEach((item: { id: any }, index: number)=> {
    item.id = index + 1
  })
  return {
    props: {
      pokemons: data
    }
  }
}