import {useCallback, useState, useEffect} from 'react'
import { Auth, API, Storage, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
// import { createUser } from '../../graphql/mutations';
// import { updateUser } from '../../graphql/mutations';
import { useHistory } from 'react-router-dom';
import {useDropzone} from 'react-dropzone'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill, {editor} from 'react-quill';
import snow from 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const initialState = { sub: '', username: '', email: '', picture: '', bio: ''}
const EditProfile = () => {
  const [formState, setFormState] = useState(initialState)
  const history = useHistory();
  const userProfile = useSelector(store => store.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  console.log('userprofile', userProfile);
  console.log('quill', value);
  
console.log('hande right before change');
  function handleChangeEditor(editor) {
    console.log('background', editor);
    console.log('formstateis this man', formState);
    setFormState({...formState, bio: editor});
    // let _postForm = this.state.postForm;

    // _postForm.notesValid = true;
    // _postForm.notes = editor;

    // if (editor.length < 30) { _postForm.notesValid = false; }



    // this.setState({ ...this.state, postForm: _postForm });
};


  /**
   * Use Effect
   * Calls function onPageRendered
   */
   useEffect(() => {
    // setFormState({ sub: userProfile.getUser.id})
    if (userProfile.getUser) {
      console.log('user profile get user use effect', userProfile.getUser);
      setFormState({ sub: userProfile.getUser.id, username: userProfile.getUser.username, email: userProfile.getUser.email, picture: userProfile.getUser.picture, bio: userProfile.getUser.Bio});
    } else {
      console.log('thats a bummer man');
      getUser().then(() => {
        console.log('then',userProfile.getUser);
      });
      // dispatch({ 
      //   type: 'FETCH_USER',
      //   payload: userProfile.getUser.id
      // });
    }
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }


  async function getUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      checkIfUserHasProfile(user.attributes.sub);
    } catch (error) {
      console.log('no profile found error', error);
    }
  }

    /**
   * Check if User Has Profile
   * This logic needs refactoring but will address that down the road
   * @param {user sub from aws} user 
   */
     async function checkIfUserHasProfile(user) {
       console.log('user is in check user profile', user);
      try {
        dispatch({ 
          type: 'FETCH_USER',
          payload: user
        });
        console.log('got here yo',userProfile);
        setFormState({ sub: userProfile.getUser.id, username: userProfile.getUser.username, email: userProfile.getUser.email, picture: userProfile.getUser.picture, bio: userProfile.getUser.bio});
        // const userProfile = await API.graphql({ query: queries.getUser, variables: { id: user }});
      } catch (err) {
        console.log('error getting user:', err)
        createUserFunc(user);
      }
    }

        /**
   * Create User Function
   * This creates a record in dynamoDB used for Profile - different from cognito user account
   * @param {user sub from aws} user 
   */
  async function createUserFunc(user) {
    try {
      await API.graphql(graphqlOperation(mutations.createUser, {input: {id: user, userId: user}}))
    } catch (err) {
      console.log('error creating user', err);
    }
  }


console.log('formState', formState);
    /**
   * On Drop
   * Allows users to upload 1 or many documents via drag and drop or click and upload
   * Loops through array of user uploaded files 
   * for each loop the images are uploaded to an S3 folder for storage
   */
     const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
          upLoadToS3(file.name, file);
          getProfilePicture(file.name);
        }
        reader.readAsArrayBuffer(file)
      })
    }, [])

    /**
   * Upload to S3
   * TODO - Description
   * uploads document to S3
   * @param {*} fileName 
   * @param {*} file 
   */
     async function upLoadToS3(fileName, file) {
      try {
        await Storage.put(`userimages/${fileName}`, file, {
          contentType: 'image/png' // contentType is optional
        });
      } catch (error) {
        console.log('Error uploading file: ', error);
      }  
    }

    /**
   * Get Profile Picture
   * is successful returns the users profile picture
   */
     const getProfilePicture = (profileImg) => {
      Storage.get(profileImg)
        .then(url => {
          var myRequest = new Request(url);
          fetch(myRequest).then(function(response) {
            if (response.status === 200) {
              console.log('set PICture', url);
              setFormState({sub: formState.sub, username: formState.username, email: formState.email, picture: url})
            }
          });
        })
        .catch(err => console.log(err));
    };

  /**
   * Update User
   */
  async function updateUserProfile() {
    if (userProfile.getUser.id) {
      try {
        const details = {
          id: userProfile.getUser.id,
          userId: userProfile.getUser.id,
          username: formState.username,
          Bio: formState.bio
        }
        
        await API.graphql({ query: mutations.updateUser, variables: {input: details}});
        dispatch({ 
          type: 'FETCH_USER',
          payload: userProfile.getUser.id
        });
        history.push("/profile");
      } catch (error) {
        console.log('Error updating user:', error);
      }  
    }
  }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="relative block h-96">
      <h1 className="text-white">EDIT PROFILE</h1>
      <form className="p-6 flex flex-col justify-center">
        <div className="flex flex-col">
          <label for="name" className="hidden">Full Name</label>
          <input
            onChange={event => setInput('username', event.target.value)}
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" 
            value={formState.username}
            placeholder="Username"
          />
        </div>
        <h1 className="text-white">BIO</h1>
        <ReactQuill theme="snow" value={formState.bio}           onChange={(newValue, delta, source) => {
            if (source === 'user') {
              setInput('bio', newValue)
            }
          }}
          onBlur={(range, source, quill) => {
            // input.onBlur(quill.getHTML());
          }} placeholder="BIO" className="bg-gray-200"/>

        <div className="flex flex-col mt-2">
          <label for="email" className="hidden">Email</label>
          <input
            onChange={event => setInput('email', event.target.value)}
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" 
            value={formState.email}
            placeholder="Email"
          />     
        </div>

        <div className="flex flex-col mt-2">
        <div className="text-center mt-12">
              <div className="p-10" {...getRootProps()}>
                <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
                  <img className="w-full" src={formState.picture} alt="Upload"></img>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Upload Images</div>
                    <p className="text-white bg-gray-400 text-base max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
                      <input {...getInputProps()} />
                        {
                        isDragActive ?
                        <span>Drop the files here ...</span> :
                        <span>Drag 'n' drop some files here, or click to select files</span>
                      }
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>
              </div>

          </div>



          <label for="tel" className="hidden">Profile Picture</label>
          <input {...getInputProps()} />
          {
            isDragActive ?
            <span>Drop the files here ...</span> :
            <span>Drag 'n' drop some files here, or click to select files</span>
          }
          {/* <input
            onChange={event => setInput('profile_picture', event.target.value)}
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" 
            value={formState.profile_photo}
            placeholder="Enter A User Name"
          />      */}
        </div>
        <button className="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300" onClick={updateUserProfile}>Save Edits</button>
      </form>
    </div>
  );
};

export default  withAuthenticator(EditProfile);