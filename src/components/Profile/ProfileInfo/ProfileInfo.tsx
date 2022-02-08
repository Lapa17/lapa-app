import Avatar from "./Avatar/Avatar";
import s from '../Profile.module.css';
import ProfileDescription from "./Description/Description";
import {APIProfileType, updateLargePhoto} from "../../../redux/profile-reduser";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: APIProfileType
    status: string
    updateStatus:(status:string)=> void
    updateLargePhoto: (photo:string)=> void
}

const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile) {
        <Preloader />
    }
    const addPhoto = () => {
        props.updateLargePhoto('https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg')
    }

    return (<div className={s.wrapper}>
            <Avatar imgAdress={props.profile.photos.large} />
            {/*<button onClick={addPhoto}>add photo</button>*/}
            <ProfileDescription title={props.profile.fullName} description={props.profile.aboutMe}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>)
    
    

    // <div className={s.wrapper}>
    //   <Avatar imgAdress='https://vjoy.cc/wp-content/uploads/2020/07/kartinki_muzhskie_na_avu_18_02210535.jpg' />
    //   <ProfileDescription title='Pavel Laparevich' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, repellat molestiae voluptate quas atque architecto praesentium! Tempore labore illum, necessitatibus fugiat voluptate, atque aspernatur totam vitae laborum, facere accusamus illo?' />
    // </div>
    
    
}

export default ProfileInfo;