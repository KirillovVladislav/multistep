export enum ERoutes {
  MAIN = '/',
  CREATE = '/create'
}

export enum Sex {
  man = 'man',
  woman = 'woman'
}

export enum Check {
  FIRST_OPTION = '1',
  SECOND_OPTION = '2',
  THIRD_OPTION = '3'
}

export const checkOptions: Record<Check, string> = {
  [Check.FIRST_OPTION]: '1',
  [Check.SECOND_OPTION]: '2',
  [Check.THIRD_OPTION]: '3'
}
