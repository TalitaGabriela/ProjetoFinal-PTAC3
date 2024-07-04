import { listaDeLightsticks } from "../api/[id]/route";
import Link from "next/link";
import Image from "next/image";
import Lightstick from "../api/[id]/route";

export default function Main (){
    <main>
        {listaDeLightsticks.map((lightsticks) =>

          <div  key={lightsticks.id}>
            <p>{lightsticks.titulo}</p>
            <Image src={lightsticks.imagem}
              width={100}
              height={100} alt="lightstick image" />
            <p>{lightsticks.preco} R$</p>
            <p>{lightsticks.genero}</p>
            <p>{lightsticks.avaliacao.count} ESTRELAS</p>
            <button >
              <Link href={`lightstick/${lightsticks.id}`}>Ver mais</Link>
            </button>
          </div>
        )};
      </main>
}