import React from "react";
const Profile = (
    {
        profile = {
            "firstName": 'firstName',
            "lastName": 'lastName',
            "handle": '@handle',
            "profilePicture": 'nodejs.png',
            "bannerPicture": 'seal.jpg',
            "bio": 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
            "location": 'Boston, MA',
            "dateOfBirth": 'DOB',
            "dateJoined": 'DOJ',
            "followingCount": 340,
            "followersCount": 223,
            'twuitCount': 507,
        }
    }
) => {
    return(
        <>
            <div className="row m-1">
                <div className="col-1 d-flex">
                    <a href="/tuiter/home" className="wd-v-center">
                        <i className="bi bi-arrow-left wd-left-icon-size my-auto wd-icon-bold"/>
                    </a>
                </div>
                <div className="col-11">
                    <div className="mb-0">
                        <span className="wd-large-font-size wd-font-bolder m-0">{profile.firstName} {profile.lastName}</span>
                    </div>
                    <div className="wd-neg-margin">
                        <span className="wd-small-font-size wd-font-grey m-0 wd-font-bold">{profile.twuitCount} Tuits</span>
                    </div>
                </div>
            </div>
            <div className="m-1">
                <img alt="text" className="w-100 opacity-75" src={`/images/${profile.bannerPicture}`}/>
            </div>
            <div className="row m-2">
                <div className="col-8">
                    <img src={`/images/${profile.profilePicture}`} width={120} height={120}
                         className="rounded-circle ms-3 wd-profile-image p-1" alt="text"/>
                </div>
                <div className="col-4">
                    <div className="d-flex flex-row-reverse">
                        <a href="/tuiter/edit-profile">
                            <button className="btn wd-medium-font rounded-pill wd-edit-profile-button">
                                Edit Profile
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <span className="wd-large-font-size wd-font-bolder m-0">{profile.firstName} {profile.lastName}</span>
                </div>
                <div className="wd-neg-margin">
                    <span className="wd-small-font-size wd-font-grey m-0 wd-font-bold">{profile.handle}</span>
                </div>
            </div>
            <div className="mt-3">
                <span className="wd-font-small-bold">{profile.bio}</span>
            </div>
            <div className="wd-font-small-bold wd-small-font wd-font-color-grey mt-2">
                <i className="bi bi-geo-alt"/>
                <span className="ms-1">{profile.location}</span>
                <i className="bi bi-balloon ms-3"/>
                <span className="ms-1">{profile.dateOfBirth}</span>
                <i className="bi bi-calendar3 ms-3"/>
                <span className="ms-1">{profile.dateJoined}</span>
            </div>
            <div className="mt-2">
                <span className="wd-font-bolder">{profile.followingCount}</span>
                <span className="wd-font-color-grey ms-2">Following</span>
                <span className="wd-font-bolder ms-5">{profile.followersCount}</span>
                <span className="wd-font-color-grey ms-2">Followers</span>
            </div>
        </>
    );
};
export default Profile;