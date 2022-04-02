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

        <Row >
            <Col xs={{ span: 24, offset: 1 }}
                md={{ span: 18, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 8, offset: 1 }}
                style={{boxShadow:'rgb(0 0 0 / 50%) 1px 2px 10px -5px', borderRadius: '10px', paddingTop:'30px', marginBottom:'10px', background:'#f5f6f7'}}
                >
                <Row justify="center" ><Image src={props.profile.photos.large} style={{borderRadius:'10px'}}/></Row>
                <Row justify="center" style={{padding: '30px'}}>
                    <Button type='primary' icon={<DownloadOutlined />}  size={'large'} onClick={() => inRef && inRef.current && inRef.current.click()}>Add image</Button>
                    <input
                        ref={inRef}
                        type={'file'}
                        style={{ display: 'none' }}
                        onChange={addPhoto}
                    />
                    </Row>
            </Col>

            <Col xs={{ span: 24, offset: 1 }}
                md={{ span: 18, offset: 1 }}
                lg={{ span: 12, offset: 1 }}
                xl={{ span: 14, offset: 1 }}
                
                >
                <ProfileData {...props.profile} />
                <Card hoverable style={{marginBottom:'10px',boxShadow: 'rgb(0 0 0 / 50%) -6px 5px 10px -5px'}}><ProfileStatusWithHooks status={props.status} /></Card>
                <Card style={{boxShadow:'rgb(0 0 0 / 50%) -6px 5px 10px -5px', marginBottom:'10px'}} hoverable>
                    <PostForm />
                </Card>
            </Col>
        </Row>

    </div>)

}

export default ProfileInfo;

