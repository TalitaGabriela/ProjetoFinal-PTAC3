'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Main() {
  const [listaDeLightsticks, setListaDeLightsticks] = useState([]);
  const [listComplete,setListComplete] = useState([]);
  const [search,setSearch] = useState("")


    useEffect( ()=> {
      const getLightstick = async ()=>{
        const response = await fetch("http://localhost:3000/api/");
        const data = await response.json();

        setListaDeLightsticks(data);
        setListComplete(data);
      }

      getLightstick();
    }, []);

    const searchText = (text) => {
      setSearch(text);
  
      if (text.trim() == ""){
        setListaDeLightsticks(listComplete);
        return
      }
  
      const newList =  listaDeLightsticks.filter((lightstick) => 
        lightstick.title.toUpperCase().trim().includes(search.toUpperCase().trim())
      );
      setListProduct(newList);   
    }

    if (listComplete[0] == null) {
      return (
      <main>
      <p>Error 404</p>
      </main>
      );
    }

  return (
  <>
  <div>
        <input type = "text" value={search} placeholder="Pesquise o produto" onChange={(event) => searchText(event.target.value)}/>
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
          <Link href={`/lightstick/${lightstick.id}`}>Ver mais</Link>
        </button>
      </div>
    )};
  </main>
  </>
  );
}