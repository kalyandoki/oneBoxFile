import {IoReloadSharp} from 'react-icons/io5'
import {FaSearch} from 'react-icons/fa'
import './index.css'
import Gmails from '../Gmails'
import ViewReplies from '../ViewReplies'
import Lead from '../Lead'

export default function MailList() {
  return (
    <>
      <div className="index-box-container">
        <div className="index-box">
          <div className="all-con">
            <select className="all-inbox">
              <option>All inbox(s)</option>
            </select>
            <IoReloadSharp />
          </div>
          <p>
            25/25 <span>Inboxes selected</span>
          </p>
          <div className="search">
            <FaSearch />
            <input type="search" placeholder="Search" />
          </div>
          <div className="search">
            <p>26 New Replies</p>
            <select>
              <option>Newest</option>
            </select>
          </div>
          <hr />
          <Gmails />
        </div>
        <div className="main-mail-con">
          <div className="mail-con">
            <div>
              <h1 className="or-h">Orlando</h1>
              <p className="or-p">orladom@gmail.com</p>
            </div>
            <div>
              <select>
                <option>Meeting completed</option>
              </select>
              <select>
                <option>Move</option>
              </select>
              <select>
                <option>...</option>
              </select>
            </div>
          </div>
          <div>
            <ViewReplies />
          </div>
        </div>
        <div>
          <Lead />
        </div>
      </div>
    </>
  )
}
