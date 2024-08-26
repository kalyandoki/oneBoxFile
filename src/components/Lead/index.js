import {CgMail} from 'react-icons/cg'
import {BiNavigation} from 'react-icons/bi'
import './index.css'

export default function Lead() {
  return (
    <div>
      <h1 className="lead-d">Lead Details</h1>
      <div className="lead-name">
        <p className="l-name">Name</p>
        <p>Orlando</p>
      </div>
      <div className="lead-name">
        <p className="l-name">Contact No</p>
        <p>+54-9062827869</p>
      </div>
      <div className="lead-name">
        <p className="l-name">Email ID</p>
        <p>orlando@gmail.com</p>
      </div>
      <div className="lead-name">
        <p className="l-name">Linkedin</p>
        <p>linkedin.com/in/timvadde/</p>
      </div>
      <div className="lead-name">
        <p className="l-name">Company Name</p>
        <p>Reachinbox</p>
      </div>
      <div>
        <h1 className="lead-d">Activities</h1>
        <div>
          <h1 className="cam">Campaign Name</h1>
          <p className="cam">3 Steps | 5 Days in Sequence</p>
        </div>
        <div className="step-mail">
          <CgMail className="icon" />
          <div className="step">
            <h1 className="s-e">Step-1 : Email</h1>
            <div className="step-1">
              <BiNavigation className="navg" />
              <p>sent</p>
              <p>3rd, Feb</p>
            </div>
          </div>
        </div>
        <div className="step-mail">
          <CgMail className="icon" />
          <div className="step">
            <h1 className="s-e">Step-1 : Email</h1>
            <div className="step-1">
              <CgMail className="icon-mini" />
              <p>sent</p>
              <p>3rd, Feb</p>
            </div>
          </div>
        </div>
        <div className="step-mail">
          <CgMail className="icon" />
          <div className="step">
            <h1 className="s-e">Step-1 : Email</h1>
            <div className="step-1">
              <CgMail className="icon-mini" />
              <p>sent</p>
              <p>3rd, Feb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
