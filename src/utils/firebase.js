import * as firebase from "firebase";
import config from "../../firebase.json";

const app = firebase.initializeApp(config)

const Auth= app.auth();

/*이미지 업로드*/
const uploadImage = async uri =>{
    const blob = await new Promise((resolve, reject)=>{
        const xhr =  new XMLHttpRequest();
        xhr.onload = function() {
            resolve(xhr.response);
        };
        xhr.onerror=function(e){
            reject(new TypeError("NEWTWORK REQUEST FAILED"));
        };
        xhr.responseType="blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
    });

    const user = Auth.currentUser;
    const ref = app.storage().ref(`/profile/${user.uid}/photo.png`);
    const snapshot= await ref.put(blob ,{contentType:"image/png"})

    blob.close();
    return await snapshot.ref.getDownloadURL();
};

/*로그인 기능*/
export const login = async ({email, password}) =>{
    const {user} =  await Auth.signInWithEmailAndPassword(email, password);
    return user;
}

/*로그아웃*/
export const logout = async()=>{
    return await Auth.signOut();
}

/*회원가입 기능*/
export const signup = async({email, password, photoUrl, name}) =>{
    const {user} = await Auth.createUserWithEmailAndPassword(email, password);
    const storageUrl = photoUrl.startsWith("https")
    ? photoUrl 
    : await uploadImage(photoUrl);
    await user.updateProfile({
        displayName:name,
        photoURL:storageUrl,
    })
    return user;
}