import React from 'react'
import InputForm from '../components/input/InputForm'
import { Link } from 'react-router-dom'


const Register: React.FC = () => {
    return (
        <div className=" bg-white w-1/2 mx-auto my-5 rounded-lg shadow-lg px-16 py-10">
            <h1 className='text-[#5E5400] text-center font-black text-5xl uppercase mb-10'>Register</h1>
            <form
                action=""
                className="mb-14">
                <InputForm type="text" label="Fullname" name="fullname" />
                <InputForm type="text" label="Alamat" name="address" />
                <InputForm type="text" label="Jenis Kelamin" name="gender" />
                <InputForm type="text" label="Username" name="username" />
                <InputForm type="password" label="Password" name="password" />
                <button className="bg-[#5E5A00] w-full py-3 text-2xl text-white font-bold mb-3">SUBMIT</button>
                <p className="text-black text-2xl text-center">
                    Sudah Memiliki Akun ?
                    <Link to={'/login'}
                        className="decoration-solid decoration-2 underline italic text-blue-500">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register
