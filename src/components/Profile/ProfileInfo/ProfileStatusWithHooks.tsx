import React, {useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
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
    
    

