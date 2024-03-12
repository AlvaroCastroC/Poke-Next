import Head from "next/head";
import Image from "next/image";

export default function About () {
    return (
        <>
            <Head>
                <title>
                    PokeNext | About
                </title>
            </Head>
            <main className={`
                text-center
            `}>
                <h1 className={`
                    text-[2em] mb-4 mt-[50px]
                `}> Sobre projeto</h1>
                <p className={`
                    max-w-[500px] mb-[70px] mx-auto leading-5
                `}> Criado com estudos baseados em next e typeScript. </p>

                <Image src="/images/charizard.png"
                width="300"
                height="300"
                alt="Charizard" 
                className={`
                    m-auto
                `}
                />

            </main>
        </>
    )
}