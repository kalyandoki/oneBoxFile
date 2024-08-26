import {useState} from 'react'
import {BsFillReplyFill} from 'react-icons/bs'
import {CgArrowAlignV} from 'react-icons/cg'
import AllReplies from '../AllReplies'
import './index.css'

export default function ViewReplies() {
  const [view, setView] = useState(false)
  return (
    <div className={view ? 'view-replies-con-2' : 'view-replies-con'}>
      {view ? (
        <AllReplies />
      ) : (
        <div>
          <p className="today">
            -------------------------------------------------Today-------------------------------------------------
          </p>
          <div className="message-con">
            <div className="view">
              <h1>New Product Launch</h1>
              <p>20 june 2022 : 9:16AM</p>
            </div>
            <div>
              <p>from : jeanne@icloud.com cc : lennon.j@mail.com</p>
              <p>to : lennon.j@mail.com</p>
            </div>
            <div className="hi-first">
              <p>Hi (FIRST_NAME)</p>
              <p>
                would like to introduce you to SaaSgrow, a productized design
                service specifically tailored for saas startups. Our aim is to
                help you enhance the user experience and boost the visual appeal
                of your software products.
              </p>
            </div>
          </div>
          <p className="today" onClick={() => setView(!view)}>
            -------------------------------------------
            <span className="to-span">
              <CgArrowAlignV />
              View all 4 replies
            </span>
            -------------------------------------------
          </p>
          <div className="reply">
            <button className="reply-btn" type="button">
              <BsFillReplyFill />
              Reply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
