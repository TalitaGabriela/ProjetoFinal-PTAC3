import Link from "next/link";
import Image from "next/image";
import { listaDeLightsticks } from "../api/route";

export default function Main() {
  return (
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
  );
}