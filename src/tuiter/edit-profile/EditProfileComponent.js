import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateProfile} from "../reducers/profile-reducer";
import {useNavigate} from 'react-router-dom';

const EditProfile = () => {
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);

    const navigate = useNavigate();

    const saveProfile = () => {
        dispatch(updateProfile({
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            dateOfBirth: day + "/" + month + "/" + year,
        }));
        navigate("../profile");
    }

    const dob = profile.dateOfBirth.split("/");
    const dob_day = dob[0];
    const dob_month = dob[1];
    const dob_year = dob[2];

    const [day, setDay] = useState(dob_day);
    const [month, setMonth] = useState(dob_month);
    const [year, setYear] = useState(dob_year);

    const setDate = (dateInput) => {
        const newDob = dateInput.split("-");
        setDay(newDob[2]);
        setMonth(newDob[1]);
        setYear(newDob[0])
    }

    return (
        <>
            <div className="row m-2">
                <div className="col-1 d-flex">
                    <a href="/tuiter/profile" className="wd-v-center">
                        <i className="bi bi-x-lg wd-left-icon-size my-auto wd-icon-bold"/>
                    </a>
                </div>
                <div className="col-9 d-flex">
                    <span className="wd-v-center wd-font-bolder wd-large-font-size">Edit Profile</span>
                </div>
                <div className="col-2">
                    <button className="btn wd-medium-font rounded-pill wd-save-profile-button wd-v-center m-0"
                            onClick={() => saveProfile()}>
                        Save
                    </button>
                </div>
            </div>
            <div className="m-1">
                <img alt="text" className="w-100 opacity-75" src={`/images/${profile.bannerPicture}`}/>
            </div>
            <div className="row m-2">
                <div className="col-12">
                    <img src={`/images/${profile.profilePicture}`} width={120} height={120}
                         className="rounded-circle ms-3 wd-profile-image p-1" alt="text"/>
                </div>
            </div>
            <div className="mt-3 mb-5">
                <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="firstname" placeholder="FirstName"
                           onChange={(e) => setFirstName(e.target.value)}
                           value={firstName}/>
                    <label htmlFor="firstname">First Name</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="lastname" placeholder="LastName"
                           onChange={(e) => setLastName(e.target.value)}
                           value={lastName}/>
                    <label htmlFor="lastname">Last Name</label>
                </div>
                <div className="form-floating mb-4">
                    <textarea className="form-control" placeholder="Bio" id="bio"
                              onChange={(e) => setBio(e.target.value)}
                              value={bio}/>
                    <label htmlFor="bio">Bio</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="location" placeholder="Location"
                           onChange={(e) => setLocation(e.target.value)}
                           value={location}/>
                    <label htmlFor="location">Location</label>
                </div>
                <div className="mb-4">
                    <div>
                        <span className="wd-font-small-bold wd-font-grey wd-small-font-size">Birth Date</span>
                        <span className="datepicker-toggle ms-2">
                        <span className="datepicker-toggle-button wd-small-font-size">Edit</span>
                        <input type="date" className="datepicker-input" id="setTodaysDate"
                               max={new Date().toISOString().split('T')[0]}
                               onChange={(e) => setDate(e.target.value)}/>
                    </span>
                    </div>
                    <div className="mt-2">
                        <span className="me-2">{day}</span>
                        <span className="m-2">/</span>
                        <span className="m-2">{month}</span>
                        <span>, </span>
                        <span className="m-2">{year}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EditProfile;