import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { Navbar } from "../ui";

type LayoutProps = PropsWithChildren & { title?: string };

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || "PokemonAPP"}</title>
        <meta name="author" content="Cristobal Sanchez" />
        <meta name="description" content={`info about pokemon: ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`}/>
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px'
      }}>{children}</main>
    </>
  );
};
