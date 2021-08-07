import React, { useState } from 'react'
import clearMsg from '../../assets/js/clearMsg'

const LoginComponent = () => {

    const [userForm, setUserForm] = useState({
        email: "", password: ''
    })
    const [msg, setMsg] = useState('')



    const formHandler = (e) => {
        e.preventDefault();
        console.log('UserForm ', userForm)
        const { email, password } = userForm;

        if (!email || !password) {
            setMsg('All Field Required !');
            clearMsg(setMsg)
            return
        }
    }
    return (
        <div class='pt-120 pb-8'>
            <div class="w-full flex items-center justify-center">
                <form class="w-full md:w-1/3 bg-white rounded-lg" onSubmit={formHandler}>
                    <div class="flex font-bold justify-center mt-6">
                        <img class="h-20 w-20"
                            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />
                    </div>
                    <h2 class="text-3xl text-center text-gray-700 mb-4">Login Here</h2>
                    {msg && <div className='py-1 text-center'>
                        <span class="text-lg text-center text-gray-700 mb-4 px-4 bg-yellow-400 font-bold rounded-lg">{msg}</span>
                    </div>}
                    <div class="px-12 pb-10">
                        <div class="w-full mb-2">
                            <div class="flex items-center">
                                <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                                <input type='email' placeholder="Email"
                                    onChange={e => { setUserForm({ ...userForm, email: e.target.value }) }}
                                    value={userForm.email}
                                    class="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                            </div>
                        </div>
                        <div class="w-full mb-2">
                            <div class="flex items-center">
                                <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                                <input type='password' placeholder="Password"
                                    onChange={(e) => { setUserForm({ ...userForm, password: e.target.value }) }}
                                    value={userForm.password}
                                    class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                            </div>
                        </div>
                        <a href="#" class="text-xs text-gray-500 float-right mb-4 text-indigo-500 hover:text-indigo-800 font-bold">Forgot Password?</a>
                        <div class=' -center'>
                            <button type="submit"
                                class="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none hover:bg-green-400">Login</button>

                            <span className='float-right py-2'>Don't have an Account
                                <a href='/signup' class='text-indigo-500 px-2 hover:text-indigo-800 font-bold'>Click Here</a>
                            </span>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    )

}

export default LoginComponent