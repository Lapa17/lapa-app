import Avatar from "./Avatar/Avatar";
import s from '../Profile.module.css';
import ProfileDescription from "./Description/Description";
import { APIProfileType } from "../../../redux/profile-reduser";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: APIProfileType
    status: string
}

const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile) {
        <Preloader />
    }
    debugger
    return (<div className={s.wrapper}>
            <Avatar imgAdress={props.profile.photos.large} />
            <ProfileDescription title={props.profile.fullName} description={props.profile.aboutMe}/>
            <ProfileStatus status={props.status} />
            </div>)
    
    

    // <div className={s.wrapper}>
    //   <Avatar imgAdress='https://vjoy.cc/wp-content/uploads/2020/07/kartinki_muzhskie_na_avu_18_02210535.jpg' />
    //   <ProfileDescription title='Pavel Laparevich' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, repellat molestiae voluptate quas atque architecto praesentium! Tempore labore illum, necessitatibus fugiat voluptate, atque aspernatur totam vitae laborum, facere accusamus illo?' />
    // </div>
    
    
}

export default ProfileInfo;