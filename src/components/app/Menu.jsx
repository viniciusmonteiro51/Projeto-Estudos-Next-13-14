"use client"

import { Bell, ChevronsLeft, Home, LogOut, DollarSign, Goal, CreditCard, TrendingUp, HandCoins } from "lucide-react";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
export function Menu() {

  let router = useRouter();

  const { data: session, status } = useSession();

  console.log('Session:', session); // Adicione isso
  console.log('Status:', status); // Adicione isso

  const [menuClosed, setMenuClosed] = useState(false);

  let links = [
    {
      id: 0, name: "Início", img: <Home color="white" width={menuClosed ? "21px" : "25px"} />, imgAlt: "Ícone início", link: "/inicio"
    },
    {
      id: 1, name: "Extrato", img: <HandCoins color="white" width={menuClosed ? "21px" : "25px"} />, imgAlt: "Ícone usuários", link: "/extratos"
    },
    {
      id: 2, name: "Transferências", img: <TrendingUp color="white" width={menuClosed ? "21px" : "25px"} />, imgAlt: "Ícone de veículos", link: "/transferencias"
    },
    {
      id: 3, name: "Pagamentos", img: <DollarSign color="white" width={menuClosed ? "21px" : "25px"} />, imgAlt: "Ícone reservas", link: "/pagamentos"
    },
    {
      id: 4, name: "Cartões", img: <CreditCard color="white" width={menuClosed ? "21px" : "25px"} />, imgAlt: "Ícone reservas", link: "/cartoes"
    }
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

              <img src="C.svg" alt="Logo cidades inteligentes" className={menuClosed ? "w-[40px]" : "w-[40px]"} />

              {!menuClosed && (
                <div className="flex flex-col">
                  <Image
                    src="/Ocean.svg"
                    width={150}
                    height={150}
                    alt="Homepage Image"
                    className="bg-white rounded-xl"
                  />
                </div>
              )}
            </div>

            <div className={`flex w-full  ${!menuClosed ? "gap-2" : "gap-4"} border-b pb-3 ${menuClosed && "flex-col"}`}>
              <ButtonLink className={`p-3 h-[45px] justify-center flex items-center gap-2 ${!menuClosed && "bg-blue-600 rounded-l-1xl rounded-l-1xl"} ${!menuClosed ? "w-[80%]" : "w-[100%]"}`} href={"perfil"}>

                {!menuClosed && (
                  <p className="text-white text-sm text-wrap line-clamp-1">
                    {session ? session?.user?.usuario?.nome ?? "Sean" : "Carregando..."}
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
