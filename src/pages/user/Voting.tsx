import React from 'react'
import NavbarUser from '../../components/NavbarUser'
import { IoIosArrowBack, IoIosArrowForward, } from "react-icons/io";
import Footer from '../../components/Footer';
import ModalVote from '../../components/ModalVote';

interface Props {
    profilePic: string
    logo: string
    click?: () => void
    isVoting: boolean
}

const Voting: React.FC<Props> = ({ profilePic, logo, click, isVoting }) => {
    return (
        <>
            <NavbarUser logo={logo} />
            <main>
                <section className='bg-white px-24 py-10'>
                    <h1 className='text-[#5E5400] text-center font-black text-5xl'>INFO PEMILU TERUPDATE</h1>
                    <div className='flex gap-16 justify-center mt-10'>
                        <div className='flex flex-col justify-center items-center gap-7'>
                            <h1 className='text-4xl font-black'>Hasil :</h1>
                            <div className='bg-blue-400 w-80 h-80 rounded-full flex items-center justify-center'>
                                percentage
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-5 items-center bg-[#FF6384] p-4 rounded-lg shadow-xl shadow-[#CC5B5B80] border-b-4 border-[#CC5B5B80]'>
                                <div className='w-20 h-28 p-2 text-center text-white bg-[#5E0000] rounded-lg flex flex-col justify-center'>
                                    <h1 className='text-base font-bold'>No. Paslon</h1>
                                    <h1 className='text-3xl font-bold'>3</h1>
                                </div>
                                <div className=''>
                                    <h1 className='text-stroke-white text-4xl font-black text-[#5E0000]'>Cintara Surya Paloh</h1>
                                    <p className='text-stroke-white text-3xl font-bold text-[#5E0000]'>75%</p>
                                </div>
                            </div>

                            <div className='flex gap-5 items-center bg-[#FFCD56] p-4 rounded-lg shadow-xl shadow-[#CACC5B80]'>
                                <div className='w-20 h-28 p-2 text-center text-white bg-[#5E5400] rounded-lg flex flex-col justify-center'>
                                    <h1 className='text-base font-bold'>No. Paslon</h1>
                                    <h1 className='text-3xl font-bold'>3</h1>
                                </div>
                                <div className=''>
                                    <h1 className='text-stroke-white text-4xl font-black text-[#5E5400]'>Cintara Surya Paloh</h1>
                                    <p className='text-stroke-white text-3xl font-bold text-[#5E5400]'>75%</p>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center bg-[#36A2EB] p-4 rounded-lg shadow-xl shadow-[#5BCCBE80]'>
                                <div className='w-20 h-28 p-2 text-center text-white bg-[#005E4D] rounded-lg flex flex-col justify-center'>
                                    <h1 className='text-base font-bold'>No. Paslon</h1>
                                    <h1 className='text-3xl font-bold'>3</h1>
                                </div>
                                <div className=''>
                                    <h1 className='text-stroke-white text-4xl font-black text-[#005E4D]'>Cintara Surya Paloh</h1>
                                    <p className='text-stroke-white text-3xl font-bold text-[#005E4D]'>75%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-10'>
                        <button className='rounded-lg text-3xl bg-[#5E5400] px-12 mt-16 py-2 font-bold text-white' onClick={click}>Masukan Suaramu</button>
                    </div>
                </section>

                <section className='my-10 px-24'>
                    <h1 className='text-[#5E5400] text-center font-black text-5xl'>INFO PASLON</h1>
                    <div className='flex justify-center items-center gap-10 mt-10'>
                        <button className='rounded-full w-10 h-10 text-slate-400 hover:text-black bg-white text-2xl flex justify-center items-center'><IoIosArrowBack /></button>
                        <div className='p-5 bg-white flex gap-7 rounded-lg'>
                            <div className='w-60 h-80 rounded-lg overflow-hidden'>
                                <img src={profilePic} className='w-full h-full bg-cover bg-center' alt="profile pic" />
                            </div>

                            <div className=''>
                                <h3 className='font-bold text-2xl'>Nomor Urut: 1</h3>
                                <h1 className='font-bold text-4xl text-[#5E0000]'>Cintara Surya Paloh</h1>

                                <div className='mt-5 text-2xl'>
                                    <p>Visi & Misi</p>
                                    <ul className='list-disc ps-5'>
                                        <li>Memindahkan Indonesia ke Isekai</li>
                                        <li>Nonton anime 3x sehari</li>
                                        <li>Melakukakan peresapan pada budaya jepang</li>
                                    </ul>
                                </div>


                                <div className='mt-2 text-2xl'>
                                    <p>Koalisi</p>
                                    <ul className='list-disc ps-5'>
                                        <li>Partai Pesatuan Wiboo</li>
                                        <li>Partai Redbull</li>
                                        <li>Partai Black Magic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className='rounded-full w-10 h-10 text-slate-400 hover:text-black bg-white text-2xl flex justify-center items-center'><IoIosArrowForward /></button>
                    </div>
                </section>

                <section className='bg-white h-[360px] font-bold text-4xl flex justify-start items-center text-center text-[#FF0000] px-24'>
                    <h1>PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
                        YANG PENTING TIDAK MELEGALKAN SLOT</h1>
                </section>
            </main>
            <ModalVote click={click} profilePic={profilePic} isVoting={isVoting}/>
            <Footer logo={logo} />
        </>
    )
}

export default Voting
