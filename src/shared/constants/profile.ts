interface Contact {
  link: string
  title: string
}

interface AboutMeInfo {
  fullName: string
  contacts: Contact[]
}

export const aboutMeInfo: AboutMeInfo = {
  fullName: 'Владислав Кириллов',
  contacts: [
    { link: 'https://t.me/Aster_qqq', title: 'Telegram' },
    {
      link: 'https://github.com/KirillovVladislav',
      title: 'Github'
    },
    {
      link: 'https://github.com/KirillovVladislav',
      title: 'Resume'
    }
  ]
}
