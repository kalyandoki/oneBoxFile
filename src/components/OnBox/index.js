import {useState} from 'react'
import './index.css'
import Navbar from '../Navbar'
import MailList from '../MailList'

export default function OnBox() {
  const [checkBox, setCheckBox] = useState(false)
  return (
    <>
      <div className={checkBox ? 'onbox2' : 'onbox-container'}>
        <div>
          <Navbar />
        </div>
        <div className="container-box">
          <div className="one-box">
            <h1>OneBox</h1>
            <div className="light-container">
              <div>
                <label className="flex cursor-pointer gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input
                    onClick={() => setCheckBox(!checkBox)}
                    type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </label>
              </div>
              <select className="select-container">
                <option>Tim`s Workspace</option>
                <option>ram`s Workspace</option>
                <option>ban`s Workspace</option>
                <option>ven`s Workspace</option>
              </select>
            </div>
          </div>
          {/* <div className="image-container">
            <img
              className="mail"
              src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?w=1480&t=st=1724580220~exp=1724580820~hmac=b1440e1a656631a8aecf3be6f1891e5c418c139a4eeeadefd86197f2b6242970"
              width="250px"
              alt="email"
            />
            <p className="img-text">
              It’s the beginning of a legendary sales pipeline
            </p>
            <p className="img-down-text">When you have inbound E-mails</p>
            <p className="img-down-text">you’ll see them here</p>
          </div> */}
          <div>
            <MailList />
          </div>
        </div>
      </div>
    </>
  )
}
