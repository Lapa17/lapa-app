import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { updateStatus } from "../../../redux/profile-reducer";

type ProfileStatusType = {
    status: string
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        dispatch(updateStatus(status))
    }
    const onChangeInput = (e: any) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={onEditMode}>{props.status || 'clear status'}</span>
            </div>}
            {editMode &&
            <div>
                <input autoFocus onChange={onChangeInput} value={status} onBlur={offEditMode}/>
            </div>}
        </div>)
}
    
    

