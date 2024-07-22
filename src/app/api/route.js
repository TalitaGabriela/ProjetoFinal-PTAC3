import { NextResponse } from "next/server";

export const listaDeLightsticks = [
    {
        id: 1,
        titulo: "BLACKPINK OFFICIAL LIGHTSTICK VER. 2",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/blackpink_27176863-2bea-4f21-bcfe-1383ccfd8e16_1000x-copiar1-c339e8c806e74dd87f16661076279738-1024-1024.webp",
        preco: 470,
        genero: "girlgroup",
        avaliacao: 5
    },
    {
        id: 2,
        titulo: "ARMY BOMB VER. 3 (BTS)",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/product-image-842349427_1024x10241-eb91b18317bb479b8b15739507410831-1024-1024.webp",
        preco: 354,
        genero: "boygroup",
        avaliacao: 5
    },
    {
        id: 3,
        titulo: "TWICE OFFICIAL LIGHTSTICK CANDYBONG ∞",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/4eaf678c1319b223a06627d195e59c561-a2d3d75402cd0a1c0b16793666989096-480-0.webp",
        preco: 590,
        genero: "girlgroup",
        avaliacao: 5
    },
    {
        id: 4,
        titulo: "EXO OFFICIAL LIGHTSTICK VER. 3",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/exo_lightsitck_ver-3_011-7190527a218a0a93aa15741338953113-640-0.webp",
        preco: 465,
        genero: "boygroup",
        avaliacao: 5
    },
    {
        id: 5,
        titulo: "AESPA OFFICIAL LIGHTSTICK",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/s-l16001-3e982ab90487f931cf16571517595051-640-0.webp",
        preco: 465,
        genero: "girlgroup",
        avaliacao: 5
    },
    {
        id: 6,
        titulo: "TXT OFFICIAL LIGHTSTICK VER. 2",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/s-l1600-20-8989d00a8d5dfaa28817068051199874-1024-1024.webp",
        preco: 535,
        genero: "boygroup",
        avaliacao: 5
    },
    {
        id: 7,
        titulo: "(G)I-DLE OFFICIAL LIGHTSTICK VER. 2",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/g-i-dle-md-goods-g-i-dle-official-light-stick-ver-2-neverbong-34890453582005_1000x-webp1-4cdf85ded7b5977d8c16734918940349-1024-1024.webp",
        preco: 445,
        genero: "girlgroup",
        avaliacao: 5
    },
    {
        id: 8,
        titulo: "STRAY KIDS OFFICIAL LIGHTSTICK VER. 2",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/copia-de-25bd1244c037b7f658f78266f5604e1911-f0e67355deb6edd4c216869272229998-1024-1024.webp",
        preco: 585,
        genero: "boygroup",
        avaliacao: 5
    },
    {
        id: 9,
        titulo: "ITZY OFFICIAL LIGHTRING",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/itye_1200x12001-29ab9d272712b6c44515941143067021-1024-10241-2cefb81998f8a90e9f15974284365483-640-0.webp",
        preco: 445,
        genero: "girlgroup",
        avaliacao: 5
    },
    {
        id: 10,
        titulo: "SEVENTEEN OFFICIAL LIGHTSTICK VER. 3",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/seventeen1-f47937713e2f281a7f16801927499965-1024-1024.webp",
        preco: 665,
        genero: "boygroup",
        avaliacao: 5
    },
    {
        id: 11,
        titulo: "RED VELVET OFFICIAL LIGHTSTICK + PHOTOCARD",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/s-l1600-16-cc35515852d96748e817110377287690-1024-1024.webp",
        preco: 480,
        genero: "girlgroup",
        avaliacao: 5
    },
    {
        id: 12,
        titulo: "ENHYPEN OFFICIAL LIGHTSTICK",
        imagem: "https://acdn.mitiendanube.com/stores/987/955/products/enhypen-official-lightstick1-0ec0754705e63e814516080741226608-640-0.webp",
        preco: 490,
        genero: "boygroup",
        avaliacao: 5
    }
];

export async function GET(){
    return NextResponse.json(listaDeLightsticks)
}