import Avatar from "./Avatar/Avatar";
import s from '../Profile.module.css';
import {APIProfileType, updateLargePhoto} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { ChangeEvent} from "react";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import {useDispatch} from "react-redux";
import { ProfileData } from "./ProfileData";

type ProfileInfoType = {
    profile: APIProfileType
    status: string
}

const ProfileInfo = (props: ProfileInfoType) => {

    const dispatch = useDispatch()

    if (!props.profile) {
        <Preloader />
    }
    const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(updateLargePhoto(e.target.files[0]))
        }
    }

    return (<div className={s.wrapper}>
        <Avatar imgAdress={props.profile.photos.large} />
        <ProfileStatusWithHooks status={props.status} />
        <input type='file' name="myImg" onChange={addPhoto} />
        <ProfileData {...props.profile} />
    </div>)

}

export default ProfileInfo;




