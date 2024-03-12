import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalLogin from './fragments/modal/ModalLogin'
import ModalRegister from './fragments/modal/ModalRegister'
import logoBrand from '/brand-logo.png'

type NavbarProps = {
    titleBrand: string
    to: string
    children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({titleBrand, to, children }) => {
    const [openLogin, setOpenLogin] = useState<boolean>(false)
    const [openRegister, setOpenRegister] = useState<boolean>(false)

    const handleOpenLogin = () => {
        setOpenLogin(true)
        setOpenRegister(false)
    }

    const handleBtnClose = () => {
        setOpenLogin(false)
        setOpenRegister(false)
    }

    const handleOpenRegister = () => {
        setOpenLogin(false)
        setOpenRegister(true)
    }

    return (
        <>
            <nav className="bg-black text-white p-3">
                <div className="px-12 md:px-24 flex justify-between items-center ">
                    <div className="flex items-center gap-2">
                        <Link to={to} className="cursor-pointer flex items-center space-x-2">
                            <img className="h-[41px] w-[41px]" src={logoBrand} alt="img-logo" />
                            <h1 className="font-bold md:text-2xl uppercase">{titleBrand}</h1>
                        </Link>
                    </div>

                    <div className="flex items-center justify-end gap-5">
                        {children}
                        <button className='bg-[#D9D9D9] text-black text-2xl font-bold rounded px-4 py-1' onClick={handleOpenLogin}>Login</button>
                    </div>
                </div>
            </nav>

            {openLogin && <ModalLogin closeBtn={handleBtnClose} openRegister={handleOpenRegister}/>}
            {openRegister && <ModalRegister closeBtn={handleBtnClose} openLogin={handleOpenLogin}/>}
        </>
    )
}

export default Navbar