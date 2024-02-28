import React from 'react'
import NavbarAdmin from '../../components/NavbarAdmin'

interface IPartai {
    no: string | number,
    logo: string,
    chairman: string,
    visionMisions: string[]
    address: string
}

interface Props {
    logo: string
    dataPartai: IPartai[]
}

const ListPartai: React.FC<Props> = ({logo, dataPartai}) => {
    return (
        <>
            <NavbarAdmin logo={logo} />
            <main>
                <section className='py-[5rem] px-24'>
                    <h1 className='text-center text-[#5E5400] text-5xl font-black uppercase'>List Partai</h1>
                    <div className='px-16'>
                        <table className='w-full border-collapse  border-[#828282] mt-10'>
                            <thead className='bg-[#E5E5E5] text-left'>
                                <tr>
                                    <th className='border border-[#828282] py-3 ps-3'>No Urut</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Logo</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Ketua Umum</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Visi & Misi</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Alamat</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white'>
                                {dataPartai.map((data, index) => (
                                    <tr key={index}>
                                        <td className='border border-[#828282] p-3'>{index + 1}</td>
                                        <td className='border border-[#828282] p-3'>
                                            <img src={data.logo} className='w-[78px] h=[94px]' alt="" />
                                        </td>
                                        <td className='border border-[#828282] p-3'>{data.chairman}</td>
                                        <td className='border border-[#828282] p-3'>
                                            <ul className='list-disc list-inside'>
                                                {data.visionMisions.map((vm, index) => (
                                                    <li key={index}>{vm}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className='border border-[#828282] p-3'>{data.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ListPartai
