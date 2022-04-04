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
import { Button, Space, Badge  } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import PostsContainer from '../Posts/PostsContainer';
import { UserOutlined } from '@ant-design/icons';
import { profile } from 'console';
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

        <Row >
            <Col xs={{ span: 24, offset: 1 }}
                md={{ span: 24, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 8, offset: 1 }}
            >
                <Card style={{ marginBottom: '10px', boxShadow: 'rgb(0 0 0 / 50%) 5px 6px 10px -5px', textAlign: 'center' }}>
                    <Col><Image src={props.profile.photos.large} style={{ borderRadius: '10px', paddingBottom:10 }} /></Col>
                    <Button type='primary' icon={<DownloadOutlined />} size={'large'} onClick={() => inRef && inRef.current && inRef.current.click()}>Add image</Button>
                    <input
                        ref={inRef}
                        type={'file'}
                        style={{ display: 'none' }}
                        onChange={addPhoto}
                    />
                    </Card>
                    <Card hoverable style={{ marginBottom: '10px', boxShadow: 'rgb(0 0 0 / 50%) 5px 6px 10px -5px' }}><ProfileStatusWithHooks status={props.status} /></Card>
               

            </Col>
            <Col xs={{ span: 24, offset: 1 }}
                md={{ span: 24, offset: 1 }}
                lg={{ span: 12, offset: 1 }}
                xl={{ span: 14, offset: 1 }}

            >
                <ProfileData {...props.profile} />
                <Card style={{ boxShadow: 'rgb(0 0 0 / 50%) -6px 5px 10px -5px', marginBottom: '10px' }} hoverable
                >
                    <PostForm />
                </Card>
            </Col>

        </Row>
        {props.profile.userId === 21095 && <Row>
            <Col xs={{ span: 24, offset: 1 }}
                md={{ span: 18, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 8, offset: 1 }}

            >
                <Card title='Friends' className={s.avatarCard}>
                    <Row align='middle' justify='center'>
                    <Col xs={{ span: 3, offset: 1 }}
                        md={{ span: 3, offset: 1 }}
                        lg={{ span: 10, offset: 1 }}
                        xl={{ span: 7, offset: 1 }}>
                            <Avatar size={80} src="https://joeschmoe.io/api/v1/random" />
                            <span>Friend</span>
                    </Col>
                    <Col xs={{ span: 3, offset: 1 }}
                        md={{ span: 3, offset: 1 }}
                        lg={{ span: 10, offset: 1 }}
                        xl={{ span: 7, offset: 1 }}>
                            <Avatar size={80} src="https://joeschmoe.io/api/v1/random" />
                            <span>Friend</span>
                    </Col>
                    <Col xs={{ span: 3, offset: 1 }}
                        md={{ span: 3, offset: 1 }}
                        lg={{ span: 10, offset: 1 }}
                        xl={{ span: 7, offset: 1 }}>
                            <Avatar size={80} src="https://joeschmoe.io/api/v1/random" />
                            <span>Friend</span>
                    </Col>
                    <Col xs={{ span: 3, offset: 1 }}
                        md={{ span: 3, offset: 1 }}
                        lg={{ span: 10, offset: 1 }}
                        xl={{ span: 7, offset: 1 }}>
                            <Avatar size={80} src="https://joeschmoe.io/api/v1/random" />
                            <span>Friend</span>
                    </Col>
                    <Col xs={{ span: 3, offset: 1 }}
                        md={{ span: 3, offset: 1 }}
                        lg={{ span: 10, offset: 1 }}
                        xl={{ span: 7, offset: 1 }}>
                            <Avatar size={80} src="https://joeschmoe.io/api/v1/random" />
                            <span>Friend</span>
                    </Col>
                    <Col xs={{ span: 3, offset: 1 }}
                        md={{ span: 3, offset: 1 }}
                        lg={{ span: 10, offset: 1 }}
                        xl={{ span: 7, offset: 1 }}>
                            <Badge count={1}>
                            <Avatar size={80} src="https://joeschmoe.io/api/v1/random" />
                            </Badge>
                            <span>Friend</span>
                    </Col>
                    </Row>
                </Card>
            </Col>
            <Col xs={{ span: 24, offset: 1 }}
                md={{ span: 24, offset: 1 }}
                lg={{ span: 12, offset: 1 }}
                xl={{ span: 14, offset: 1 }}>
                <PostsContainer />
            </Col>
        </Row>}
    </div>)

}

export default ProfileInfo;

