import React, { useState } from 'react'
import NavbarUser from '../../components/NavbarUser'
import { IoIosArrowBack, IoIosArrowForward, } from "react-icons/io";
import Footer from '../../components/Footer';
import ModalVote from '../../components/ModalVote';
import ReactApexChart from 'react-apexcharts';
import dataPaslon from '../../mocks/dataPaslon.json'
import IPaslon from '../../interface/IPaslon';

interface Props {
    profilePic: string
    logo: string
    click?: () => void
    isVoting: boolean
    isLogin: boolean
}

const Voting: React.FC<Props> = ({ profilePic, logo, click, isVoting, isLogin }) => {
    const [paslon] = useState<IPaslon[]>(dataPaslon)
    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === paslon.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? paslon.length - 1 : current - 1)
    }

    if (!Array.isArray(paslon) || paslon.length <= 0) {
        return null
    }

    const labelChart = paslon.map(value => {
        return value.name
    })

    const options = {
        series: [44, 55, 13],
        chart: {
            width: 380,
        },
        labels: labelChart,
        legend: {
            show: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false,
                    position: 'bottom'
                }
            }
        }]
    };

    return (
        <>
            <NavbarUser logo={logo} isLogin={isLogin} />
            <main>
                <section className='bg-white px-24 py-10'>
                    <h1 className='text-[#5E5400] text-center font-black text-5xl'>INFO PEMILU TERUPDATE</h1>
                    <div className='flex gap-16 justify-center mt-10'>
                        <div className='flex flex-col justify-center items-center gap-7'>
                            <h1 className='text-4xl font-black'>Hasil :</h1>
                            <div id='chart' className='w-[30rem] h-[30rem]'>
                                <ReactApexChart options={options} series={options.series} type="pie" />
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            {paslon.map((value) => (
                                <div key={value.no} className='flex gap-5 items-center bg-[#FF6384] p-4 rounded-lg shadow-xl shadow-[#CC5B5B80] border-b-4 border-[#CC5B5B80]'>
                                    <div className='w-20 h-28 p-2 text-center text-white bg-[#5E0000] rounded-lg flex flex-col justify-center'>
                                        <h1 className='text-base font-bold'>No. Paslon</h1>
                                        <h1 className='text-3xl font-bold'>{value.no}</h1>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-stroke-white text-4xl font-black text-[#5E0000]'>{value.name}</h1>
                                        <p className='text-stroke-white text-3xl font-bold text-[#5E0000]'>{value.percentage}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-10'>
                        <button className='rounded-lg text-3xl bg-[#5E5400] px-12 mt-16 py-2 font-bold text-white' onClick={click}>Masukan Suaramu</button>
                    </div>
                </section>

                <section className='my-10 px-24'>
                    <h1 className='text-[#5E5400] text-center font-black text-5xl'>INFO PASLON</h1>
                    <div className='flex justify-center items-center mt-10 relative'>
                        <button onClick={prevSlide} className='absolute z-50 top-[50%] left-14 rounded-full w-10 h-10 text-slate-400 hover:text-black bg-white text-2xl flex justify-center items-center'><IoIosArrowBack /></button>
                        <button onClick={nextSlide} className='absolute z-50 top-[50%] right-14 rounded-full w-10 h-10 text-slate-400 hover:text-black bg-white text-2xl flex justify-center items-center'><IoIosArrowForward /></button>
                        {paslon.map((value, index) => (
                            <div key={value.no}  className={`${index === current ? 'transition-all duration-500 opacity-1 scale-100' : 'opacity-0 scale-0 transition-all duration-500 ease-in'}`}>
                                {index === current && (
                                    <div className='p-5 bg-white flex gap-7 rounded-lg '>
                                        <div className='w-60 h-80 rounded-lg overflow-hidden'>
                                            <img src={value.image} className='w-full h-full bg-cover bg-center' alt="profile pic" />
                                        </div>

                                        <div className=''>
                                            <h3 className='font-bold text-2xl'>Nomor Urut: {value.no}</h3>
                                            <h1 className='font-bold text-4xl text-[#5E0000]'>{value.name}</h1>

                                            <div className='mt-5 text-2xl'>
                                                <p>Visi & Misi</p>
                                                <ul className='list-disc ps-5 list-inside'>
                                                    {value.visionMisions.map((visiMision, index) => (
                                                        <li key={index}>{visiMision}</li>
                                                    ))}
                                                </ul>
                                            </div>


                                            <div className='mt-2 text-2xl'>
                                                <p>Koalisi</p>
                                                <ul className='list-disc ps-5 list-inside'>
                                                    {value.coalitions.map((coalition, index) => (
                                                        <li key={index}>{coalition}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className='bg-white h-[360px] font-bold text-4xl flex justify-start items-center text-center text-[#FF0000] px-24'>
                    <h1>PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
                        YANG PENTING TIDAK MELEGALKAN SLOT</h1>
                </section>
            </main>
            <ModalVote click={click} profilePic={profilePic} isVoting={isVoting} />
            <Footer logo={logo} />
        </>
    )
}

export default Voting
