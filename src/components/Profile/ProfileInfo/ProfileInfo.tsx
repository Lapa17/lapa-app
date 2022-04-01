import s from '../Profile.module.css';
import {APIProfileType, updateLargePhoto} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {ChangeEvent} from "react";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {useDispatch} from "react-redux";
import {ProfileData} from "./ProfileData";
import {Avatar, Card, Col, Row} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import { Image } from 'antd';

type ProfileInfoType = {
    profile: APIProfileType
    status: string
}

const ProfileInfo = (props: ProfileInfoType) => {

    const {Meta} = Card;
    const dispatch = useDispatch()

    if (!props.profile) {
        <Preloader/>
    }
    const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(updateLargePhoto(e.target.files[0]))
        }
    }

    return (<div className={s.wrapper}>
        <Row>
            <Col span={8}>
                <Image
                    width={200}
                    src={props.profile.photos.large}
                />
            </Col>
            <Col span={14}>
                <ProfileStatusWithHooks status={props.status}/>
                <input type='file' name="myImg" onChange={addPhoto}/>
                <ProfileData {...props.profile} />
            </Col>
        </Row>
    </div>)

}

export default ProfileInfo;

