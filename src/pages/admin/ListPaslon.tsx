import React from 'react'
import NavbarAdmin from '../../components/NavbarAdmin'

interface IPaslon {
    no: number | string,
    name: string,
    visionMisions: string[]
    coalitions: string[],
    image: string,
    percentage: string
}

interface Props {
    logo: string
    dataPaslon: IPaslon[]
}

const ListPaslon: React.FC<Props> = ({ logo, dataPaslon }) => {
    return (
        <>
            <NavbarAdmin logo={logo} />
            <main>
                <section className='py-[5rem] px-24'>
                    <h1 className='text-center text-[#5E5400] text-5xl font-black uppercase'>List Paslon</h1>
                    <div className='px-16'>
                        <table className='w-full border-collapse  border-[#828282] mt-10'>
                            <thead className='bg-[#E5E5E5] text-left'>
                                <tr>
                                    <th className='border border-[#828282] py-3 ps-3'>No</th>
                                    <th className='border border-[#828282] py-3 ps-3'>image</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Name</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Visi & Misi</th>
                                    <th className='border border-[#828282] py-3 ps-3'>Koalisi</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white'>
                                {dataPaslon.map((data, index) => (
                                    <tr key={index}>
                                        <td className='border border-[#828282] p-3'>{index + 1}</td>
                                        <td className='border border-[#828282] p-3'>{data.name}</td>
                                        <td className='border border-[#828282] p-3'>
                                            <img src={data.image} className='w-[78px] h=[94px]' alt="" />
                                        </td>
                                        <td className='border border-[#828282] p-3'>
                                            <ul className='list-disc list-inside'>
                                                {data.visionMisions.map((vm, index) => (
                                                    <li key={index}>{vm}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className='border border-[#828282] p-3'>
                                            <ul className='list-disc list-inside'>
                                                {data.coalitions.map((coalition, index) => (
                                                    <li key={index}>{coalition}</li>
                                                ))}
                                            </ul>
                                        </td>
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

export default ListPaslon
