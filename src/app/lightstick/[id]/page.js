import React from "react";
import Image from "next/image";

export default async function Lightstick ({params}) {
    const response =  await fetch(`http://localhost:3000/api/${params.id}`);
    const data = await response.json();
    
    return(
        <div>  
            <h1>{data.titulo}</h1>
            <Image src={data.imagem}
              width={100}
              height={100} alt="data image" />
            <h2>{data.preco} R$</h2>
            <p>{data.genero}</p>
            <p>{data.avaliacao} ESTRELAS</p>   
        </div>
    );
}