import React from 'react'
import './login.css'

function Login() {
    return (
        <div>
            <div class="login-box">
                <div class="admin-title">
                    <h1><img src={require('./login.png')}/></h1>
                </div>

                <form method="post">
                    <div class="input-form">
                        <label for="">Email Id</label>
                        <input type="email" name="email" id="" autofocus/>
                    </div>

                    <div class="input-form">
                        <label for="">Password</label>
                        <input type="password" name="pass" id=""/>
                    </div>

                    <div class="login-button">
                        <input type="submit" value="Login" name="" id=""/>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
