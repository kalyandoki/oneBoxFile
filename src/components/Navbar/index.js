import {CgMail} from 'react-icons/cg'
import {IoHome} from 'react-icons/io5'
import {MdPersonSearch} from 'react-icons/md'
import {BiNavigation} from 'react-icons/bi'
import {FcMenu} from 'react-icons/fc'
import {RiInboxFill} from 'react-icons/ri'
import {VscGraph} from 'react-icons/vsc'
import './index.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <CgMail className="icon" />
      </div>
      <div className="midle-nav">
        <IoHome className="icon" />
        <MdPersonSearch className="icon" />
        <CgMail className="icon" />
        <BiNavigation className="icon" />
        <FcMenu className="icon" />
        <RiInboxFill className="icon" />
        <VscGraph className="icon" />
      </div>
      <div>
        <h1 className="user">PK</h1>
      </div>
    </div>
  )
}
