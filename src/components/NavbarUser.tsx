import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    logo: string
}

const NavbarUser:React.FC<Props> = ({logo}) => {
    return (
        <nav className="bg-black text-white p-3">
            <div className="px-24 flex justify-between items-center ">
                <div className="flex items-center gap-2">
                    <Link to={'/'} className="cursor-pointer flex items-center space-x-2">
                        <img className="h-[41px] w-[41px]" src={logo} alt="img-logo" />
                        <h1 className="hidden md:inline-block font-bold text-2xl uppercase">PEMILU PRESIDEN DUMBWAYS.ID</h1>
                    </Link>
                </div>

                <div className="flex items-center justify-end gap-5">
                    <Link to={'/partai'} className='hidden md:inline-block text-2xl hover:font-bold'>Partai</Link> |
                    <Link to={'/paslon'} className='hidden md:inline-block text-2xl hover:font-bold'>Paslon</Link> |
                    <Link to={'/Voting'} className='hidden md:inline-block text-2xl hover:font-bold'>Voting</Link>
                    <Link to={'/login'} className='bg-[#D9D9D9] text-black text-2xl font-bold rounded px-4 py-1'>Login</Link>
                </div>
            </div>
        </nav>

    )
}

export default NavbarUser
