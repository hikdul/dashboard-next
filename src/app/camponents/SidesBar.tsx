import Image from "next/image"
import { FaGauge } from "react-icons/fa6";
import { FaPuzzlePiece } from 'react-icons/fa6'
import { FaArrowUp19 } from 'react-icons/fa6'
import { FaNimblr } from 'react-icons/fa6'
import { FaFaceGrinSquint } from "react-icons/fa6";
import { SideBarMenuItem } from "./SideBarMenuItem";


const menuItems = [
    {
        path: '/dashboard/main',
        icon: <FaPuzzlePiece />,
        title: 'Dashboard',
        subtitle: 'Solo prueba...'       
    },
    {
        path: '/dashboard/counter',
        icon: <FaArrowUp19 />,
        title: 'Counter',
        subtitle: 'Carrito Prueba'       
    },
    {
        path: '/dashboard/pokemons',
        icon: <FaNimblr />,
        title: 'Pokemon',
        subtitle: 'Generacion Estatica'       
    },
    {
        path: '/dashboard/favorite',
        icon: <FaFaceGrinSquint />,
        title: 'Favoritos',
        subtitle: 'Global State'       
    }
]


const SideBar = () => (

    <div id="menu"
        style={{width:'300px'}}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0  overflow-y-scroll">

        <div id="logo" className="my-4 px-6">
            <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
                Dash
                <FaGauge className='' />
                <span className="text-blue-500">8</span>.
            </h1>
            <p className="text-slate-500 text-sm">Prueba bases de next</p>
        </div>
        <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image
                        src="https://media.licdn.com/dms/image/C4E03AQFbqrRenLHr0A/profile-displayphoto-shrink_800_800/0/1516936658469?e=1709769600&v=beta&t=h72dlm9V56NgnfkBXgXHiZYAmZGE0n1DbhR1jAYRu88"
                        alt="me_photo"
                        width={50}
                        height={50}
                      />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Hector Contreras
                </span>
            </a>
        </div>
        <div id="nav" className="w-full px-6">
            {menuItems.map( y => <SideBarMenuItem key={y.path}  {...y} />)}
        </div>
    </div>
)


export default SideBar
