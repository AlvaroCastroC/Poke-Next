export default function Footer () {
    return (
        <footer className={`
            h-[150px] bg-[#333] flex items-center justify-center
            mt-8 border-t-2 border-solid border-[#111] text-[#fff]
            `}>
            <div>
                <p><span className={`
                    font-bold
                `}>Criado com Typescript e Tailwind em</span> &copy; 2024</p>
            </div>
        </footer>
    )
}