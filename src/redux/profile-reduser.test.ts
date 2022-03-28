import {addPostAC, deletePostAC, profileReduser, setStatus, setUserProfile, updatePhoto} from "./profile-reduser";
import {v1} from "uuid";

const State = {
    posts: [
        { id: v1(), postMessage: "Hi, I'm Pavel", likes: 10 },
        { id: v1(), postMessage: "Let's go to learn a React", likes: 9 },
        { id: v1(), postMessage: "Also we need improve our html/css skills", likes: 11 },
        { id: v1(), postMessage: "Then we'll learn Redux", likes: 22 }
    ],
    myPost: 'My posts',
    newPost: 'New post',
    profile: { aboutMe: '', userId: 0, fullName: '', photos: { small: '', large: '' }
    },
    status:'',
}


test('New post should be added', () => {
    const action = addPostAC('Post for testing')
    const newState = profileReduser(State, action)
    expect(newState.posts.length).toBe(5);
    expect(newState.posts[4].postMessage).toBe('Post for testing')
});

test('After deleting post, numbers of posts should be decrement', () => {
    const action = deletePostAC(State.posts[0].id)
    const newState = profileReduser(State, action)
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[0].postMessage).toBe("Let's go to learn a React")
});

test('After setting user profile', () => {
    const userProfile = {
        aboutMe: '',
        contacts: {facebook: null, website: null, vk: null, twitter: null, instagram: null,},
        fullName: "Lapa17",
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {small: 'https://social-network.samuraijs.com/activecontent/images/users/21095/user-small.jpg?v=6',
            large: 'https://social-network.samuraijs.com/activecontent/images/users/21095/user.jpg?v=6'},
        userId: 21095,
    }
    const action = setUserProfile(userProfile)
    const newState = profileReduser(State, action)
    expect(newState.profile.userId).toBe(21095);
    expect(newState.profile.fullName).toBe("Lapa17")
});

test('After setting status to profile', () => {
    const action = setStatus('Hello')
    const newState = profileReduser(State, action)
    expect(newState.status).toBe('Hello');
});
