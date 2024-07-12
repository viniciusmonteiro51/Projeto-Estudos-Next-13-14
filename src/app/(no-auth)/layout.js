import ReactToastContainer from "@/components/app/ReactToastContainer";

export default function LayoutNoAuth({ children }) {
    return <>
        <ReactToastContainer/>
        {children}
    </>
}