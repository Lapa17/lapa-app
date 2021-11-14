import { v1 } from "uuid"
import { ActionType,NavbarRightType } from "./store"


const initialNavbarState = {
    friends: [
      { id: v1(), name: 'Pashka' },
      { id: v1(), name: 'Maks' },
      { id: v1(), name: 'Vlad' },
      { id: v1(), name: 'Leha' }
    ]
  }

const navbarRightReduser = (state: NavbarRightType = initialNavbarState, action: ActionType) => {
    
        return state;
    }

export default navbarRightReduser;