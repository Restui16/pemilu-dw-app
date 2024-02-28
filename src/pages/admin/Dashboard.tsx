import React from 'react'
import NavbarAdmin from '../../components/NavbarAdmin'

interface IVoters {
    name: string
    address: string
    gender: string
    paslon: string
}


interface Props {
    logo: string
    profilePic: string
    dataVoters: IVoters[]
}

const Dashboard: React.FC<Props> = ({ logo, profilePic, dataVoters }) => {
    return (
        <>
            <NavbarAdmin logo={logo} />
            <main>
                <section className='bg-white px-24 py-10'>
                    <h1 className='font-black text-5xl text-[#5E5400] text-center'>Dashboard</h1>
                    <div className='grid grid-cols-3 gap-3 mt-12'>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <div className='w-[73px] h-[73px] text-center text-[#5E5400] border-4 text-[40px] font-bold border-[#5E5400] rounded-full bg-[#FFCD56]'>1</div>

                            <div className='bg-[#FFCD56] rounded-lg px-4 py-6 shadow-xl shadow-[#5D5400]'>
                                <img src={profilePic} className='bg-cover bg-center rounded-lg' alt="" />
                                <h1 className='uppercase text-[#5E5400] text-3xl text-stroke-white mt-3 font-bold'>Surya Surya Surya</h1>
                                <h1 className=' text-[#5E5400] text-2xl'>Akumulasi: 45%</h1>
                                <h1 className=' text-[#5E5400] text-2xl'>Jumlah Vote: 117 Voters</h1>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <div className='w-[73px] h-[73px] text-center text-[#00575D] border-4 text-[40px] font-bold border-[#00575D] rounded-full bg-[#56FFF5]'>2</div>

                            <div className='bg-[#56FFF5] rounded-lg px-4 py-6 shadow-xl shadow-[#00575D]'>
                                <img src={profilePic} className='bg-cover bg-center rounded-lg' alt="" />
                                <h1 className='uppercase text-[#00575D]  text-3xl text-stroke-white mt-3'>Surya Surya Surya</h1>
                                <h1 className=' text-[#00575D] text-2xl'>Akumulasi: 45%</h1>
                                <h1 className=' text-[#00575D] text-2xl'>Jumlah Vote: 117 Voters</h1>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <div className='w-[73px] h-[73px] text-center text-[#5D0000] border-4 text-[40px] font-bold border-[#5D0000] rounded-full bg-[#FF5656]'>3</div>

                            <div className='bg-[#FF5656] rounded-lg px-4 py-6 shadow-xl shadow-[#5D0000]'>
                                <img src={profilePic} className='bg-cover bg-center rounded-lg' alt="" />
                                <h1 className='uppercase text-[#5D0000] text-3xl text-stroke-white mt-3'>Surya Surya Surya</h1>
                                <h1 className=' text-[#5D0000] text-2xl'>Akumulasi: 45%</h1>
                                <h1 className=' text-[#5D0000] text-2xl'>Jumlah Vote: 117 Voters</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='py-[10rem] px-24'>
                    <h1 className='text-center text-[#5E5400] text-5xl font-black uppercase'>List Voter</h1>
                    <div className='px-16'>
                        <table className='w-full border-collapse  border-[#828282] mt-10'>
                            <thead className='bg-[#E5E5E5] text-left'>
                                <tr>
                                    <th className='border border-[#828282] py-3 ps-3'>No</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Nama</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Alamat</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Jenis Kelamin</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Paslon</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white'>
                                {dataVoters.map((data, index) => (
                                    <tr key={index}>
                                        <td className='border border-[#828282] p-3'>{index + 1}</td>
                                        <td className='border border-[#828282] p-3'>{data.name}</td>
                                        <td className='border border-[#828282] p-3'>{data.address}</td>
                                        <td className='border border-[#828282] p-3'>{data.gender}</td>
                                        <td className='border border-[#828282] p-3'>{data.paslon}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h1 className='mt-10 font-bold text-2xl'>TOTAL SUARA TERKUMPUL : {dataVoters.length} Voters</h1>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Dashboard
