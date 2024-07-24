import React from "react";
import styles from '../../components/main.module.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default async function Lightstick ({params}) {
    const response =  await fetch(`http://localhost:3000/api/${params.id}`);
    const data = await response.json();
    
    return(
        <>
        <Header/>
        <main className={styles.main}>
        <div>  
            <h1>{data.titulo}</h1>
            <Image src={data.imagem}
              width={200}
              height={200} alt="data image" />
            <h2>{data.preco} R$</h2>
            <p>{data.genero}</p>
            <p>{data.avaliacao} ESTRELAS</p>   
        </div>
        </main>
        <Footer/>
        </>
    );
}