import React from "react";
import NavbarAdmin from "../../components/NavbarAdmin";

interface Props {
    logo: string
    profilePic: string
}

const AddPartai: React.FC<Props> = ({ logo, profilePic }) => {
    return (
        <>
            <NavbarAdmin logo={logo} />
            <section className="bg-white p-10">
                <h1 className='text-center text-[#5E5400] text-5xl font-black uppercase mb-10'>Add Partai</h1>
                <div className="container mx-auto px-12">
                    <div className="flex justify-center gap-7 px-20 ">
                        <div className="w-[368px] h-[523px]">
                            <img src={profilePic} className="rounded-lg bg-cover bg-center w-full h-full" alt="" />
                        </div>
                        <form action="" className=" grow">
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="block text-2xl text-black mb-2 font-bold">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="border-2 text-black text-2xl border-[#595959] rounded-lg w-full h-[70px]"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="chairman"
                                    className="block text-2xl text-black mb-2 font-bold">
                                    Ketua Umum
                                </label>
                                <input
                                    type="text"
                                    name="chairman"
                                    className="border-2 text-black text-2xl border-[#595959] rounded-lg w-full h-[70px]"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="visionmision"
                                    className="block text-2xl text-black mb-2 font-bold">
                                    Visi Misi
                                </label>
                                <textarea name="visionmision" id="" rows={4} className="border-2 border-[#595959] rounded-lg py-2 w-full"></textarea>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="address"
                                    className="block text-2xl text-black mb-2 font-bold">
                                    Alamat
                                </label>
                                <textarea name="address" id="" rows={4} className="border-2 border-[#595959] rounded-lg py-2 w-full"></textarea>
                            </div>

                            <button className="bg-[#5E5A00] text-white w-[503px] py-3 rounded-lg font-bold">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddPartai