import React, { useState } from 'react'
import dataArticle from '../../mocks/dataArticle.json'
import NavbarUser from '../../components/NavbarUser'
import Footer from '../../components/Footer'


interface Props {
    logo: string
    brand: string
    imgBanner: string
}

interface IArticle {
    id?: number
    timestamp: string
    title: string
    author: string
    image: string
}

const Home: React.FC<Props> = ({logo, brand, imgBanner}) => {
    const [article] = useState<IArticle[]>(dataArticle)
    return (
        <>
            <NavbarUser logo={logo} />
            <main>
                <section className='px-24'>
                    <div className="relative bgGradient h-[516px] overflow-hidden flex flex-col my-10 rounded-xl lg:flex-row">
                        <img src={brand} className="absolute w-72 top-0 left-0 opacity-50 z-0" alt="" />
                        <div className="text-white self-end font-bold px-5 py-5 z-10">
                            <h1 className="text-3xl lg:text-6xl">SELAMAT DATANG</h1>
                            <h3 className="text-xl lg:text-2xl">PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA</h3>
                        </div>
                        <img className="" src={imgBanner} alt="" />
                    </div>
                </section>

                <section className='px-24 my-10'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                        {article.map((data, index) => {
                            return (
                                <div key={data.id} className={index === 0 ? 'md:col-span-2' : 'bg-white'}>
                                    <div className={index === 0 ? 'relative w-full' : 'w-full'}>
                                        <div className={index === 0 ? 'h-full w-full absolute -z-10' : 'h-2/4'}>
                                            <img src={data.image} className="w-full h-full bg-cover bg-center" alt="" />
                                        </div>

                                        <div className={index === 0 ? 'h-96 flex items-end text-white' : 'h-2/4 z-20'}>
                                            <div className="p-4">
                                                <span className="bg-[#FF0000] text-white p-2 mb-3 rounded-lg text-1xl md:text-2xl">{data.timestamp}</span>
                                                <p className="font-bold mt-4 text-2xl md:text-3xl">{data.title}</p>
                                                <p className="mt-1 text-1xl md:text-2xl">{data.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                <section className='bg-white font-bold text-center px-24 h-[386px] flex justify-center items-center'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl leading-[48.41px]">PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT</h1>
                </section>
            </main>

            <Footer logo={logo} />
        </>

    )
}

export default Home
