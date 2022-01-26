import React from "react";
import * as events from "events";

type ProfileStatusType = {
    status: string
    updateStatus:(status:string)=> void
}

class ProfileStatus extends React.Component<ProfileStatusType>  {

    state = {
        editMode:false,
        status: this.props.status
    }

    onEditMode = () => {
        this.setState({editMode:true})
    }
    offEditMode = () => {
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }
    onChangeInput = (e:any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        this.state.status = this.props.status
    }

    render(): React.ReactNode {
        return (
            <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.onEditMode}>{this.state.status}</span>
                    </div>}
                    {this.state.editMode &&
                    <div>
                        <input autoFocus onChange={this.onChangeInput} value={this.state.status} onBlur={this.offEditMode}/>
                    </div>}
            </div>)
    }
    
    
    
}

export default ProfileStatus;