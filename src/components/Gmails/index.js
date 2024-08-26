import {BiNavigation} from 'react-icons/bi'
import {useState} from 'react'
import './index.css'

const mailData = [
  {
    id: 1,
    mail: 'Beata@gmail.com',
    message: "I've tried a lot and",
    date: 'Mar 7',
    opinion: 'Interested',
    name: 'Campaign Name',
  },
  {
    id: 2,
    mail: 'Sanya@gmail.com',
    message: "I've tried a lot and .",
    date: 'Mar 7',
    opinion: 'Closed',
    name: 'Campaign Name',
  },
  {
    id: 3,
    mail: 'william@gmail.com',
    message: 'Payment not going through',
    date: 'Mar 7',
    opinion: 'Interested',
    name: 'Campaign Name',
  },
  {
    id: 4,
    mail: 'johnson@gmail.com',
    message: 'Could you tell me more about it',
    date: 'Mar 7',
    opinion: 'Meeting Booked',
    name: 'Campaign Name',
  },
  {
    id: 5,
    mail: 'orlando@gmail.com',
    message: 'Hi, I am interested',
    date: 'Mar 7',
    opinion: 'Meeting Completed',
    name: 'Campaign Name',
  },
  {
    id: 6,
    mail: 'Beata@gmail.com',
    message: "I've tried a lot and",
    date: 'Mar 7',
    opinion: 'Interested',
    name: 'Campaign Name',
  },
  {
    id: 7,
    mail: 'Sanya@gmail.com',
    message: "I've tried a lot and .",
    date: 'Mar 7',
    opinion: 'Closed',
    name: 'Campaign Name',
  },
  {
    id: 8,
    mail: 'william@gmail.com',
    message: 'Payment not going through',
    date: 'Mar 7',
    opinion: 'Interested',
    name: 'Campaign Name',
  },
  {
    id: 9,
    mail: 'johnson@gmail.com',
    message: 'Could you tell me more about it',
    date: 'Mar 7',
    opinion: 'Meeting Booked',
    name: 'Campaign Name',
  },
  {
    id: 10,
    mail: 'orlando@gmail.com',
    message: 'Hi, I am interested',
    date: 'Mar 7',
    opinion: 'Meeting Completed',
    name: 'Campaign Name',
  },
  {
    id: 11,
    mail: 'Beata@gmail.com',
    message: "I've tried a lot and",
    date: 'Mar 7',
    opinion: 'Interested',
    name: 'Campaign Name',
  },
  {
    id: 12,
    mail: 'Sanya@gmail.com',
    message: "I've tried a lot and .",
    date: 'Mar 7',
    opinion: 'Closed',
    name: 'Campaign Name',
  },
  {
    id: 13,
    mail: 'william@gmail.com',
    message: 'Payment not going through',
    date: 'Mar 7',
    opinion: 'Interested',
    name: 'Campaign Name',
  },
  {
    id: 14,
    mail: 'johnson@gmail.com',
    message: 'Could you tell me more about it',
    date: 'Mar 7',
    opinion: 'Meeting Booked',
    name: 'Campaign Name',
  },
  {
    id: 15,
    mail: 'orlando@gmail.com',
    message: 'Hi, I am interested',
    date: 'Mar 7',
    opinion: 'Meeting Completed',
    name: 'Campaign Name',
  },
]

export default function Gmails() {
  const [user] = useState(mailData)

  return (
    <div>
      <ul className="ul-container">
        {user.map(each => (
          <li>
            <div className="li-mail">
              <h1 className="p-mail">{each.mail}</h1>
              <p className="date">{each.date}</p>
            </div>
            <p className="mess">{each.message}</p>
            <div className="li-mail">
              <p className="opinion">* {each.opinion}</p>
              <p className="name-c">
                <BiNavigation />
                {each.name}
              </p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}
