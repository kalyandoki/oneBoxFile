import {Link} from 'react-router-dom'
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'
import {CgMail} from 'react-icons/cg'
import './index.css'

export default function GoogleLoginForm() {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <CgMail className="icon" />
          <h1 className="head-reach">REACHINBOX</h1>
        </div>
        <div className="container">
          <div className="login-container">
            <h1 className="create">Create a new account</h1>
            <GoogleOAuthProvider
              className="google"
              clientId="670542141208-ju5c1jkph0trf6ihdfs9f3ft6i0mc50s.apps.googleusercontent.com"
            >
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse.credential)
                  console.log(decoded)
                }}
                onError={() => {
                  console.log('Login Failed')
                }}
              />
            </GoogleOAuthProvider>
            <Link to="/oneBox">
              <button className="btn" type="button">
                One Box File
              </button>
            </Link>
            <button className="btn" type="button">
              Create an Account
            </button>
            <p className="sing">
              Already have an account? <span>Sign In</span>
            </p>
          </div>
        </div>
        <div>
          <p className="one-line">© 2023 Reachinbox. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}
