import React from 'react'
import { Link } from 'react-router-dom'

const UserLoginDetail = ({ userdata }) => {
    return (
        <div className='container home'>
            <h3>Login Detail</h3>
            <Link to='/'>
                <button className='gologin' >Go back to user Board</button>
            </Link><br />
            <div className='row dataMain justify-content-around'>
                {
                    userdata?.map(item => (
                        <>
                            <div className="col-8">
                                <div className='dataDivs'>
                                    <label>md5:</label>
                                    <p>{item.login.md5} {item.name.first} {item.name.last}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>password:</label>
                                    <p>{item.login.password} </p>
                                </div>
                                <div className='dataDivs'>
                                    <label>salt:</label>
                                    <p>{item.login.salt}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>sha1:</label>
                                    <p>{item.login.sha1}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>sha256:</label>
                                    <p>{item.login.sha256}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>username:</label>
                                    <p>{item.login.password}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>uuid:</label>
                                    <p>{item.login.uuid}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default UserLoginDetail