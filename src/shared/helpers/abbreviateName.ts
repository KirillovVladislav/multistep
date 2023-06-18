export const abbreviateName = (name: string): string => {
  const words: string[] = name.split(' ')
  const initials: string[] = words.map((word: string) => word[0])
  return initials.join('')
}
