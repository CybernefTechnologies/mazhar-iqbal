import React from 'react'
import { Link } from 'react-router-dom'

export const Home = ({ userdata }) => {
    console.log(userdata)

    return (
        <div className='container home'>
            <h3>User Board</h3>
            <Link to='/userlogindetail'>
                <button className='gologin' >Go to login data</button>
            </Link><br />
            {
                userdata?.map(item => (
                    <>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <img src={item.picture.large} alt="userimg" className='userImg' />
                            </div>
                        </div>
                        <div className='row dataMain justify-content-around'>
                            <div className="col-4">
                                <div className='dataDivs'>
                                    <label>Name:</label>
                                    <p>{item.name.title} {item.name.first} {item.name.last}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>Gender:</label>
                                    <p>{item.gender} </p>
                                </div>
                                <div className='dataDivs'>
                                    <label>location:</label>
                                    <p>{item.location.city}, {item.location.country}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>State:</label>
                                    <p>{item.location.state}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>Nat:</label>
                                    <p>{item.nat}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>postcode:</label>
                                    <p>{item.location.postcode}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='dataDivs'>
                                    <label>Age:</label>
                                    <p>{item.dob.age}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>Email:</label>
                                    <p>{item.email}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>Gender:</label>
                                    <p>{item.gender}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>Date of Birth:</label>
                                    <p>{item.dob.date}</p>
                                </div>
                                <div className='dataDivs'>
                                    <label>phone:</label>
                                    <p>{item.cell}</p>
                                </div>
                            </div>
                        </div>
                    </>

                ))
            }
        </div>
    )
}
