
import {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { Storage } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { FaEdit } from 'react-icons/fa'
import {GrUserSettings} from 'react-icons/gr'
Storage.configure({ track: true });

const Profile = () => {
  const [user, set_user] = useState();
  const [userName, set_user_name] = useState('')
  const [image, setImage] = useState("./assets/img/team-2-800x800.jpg");

  /**
   * Use Effect
   * Calls function onPageRendered
   */
  useEffect(() => {
    getUser();
  }, []);

  /**
   * get User Function - THIS NEEDS REFACTORING 
   * Gets the users data if user is authenticated
   */
  const getUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user', user.attributes);
      set_user_name()
      set_user(user);
      getProfilePicture(user.attributes.picture);
      console.log('success!', user);
    } catch (error) {
      console.log('Error uploading user: ', error);
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
            setImage(url);
          }
        });
      })
      .catch(err => console.log(err));
  };

  /**
   * Set User Profile
   * - if successful sets the users profile and replaces avatar in state
   * @param {*} imgName 
   */
  async function setUserProfile(imgName) {
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
      try {
        await Auth.updateUserAttributes(user, { picture: imgName, preferred_username: 'admin' });
        console.log('success!', user);
      } catch (error) {
        console.log('Error uploading users: ', error);
      }  
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
        setUserProfile(file.name);
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
      console.log('success image upload', file, fileName);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }  
  }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
      {icon}
    </div>
  );
  

  return (
    <div className="">





      
            <section className="relative block h-96">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover bg-gray-800"
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-50 bg-black"
                ></span>
              </div>
              <div
                className="top-auto bottom-0  left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </section>
            <section className="relative py-16 bg-gray-300">
              <div className="container mx-auto px-4">
                <div
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
                >
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div
                        className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                      >
                        <div className="relative">
                          <img
                            alt="..."
                            src={image}
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                            // style={"max-width: 150px;"
                          />
                        </div>
                      </div>
                      <div
                        className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                      >
                        <div className="py-6 px-3 mt-32 sm:mt-0">
                          <button
                            className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            // style="transition: all 0.15s ease 0s;"
                          >
                            <FaEdit size="28" />
                          </button>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                          <div className="mr-4 p-3 text-center">
                            <span
                              className="text-xl font-bold block uppercase tracking-wide text-gray-700"
                              >22</span
                            ><span className="text-sm text-gray-500">Friends</span>
                          </div>
                          <div className="mr-4 p-3 text-center">
                            <span
                              className="text-xl font-bold block uppercase tracking-wide text-gray-700"
                              >10</span
                            ><span className="text-sm text-gray-500">Photos</span>
                          </div>
                          <div className="lg:mr-4 p-3 text-center">
                            <span
                              className="text-xl font-bold block uppercase tracking-wide text-gray-700"
                              >89</span
                            ><span className="text-sm text-gray-500">Comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-12">
                      <div className="p-10" {...getRootProps()}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <img className="w-full" src={image} alt="Upload"></img>
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
                    <div className="mt-10 py-10 border-t border-gray-300 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <p className="mb-4 text-lg leading-relaxed text-gray-800">
                            An artist of considerable range, Jenna the name taken by
                            Melbourne-raised, Brooklyn-based Nick Murphy writes,
                            performs and records all of his own music, giving it a
                            warm, intimate feel with a solid groove structure. An
                            artist of considerable range.
                          </p>
                          <a href="#pablo" className="font-normal text-pink-500"
                            >Show more</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
};

export default withAuthenticator(Profile)


