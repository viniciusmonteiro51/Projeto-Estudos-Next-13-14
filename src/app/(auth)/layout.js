import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ReactToastContainer from "@/components/app/ReactToastContainer";

export default async function LayoutAuth({ children }) {
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect("/");
    }

    return (
        <main className="size-full flex">
            <div className="size-full pt-3 px-4">
                <ReactToastContainer />
                {children}
            </div>
        </main>
    )

}