
import {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { Storage } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { FaEdit } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
Storage.configure({ track: true });

const LandingPage = () => {
  return (
    <div className="landing-container">
    <ul className="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div className="h-100 container">
      <div className="d-flex h-100 text-white overlay-content align-items-center">
        <div className="w-100">
          <div className="row">
            <div className="col-lg-6">
              <p className="subtitle text-white letter-spacing-3 mb-3 font-weight-light">Too-Social</p>
              <h2 className="display-3 font-weight-bold mb-3">Yet Another Social Media Platform</h2>
            </div>
            <div className="pl-lg-5 my-3 my-md-5 my-lg-0 col-lg-6">
              {/* RIGHT COLUMN */}
            </div>
            <a href="/hikes" className="d-none d-sm-inline-block btn btn-outline-light landing-btn">
              Connect and stuff
              <i className="fa fa-angle-right ml-2"></i>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  ) 
};

export default LandingPage;


