'use client'

import { useEffect, useState } from "react";
import Carregamento from "./Carregamento";
import Link from "next/link";
import Image from "next/image";

export default function Main() {
  const [listaDeLightsticks, setListaDeLightsticks] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("")
  const [errorFetch, setErrorFetch] = useState(false);


  useEffect(() => {
    const getLightstick = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/");
        const data = await response.json();

        setListaDeLightsticks(data);
        setListComplete(data);
      } catch {
        setErrorFetch(true);
      }
    }

    getLightstick();
  }, []);


  const ordAz = () => {
    let newList = [...listaDeLightsticks].sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
    setListaDeLightsticks(newList);
  }

  const ordZa = () => {
    let newList = [...listaDeLightsticks].sort((a, b) =>
      b.titulo.localeCompare(a.titulo)
    );
    setListaDeLightsticks(newList);

  }

  const ordBaratCaro = () => {
    let newList = [...listaDeLightsticks].sort((a, b) => a.preco - b.preco);
    setListaDeLightsticks(newList);
  }

  const ordCaroBarat = () => {
    let newList = [...listaDeLightsticks].sort((a, b) => a.preco - b.preco);
    newList = newList.reverse();
    setListaDeLightsticks(newList);
  }


  const searchText = (text) => {
    setSearch(text);

    if (text.trim() == "") {
      setListaDeLightsticks(listComplete);
      return
    }

    const newList = listComplete.filter((lightstick) =>
      lightstick.titulo.toUpperCase().trim().includes(search.toUpperCase().trim())
    );
    setListaDeLightsticks(newList);
  }

  if (errorFetch == true) {
    return (
      <ErrorGetData />
    );
  }

  if (listComplete[0] == null) {
    return (
      <main>
        <Carregamento />
      </main>
    );
  }

  return (
    <>
      <div>
        <input type="text" value={search} placeholder="Pesquise o produto" onChange={(event) => searchText(event.target.value)} />
        <button onClick={ordAz}>A - Z</button>
        <button onClick={ordZa}>Z - A</button>
        <button onClick={ordBaratCaro}>Barato - Caro</button>
        <button onClick={ordCaroBarat}>Caro - Barato</button>
      </div>
      <main>
        {listaDeLightsticks.map((lightstick) =>
          <div key={lightstick.id}>
            <h1>{lightstick.titulo}</h1>
            <Image src={lightstick.imagem}
              width={100}
              height={100} alt="lightstick image" />
            <h2>{lightstick.preco} R$</h2>
            <button >
              {/*Eu já havia utilizado o componente Link passando o ID do objeto para rota dinâmica pois queria testa se a página dinâmica funcionava.*/}
              <Link href={`/lightstick/${lightstick.id}`}>Ver mais</Link>
            </button>
          </div>
        )}
      </main>
    </>
  );
}