export const enumSelectOptions = <T extends string>(
  enumObj: Record<T, string>
): Array<{ value: string; label: T }> =>
  Object.keys(enumObj).map((key) => ({
    value: enumObj[key as keyof typeof enumObj],
    label: key as T
  }))
