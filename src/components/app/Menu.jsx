"use client"

import { Bell, ChevronsLeft, Home, LogOut, UserRound, Goal, CircleUserRound } from "lucide-react";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import ButtonLink from "./ButtonLink";

export function Menu() {

  let router = useRouter();

  const { data: session, status } = useSession();

  const [menuClosed, setMenuClosed] = useState(false);

  let links = [
    {
      id: 0, name: "Início", img: <Home color="white" width={menuClosed ? "21px" : "25px"} />, imgAlt: "Ícone início", link: "/inicio"
    },
    {
      id: 1, name: "Usuários", img: <UserRound color="white" width={menuClosed ? "21px" : "25px"} />, imgAlt: "Ícone usuários", link: "/usuarios"
    },
    {
      id: 2, name: "Contas", img: <CircleUserRound color="white" width={menuClosed ? "21px" : "25px"} />, imgAlt: "Ícone de veículos", link: "/contas"
    },
    {
      id: 3, name: "Metas", img: <Goal color="white" width={menuClosed ? "21px" : "25px"} />, imgAlt: "Ícone reservas", link: "/metas"
    },
  ]

  async function deslogar() {
    await signOut({ redirect: false });

    router.replace("/");
  }

  return (
    <>
      <nav className={`flex flex-col ${!menuClosed ? "w-[280px] min-w-[280px]" : "w-[56px] min-w-[56px]"} min-h-screen bg-blue-700 ${menuClosed && "transition-all"}`}>

        <div className="mx-2 pt-4 sticky top-0 left-0">
          <div className={`flex flex-col gap-6`}>
            <div className="flex items-center gap-3">

              <img src="G.svg" alt="Logo cidades inteligentes" className={menuClosed ? "w-[38px]" : "w-[45px]"} />

              {!menuClosed && (
                <div className="flex flex-col">
                  <p className="text-white text-sm whitespace-nowrap">Gerenciamento de contas</p>
                  <p className="text-white text-sm whitespace-nowrap">Estudos</p>
                </div>
              )}
            </div>

            <div className={`flex w-full  ${!menuClosed ? "gap-2" : "gap-4"} border-b pb-3 ${menuClosed && "flex-col"}`}>
              <ButtonLink className={`p-0 h-[45px] justify-start flex items-center gap-2 ${!menuClosed && "bg-blue-600 rounded-l-3xl rounded-r-xl"} ${!menuClosed ? "w-[80%]" : "w-[100%]"}`} href={"perfil"}>

                <Avatar className="size-12 rounded-full border border-white">
                  <AvatarImage src={session?.user?.foto} alt="Usuário logado" className="object-cover" />
                  <AvatarFallback>Imagem</AvatarFallback>
                </Avatar>

                {!menuClosed && (
                  <p className="text-white text-sm text-wrap line-clamp-1">
                    {session ? session?.user?.nome ?? "Não informado" : "Carregando..."}
                  </p>
                )}

              </ButtonLink>
              <div className={`flex items-center justify-center bg-blue-600 ${menuClosed ? "w-[38px] h-[38px]" : "w-[45px] h-[45px]"} rounded-xl`}>
                <Bell color="white" />
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-2 mt-4">
            {links?.map((link) => (
              <li key={link.id} title={`Ir para ${link.name}`}>
                <Link href={link.link} className="flex items-center gap-2 hover:bg-blue-600 hover:cursor-pointer p-2 rounded-md">
                  {link.img}
                  {!menuClosed && (
                    <span className="text-sm text-white">{link.name}</span>
                  )}
                </Link>
              </li>
            ))}

            <li className="flex items-center gap-2 hover:bg-blue-500 hover:cursor-pointer p-2 rounded-md" title={"Sair do sistema"}
              onClick={deslogar}>
              <LogOut color="white" width={menuClosed ? "21px" : "25px"} />
              {!menuClosed && (
                <span className="text-sm text-white">Sair</span>
              )}
            </li>
            <li className="invisible">Invisible</li>
          </ul>

          <button
            className={`flex items-center gap-2 p-2 ${menuClosed ? "w-[56px]" : "w-[280px]"} fixed bottom-0 left-0 rounded-md bg-black`}
            onClick={() => {
              if (menuClosed) {
                setMenuClosed(false);
              } else {
                setMenuClosed(true);
              }
            }} title={menuClosed ? "Abrir menu" : "Fechar menu"}>
            <ChevronsLeft color="white" className={`${menuClosed && "rotate-180"}`} />
            {!menuClosed && (
              <p className="text-white text-sm">Fechar menu</p>
            )}
          </button>

        </div>
      </nav>
    </>
  )
}
