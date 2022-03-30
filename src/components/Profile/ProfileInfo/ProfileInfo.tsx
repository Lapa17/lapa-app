import Avatar from "./Avatar/Avatar";
import s from '../Profile.module.css';
import ProfileDescription from "./Description/Description";
import {APIProfileType, updateLargePhoto} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ChangeEvent, useState} from "react";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {UpdateProfileType} from "../../../api/profileAPI";

type ProfileInfoType = {
    profile: APIProfileType
    status: string
    updateStatus: (status: string) => void
    updateLargePhoto: (photo: File) => void
    updateProfile: (profile:UpdateProfileType)=>void
}

const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState('')


    if (!props.profile) {
        <Preloader/>
    }
    const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.updateLargePhoto(e.target.files[0])
        }
    }
    const onEditMode = () =>{
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        debugger
        props.updateProfile({
            aboutMe: 'пытаюсь сделать форму для редактирования профиля',
            userId: props.profile.userId,
            fullName: props.profile.fullName,
            lookingForAJobDescription:'asd',
            lookingForAJob: true,
            contacts:{
                github: value
            }
        })
    }
    const onChangeInput = (e: any) => {
        setValue(e.currentTarget.value)
    }


    return (<div className={s.wrapper}>
        <Avatar imgAdress={props.profile.photos.large}/>
        <ProfileDescription title={props.profile.fullName} description={props.profile.aboutMe}/>
        <div onDoubleClick={onEditMode}>
            <strong>Github</strong>:
            {!editMode && <span><a href={props.profile.contacts?.github} target={'_blank'}>
                {props.profile.contacts?.github}</a></span>}
            {editMode && <input type={"text"} value={value} onChange={onChangeInput} onBlur={offEditMode}/>}

        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <input type='file' name="myImg" onChange={addPhoto}/>
    </div>)

    // <div className={s.wrapper}>
    //   <Avatar imgAdress='https://vjoy.cc/wp-content/uploads/2020/07/kartinki_muzhskie_na_avu_18_02210535.jpg' />
    //   <ProfileDescription title='Pavel Laparevich' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, repellat molestiae voluptate quas atque architecto praesentium! Tempore labore illum, necessitatibus fugiat voluptate, atque aspernatur totam vitae laborum, facere accusamus illo?' />
    // </div>


}


export default ProfileInfo;