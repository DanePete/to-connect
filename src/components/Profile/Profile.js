
import {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { Storage } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { FaEdit } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser'
import placeholder from '../Profile/temp.jpg'
console.log('place holder', placeholder
);
Storage.configure({ track: true });

const Profile = () => {
  // const [user, set_user] = useState();
  const [userName, set_user_name] = useState('')
  const [image, setImage] = useState(placeholder);
  const history = useHistory();
  const userProfile = useSelector(store => store.user);

  console.log('user profile PROFILE', userProfile);
 
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
                            onClick={() => {
                              history.push('/edit-profile')
                            }}
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
                      {/* <div className="p-10" {...getRootProps()}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <img className="w-full" src={image} alt="Upload"></img>
                          </div>
                          <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                          </div>
                        </div> */}
                      </div>
                      <h3
                        className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                      >
                        {userProfile.getUser.username}
                      </h3>
                      <div
                        className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                      >
                        <i
                          className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                        ></i>
                        TODO: LOCATION?
                      </div>
                      <div className="mb-2 text-gray-700 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                        >Titles....
                      </div>
                      <div className="mb-2 text-gray-700">
                        <i className="fas fa-university mr-2 text-lg text-gray-500"></i
                        >Roles.... ETC...
                      </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-gray-300 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <p className="mb-4 text-lg leading-relaxed text-gray-800">
                            {parse(userProfile.getUser.Bio)}
                          </p>
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


