import s from '../Profile.module.css';
import { APIProfileType, updateLargePhoto } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { ChangeEvent, MouseEventHandler, useRef } from "react";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import { useDispatch } from "react-redux";
import { ProfileData } from "./ProfileData";
import { Avatar, Card, Col, Row } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Image } from 'antd';
import { Button, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { PostForm } from '../../Forms/PostForm';

type ProfileInfoType = {
    profile: APIProfileType
    status: string

}

const ProfileInfo = (props: ProfileInfoType) => {
    const inRef = useRef<HTMLInputElement>(null);
    const { Meta } = Card;
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

        <Row gutter={[8, 8]}>
            <Col xs={{ span: 24, offset: 1 }}
                md={{ span: 18, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 8, offset: 1 }}>
                <Card hoverable
                    cover={<img alt="example" src={props.profile.photos.large}
                    style={{borderRadius: '5px'}} />}
                >
                    <Button icon={<DownloadOutlined />} size={'large'} onClick={() => inRef && inRef.current && inRef.current.click()}>Add image</Button>
                    <input
                        ref={inRef}
                        type={'file'}
                        style={{ display: 'none' }}
                        onChange={addPhoto}
                    />

                </Card>
            </Col>

            <Col xs={{ span: 24, offset: 1 }}
                md={{ span: 18, offset: 1 }}
                lg={{ span: 12, offset: 1 }}
                xl={{ span: 14, offset: 1 }}
                
                >
                <ProfileData {...props.profile} />
                <Card hoverable style={{margin:'10px', borderRadius: '5px'}}><ProfileStatusWithHooks status={props.status} /></Card>
                <Card style={{margin:'10px', borderRadius: '5px'}} hoverable>
                    <PostForm />
                </Card>
            </Col>
        </Row>

    </div>)

}

export default ProfileInfo;

