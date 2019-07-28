export const isNil = element => element === null
  || element === undefined
  || (Array.isArray(element) && element.length === 0)
