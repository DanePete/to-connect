import {useCallback, useState, useEffect} from 'react'
import { Auth, Storage } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import {useDropzone} from 'react-dropzone'

const initialState = { username: '', email: '', profile_photo: ''}
const EditProfile = () => {
  const [formState, setFormState] = useState(initialState)
  const history = useHistory();

  /**
   * Use Effect
   * Calls function onPageRendered
   */
   useEffect(() => {
    getUser();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function getUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setFormState({ username: user.attributes.preferred_username, email: user.attributes.email, profile_photo:user.attributes.picture})
      getProfilePicture(user.attributes.picture)
    } catch (error) {
      console.log('failed user retrieval', error);
    }
  }

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
          console.log(binaryStr)
          console.log('accented files', file);
          upLoadToS3(file.name, file);
          getProfilePicture(file.name);
        }
        reader.readAsArrayBuffer(file)
      })
      console.log('accented files', acceptedFiles);
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
        await Storage.put(fileName, file, {
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
      console.log('profile img', profileImg);
      Storage.get(profileImg)
        .then(url => {
          var myRequest = new Request(url);
          fetch(myRequest).then(function(response) {
            if (response.status === 200) {
              console.log('url', url)
              setInput('profile_photo', url)
            }
          });
        })
        .catch(err => console.log(err));
    };

  console.log('formstate', formState);

  /**
   * Update User
   */
  async function updateUser() {
    const user = await Auth.currentAuthenticatedUser();
    if (user && formState.username && formState.email && formState.profile_photo) {
      try {
        await Auth.updateUserAttributes(user, { preferred_username: formState.username, picture: formState.profile_photo });
        history.push("/profile");
      } catch (error) {
        console.log('Error uploading users: ', error);
      }  
    }
  }

  /**
   * Set User Profile
   * - if successful sets the users profile and replaces avatar in state
   * @param {*} imgName 
   */
  // async function setUserProfile(imgName) {
  //   const user = await Auth.currentAuthenticatedUser();
  //   if (user) {
  //     try {
  //       await Auth.updateUserAttributes(user, { picture: imgName, preferred_username: 'admin' });
  //       console.log('success!', user);
  //     } catch (error) {
  //       console.log('Error uploading users: ', error);
  //     }  
  //   }
  // }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="relative block h-96">
      <form class="p-6 flex flex-col justify-center">
        <div class="flex flex-col">
          <label for="name" class="hidden">Full Name</label>
          <input
            onChange={event => setInput('username', event.target.value)}
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" 
            value={formState.username}
            placeholder="Enter A User Name"
          />
        </div>

        <div class="flex flex-col mt-2">
          <label for="email" class="hidden">Email</label>
          <input
            onChange={event => setInput('email', event.target.value)}
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" 
            value={formState.email}
            placeholder="Enter A User Name"
          />     
        </div>

        <div class="flex flex-col mt-2">
        <div className="text-center mt-12">
              <div className="p-10" {...getRootProps()}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full" src={formState.profile_photo} alt="Upload"></img>
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
              <h3
                className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
              >
                Jenna Stones
              </h3>
              <div
                className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
              >
                <i
                  className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                ></i>
                Los Angeles, California
              </div>
              <div className="mb-2 text-gray-700 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                >Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-gray-700">
                <i className="fas fa-university mr-2 text-lg text-gray-500"></i
                >University of Computer Science
              </div>
          </div>



          <label for="tel" class="hidden">Profile Picture</label>
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
        <button className="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300" onClick={updateUser}>Save Edits</button>
      </form>
    </div>
  );
};

export default EditProfile;