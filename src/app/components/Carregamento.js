import Image from "next/image";
export default function Carregamento(){
    return(
        <Image
        width={50}
        height={50}
        src="/carregamento.svg"
        alt="Imagem carregando"
        />
    )
}