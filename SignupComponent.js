import React, { useState } from 'react'
import clearMsg from '../../assets/js/clearMsg'

const SignupComponent = () => {

    const [userForm, setUserForm] = useState({
        email: '', password: '', confirmPassword: ''
    })

    const [msg, setMsg] = useState('')


    const formHandler = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = userForm;
        console.log('User From', userForm)

        if (!email || !password || !confirmPassword) {
            setMsg('All Field Required !!')
            clearMsg(setMsg)
            return
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())) {
            setMsg("Email is not Valid")
            clearMsg(setMsg)
            return
        }

    }
    return (
        <div class='pt-120 pb-8'>
            <div class="w-full   flex items-center justify-center">
                <form class="w-full md:w-1/3 bg-white rounded-lg" onSubmit={formHandler}>
                    <div class="flex font-bold justify-center mt-6">
                        <img class="h-20 w-20"
                            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />
                    </div>
                    <h2 class="text-3xl text-center text-gray-700 mb-4">Register Here</h2>
                    {msg && <div className='py-1 text-center'>
                        <span class="text-lg text-center text-gray-700 mb-4 px-4 bg-yellow-400 font-bold rounded-lg">{msg}</span>
                    </div>}
                    <div class="px-12 pb-10">
                        <div class="w-full mb-2">
                            <div class="flex items-center">
                                <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                                <input type='text' placeholder="Enter Email"
                                    onChange={e => { setUserForm({ ...userForm, email: e.target.value }) }}
                                    value={userForm.email}
                                    class="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                            </div>
                        </div>
                        <div class="w-full mb-2">
                            <div class="flex items-center">
                                <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                                <input type='password' placeholder="Password"
                                    onChange={e => { setUserForm({ ...userForm, password: e.target.value }) }}
                                    value={userForm.password}
                                    class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                            </div>
                        </div>
                        <div class="w-full mb-2">
                            <div class="flex items-center">
                                <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                                <input type='password' placeholder="Confirm Password"
                                    onChange={e => { setUserForm({ ...userForm, confirmPassword: e.target.value }) }}
                                    value={userForm.confirmPassword}
                                    class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                            </div>
                        </div>

                        <div class=' '>
                            <button type="submit"
                                class="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none hover:bg-green-400">Signup</button>

                            <span className='float-right py-2'>Already  have an Account
                                <a href='/login' class='text-indigo-500 px-2 hover:text-indigo-800 font-bold'>Click Here</a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignupComponent