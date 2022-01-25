import React from "react";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType>  {
    
    state = {
        editMode:false
    }

    onEditMode = () => {
        this.setState({editMode:true})
    }
    offEditMode = () => {
        this.setState({editMode:false})
    }
    
    
    render(): React.ReactNode {
        return (
            <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.onEditMode}>{this.props.status}</span>
                    </div>}
                    {this.state.editMode &&
                    <div>
                        <input autoFocus value={this.props.status} onBlur={this.offEditMode}/>
                    </div>}
            </div>)
    }
    
    
    
}

export default ProfileStatus;