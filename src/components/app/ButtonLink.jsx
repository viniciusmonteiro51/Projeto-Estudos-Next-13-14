import { Button } from "../ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function ButtonLink({ href, children, cadastro = false, ...props }) {
  return (
    <Button asChild {...props}>
      <Link href={href} className="flex gap-2">
        {cadastro && (<CirclePlus width={"18px"} />)}
        {children}
      </Link>
    </Button>
  )
}
