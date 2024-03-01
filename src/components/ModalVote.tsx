import React from 'react'
import { IoMdClose} from "react-icons/io";

interface Props {
    profilePic: string
    click?: () => void
    isVoting?: boolean
}

const ModalVote: React.FC<Props> = ({profilePic, click, isVoting}) => {
    return (
        <div className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full px-24 pt-1 ${isVoting ? '' : 'hidden'}`}>
                <div className="relative bg-white rounded-lg shadow p-4">
                    <button className="absolute text-3xl text-slate-400 hover:text-black top-0 right-0" onClick={click}><IoMdClose/></button>
                        <h1 className='text-[#5E5400] text-center font-black text-5xl uppercase'>Masukan Pilihanmu</h1>
                        <div className="flex justify-center items-center mt-10 gap-5">
                            <div className="bg-[#FCFF63] px-4 py-6 rounded-lg relative">
                                <div className="absolute top-0 right-0 bg-[#FF6384] w-[90px] h-[90px] rounded-full text-white font-bold text-5xl flex justify-center items-center border-2 border-white">1</div>
                                <div className="aspect-video w-[301px] h-[189px] mb-3">
                                    <img src={profilePic} className="w-full h-full rounded-lg bg-cover bg-center" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-[#5E5400] text-2xl font-bold uppercase">Cintara surya paloh</h1>
                                    <p>Memindahkan Indonesia ke Isekai</p>
                                    <p className="font-bold">Partai Pengungsung :</p>
                                    <ul className="list-disc list-inside">
                                        <li>Partai persatuan monyet</li>
                                        <li>Partai sapi perah indonesia</li>
                                        <li>Partai pisang masak</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-[#FCFF63] px-4 py-6 rounded-lg relative">
                                <div className="absolute top-0 right-0 bg-[#FF6384] w-[90px] h-[90px] rounded-full text-white font-bold text-5xl flex justify-center items-center border-2 border-white">1</div>
                                <div className="aspect-video w-[301px] h-[189px] mb-3">
                                    <img src={profilePic} className="w-full h-full rounded-lg bg-cover bg-center" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-[#5E5400] text-2xl font-bold uppercase">Cintara surya paloh</h1>
                                    <p>Memindahkan Indonesia ke Isekai</p>
                                    <p className="font-bold">Partai Pengungsung :</p>
                                    <ul className="list-disc list-inside">
                                        <li>Partai persatuan monyet</li>
                                        <li>Partai sapi perah indonesia</li>
                                        <li>Partai pisang masak</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-[#FCFF63] px-4 py-6 rounded-lg relative">
                                <div className="absolute top-0 right-0 bg-[#FF6384] w-[90px] h-[90px] rounded-full text-white font-bold text-5xl flex justify-center items-center border-2 border-white">1</div>
                                <div className="aspect-video w-[301px] h-[189px] mb-3">
                                    <img src={profilePic} className="w-full h-full rounded-lg bg-cover bg-center" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-[#5E5400] text-2xl font-bold uppercase">Cintara surya paloh</h1>
                                    <p>Memindahkan Indonesia ke Isekai</p>
                                    <p className="font-bold">Partai Pengungsung :</p>
                                    <ul className="list-disc list-inside">
                                        <li>Partai persatuan monyet</li>
                                        <li>Partai sapi perah indonesia</li>
                                        <li>Partai pisang masak</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end me-14 items-center gap-10 mt-5">
                            <button className="bg-white border-2 rounded-lg border-[#5E5A00] text-[#5E5A00] font-bold w-96 py-3">Reset</button>
                            <button className="bg-[#5E5A00] text-white rounded-lg font-bold w-96 py-3">Submit</button>
                        </div>
                </div>
        </div>
    )
}

export default ModalVote
