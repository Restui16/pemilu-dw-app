import React from 'react'
import logoBrand from '/brand-logo.png'



const Footer: React.FC = () => {
    return (
        <footer className='bg-black'>
            <div className="px-24 flex">
                <div className="flex items-center py-10 gap-10">
                    <img src={logoBrand} className="h-36" alt="logobrand" />

                    <div className="basis-72">
                        <h1 className="font-bold text-lg text-white">DUMBWAYS.ID</h1>
                        <p className="text-neutral-500">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                    </div>
                </div>
            </div>
            <h1 className="border-t-2 border-white py-2 text-center text-white">Komisi Pemilihan Umum DumbWays.ID | Restu Wibowo 2024</h1>
        </footer>
    )
}

export default Footer
