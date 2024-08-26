import {useState} from 'react'

const replies = [
  {
    id: 1,
    day: 'Today',
    head: 'New Product Launch',
    date: '20 june 2022 : 9:16AM',
    fromMail: 'jeanne@icloud.com cc : lennon.j@mail.com',
    toMail: 'lennon.j@mail.com',
  },
  {
    id: 2,
    day: 'Yesterday',
    head: 'New Product Launch',
    date: '19 june 2022 : 10:30AM',
    fromMail: 'jeanne@icloud.com cc : lennon.j@mail.com',
    toMail: 'lennon.j@mail.com',
  },
  {
    id: 3,
    day: 'Yesterday',
    head: 'New Product Launch',
    date: '19 june 2022 : 8:16AM',
    fromMail: 'jeanne@icloud.com cc : lennon.j@mail.com',
    toMail: 'lennon.j@mail.com',
  },
  {
    id: 4,
    day: 'Yesterday',
    head: 'New Product Launch',
    date: '19 june 2022 : 8:16AM',
    fromMail: 'jeanne@icloud.com cc : lennon.j@mail.com',
    toMail: 'lennon.j@mail.com',
  },
  {
    id: 5,
    day: 'Today',
    head: 'New Product Launch',
    date: '20 june 2022 : 9:16AM',
    fromMail: 'jeanne@icloud.com cc : lennon.j@mail.com',
    toMail: 'lennon.j@mail.com',
  },
  {
    id: 6,
    day: 'Yesterday',
    head: 'New Product Launch',
    date: '20 june 2022 : 9:16AM',
    fromMail: 'jeanne@icloud.com cc : lennon.j@mail.com',
    toMail: 'lennon.j@mail.com',
  },
]

export default function AllReplies() {
  const [data] = useState(replies)
  return (
    <div>
      <ul>
        {data.map(each => (
          <li>
            <p className="today">
              ---------------------------{each.day}
              -----------------------------
            </p>
            <div className="message-con">
              <div className="view">
                <h1>{each.head}</h1>
                <p>{each.date}</p>
              </div>
              <div>
                <p>from : {each.fromMail}</p>
                <p>to : {each.toMail}</p>
              </div>
              <div className="hi-first">
                <p>Hi (FIRST_NAME)</p>
                <p>
                  would like to introduce you to SaaSgrow, a productized design
                  service specifically tailored for saas startups. Our aim is to
                  help you enhance the user experience and boost the visual
                  appeal of your software products.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
