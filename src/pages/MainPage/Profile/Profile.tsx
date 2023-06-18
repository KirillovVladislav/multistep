import Folder from '../../../assets/icons/Folder.svg'
import { aboutMeInfo } from '../../../shared/constants/profile'
import { abbreviateName } from '../../../shared/helpers/abbreviateName'

import s from './Profile.module.scss'

export const Profile = () => (
  <div className={s.container}>
    <div className={s.avatar}>
      <span>{abbreviateName(aboutMeInfo.fullName)}</span>
    </div>
    <div className={s.profile}>
      <div className={s.fullname}>{aboutMeInfo.fullName}</div>
      <ul className={s.contacts}>
        {aboutMeInfo.contacts.map(({ title, link }) => (
          <li key={title} className={s.contact}>
            <a href={link} rel='noreferrer' target='_blank'>
              <img alt='folder' src={Folder} />
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
