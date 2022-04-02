import { useDispatch } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import { UpdateProfileType } from "../../../api/profileAPI";
import { updateProfile } from "../../../redux/profile-reducer";
import { Card } from 'antd';
import { Checkbox, Radio, Typography, Divider } from 'antd';
import { CheckOutlined, HighlightOutlined, SmileOutlined, SmileFilled, EditOutlined } from '@ant-design/icons';

import { Button } from 'antd';



type ProfileDataType = {
    aboutMe: string
    userId: number
    fullName: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
    contacts: {
        facebook?: string
        github?: string
        instagram?: string
        mainLink?: string
        twitter?: string
        vk?: string
        website?: string
        youtube?: string
    }
}


export const ProfileData = ({ aboutMe, userId, fullName, lookingForAJob, lookingForAJobDescription, contacts, ...props }: ProfileDataType) => {

    const { Meta } = Card;
    const { Paragraph } = Typography;

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const [profile, setProfile] = useState<UpdateProfileType>({
        aboutMe,
        userId,
        fullName,
        lookingForAJobDescription,
        lookingForAJob,
        contacts: {
            github: contacts.github
        }
    })

    useEffect(() => {
        setProfile(
            {
                aboutMe,
                userId,
                fullName,
                lookingForAJobDescription,
                lookingForAJob,
                contacts: {
                    github: contacts.github
                }

            })
    }, [aboutMe, userId, fullName, lookingForAJob, lookingForAJobDescription, contacts])

    const onValueChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
        switch (name) {
            case "fullName": {
                return setProfile({ ...profile, fullName: e.currentTarget.value })
            }
            case "aboutMe": {
                return setProfile({ ...profile, aboutMe: e.currentTarget.value })
            }
            case "lookingForAJobDescription": {
                return setProfile({ ...profile, lookingForAJobDescription: e.currentTarget.value })
            }
            case "lookingForAJob": {
                return setProfile({ ...profile, lookingForAJob: e.currentTarget.checked })
            }
            case "contacts.github": {
                return setProfile({ ...profile, contacts: { ...contacts, github: e.currentTarget.value } })
            }
            default: {
                return profile
            }
        }
    }

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        dispatch(updateProfile({
            aboutMe: profile.aboutMe,
            userId: profile.userId,
            fullName: profile.fullName,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            lookingForAJob: profile.lookingForAJob,
            contacts: {
                github: profile.contacts.github
            }
        }))
    }

    return (
        <div>

            {!editMode &&
                <Card
                    style={{ marginBottom: '10px', boxShadow:'rgb(0 0 0 / 50%) -6px 5px 10px -5px' }}
                    title={<span>{fullName}<EditOutlined onClick={onEditMode}></EditOutlined></span>}
                    hoverable>
                    <Meta
                        title={aboutMe}
                        description={`I'm ${lookingForAJobDescription} and ${lookingForAJob ? 'find' : 'dont find'} a job`} />
                    <Meta
                        title={<span><a href={contacts.github} target={'_blank'}>
                            {contacts.github}</a></span>} />
                </Card>}
            {editMode &&
                <Card style={{ margin: '10px', borderRadius: '5px' }}
                    title={<span><div>
                        Fullname: <input type="text" value={profile.fullName} onChange={(e) => onValueChange(e, 'fullName')} />
                    </div><Button onClick={offEditMode}>Save</Button></span>}
                    hoverable>

                    <Meta
                        title={<div>
                            About me: <input type="text" value={profile.aboutMe} onChange={(e) => onValueChange(e, 'aboutMe')} />
                        </div>}
                        description={<div>I'm {<span>
                            lookingForAJobDescription: <input type="text" value={profile.lookingForAJobDescription}
                                onChange={(e) => onValueChange(e, 'lookingForAJobDescription')} />
                        </span>} and {<span>
                            lookingForAJob: <input type='checkbox' checked={profile.lookingForAJob} onChange={(e) => onValueChange(e, "lookingForAJob")} />
                        </span>} a job </div>} />

                    <Meta
                        title={<span><a href={contacts.github} target={'_blank'}>
                            {<div>
                                contacts: <input type="text" value={profile.contacts.github}
                                    onChange={(e) => onValueChange(e, 'contacts.github')} />
                            </div>}</a></span>} />


                </Card>}

        </div>
    )
}