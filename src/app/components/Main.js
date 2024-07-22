import Link from "next/link";
import Image from "next/image";
import { listaDeLightsticks } from "../api/route";

export default function Main() {
  return (
  <main>
    {listaDeLightsticks.map((lightstick) =>
      <div key={lightstick.id}>
        <p>{lightstick.titulo}</p>
        <Image src={lightstick.imagem}
          width={100}
          height={100} alt="lightstick image" />
        <p>{lightstick.preco} R$</p>
        <p>{lightstick.genero}</p>
        <p>{lightstick.avaliacao} ESTRELAS</p>
        <button >
          <Link href={`/api/${lightstick.id}`}>Ver mais</Link>
        </button>
      </div>
    )};
  </main>
  );
}