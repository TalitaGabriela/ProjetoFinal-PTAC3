import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.cabecalho}>
             <Link href="/">
            <Image className={styles.imagem} 
            width={70}
            height={70}
            src="/icon-lightstick.png"
            />
            </Link>
            <nav>
                <div>
                <ul className={styles.lista}>
                    <li className={styles.frase}>COMPRE NA Lightstick KPOP Store, AQUI VOCÊ ENCONTRA OS MELHORES PREÇOS!</li>
                    <li>
                    <Link href="/">
                    <Image className={styles.imagem} 
                    width={30}
                    height={30}
                    src={"https://cdn-icons-png.freepik.com/256/2838/2838895.png?ga=GA1.1.414910882.1717006491&semt=ais_hybrid"}
                    />    
                    </Link>
                    <button className = {styles.button}>ADD PRODUTO</button>
                    </li>
                </ul>
                </div>        
            </nav>
        </header>
    );
}