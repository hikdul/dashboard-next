import { WidgetGrid } from "@/components/dashboard/WidgetGrid";

export const metadata =
{
    title: 'Admin Dashboard',
    description: 'solo es la pagina inicial del dashboard'
}

export default function MainPage()
{
    return(
    <>
        <div className="text-black">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-xl">Informacion General</span>
            <div className="flex flex-wrap p-2 items-center justify-center">
                <WidgetGrid />
            </div>
        </div>
    </>)
}