import { setItem, getItem, removeItem, clearAllItems } from './base'
import { MODE, StorageFunctionType } from './type'

/**
 * underwrite warn
 */
;(function () {
  if (!window) {
    console.error('Non-browser environment!')
  }
})()

export const setLocalItem: StorageFunctionType = (key, value) => {
  return setItem(MODE.LOCAL)(key, value)
}
export const getLocalItem: StorageFunctionType = (key) => {
  return getItem(MODE.LOCAL)(key)
}
export const removeLocalItem: StorageFunctionType = (key) => {
  return removeItem(MODE.LOCAL)(key)
}
export const clearAllLocalItems = () => {
  return clearAllItems(MODE.LOCAL)()
}

export const setSessionItem: StorageFunctionType = (key, value) => {
  return setItem(MODE.SESSION)(key, value)
}
export const getSessionItem: StorageFunctionType = (key) => {
  return getItem(MODE.SESSION)(key)
}
export const removeSessionItem: StorageFunctionType = (key) => {
  return removeItem(MODE.SESSION)(key)
}
export const clearAllSeesionItems: StorageFunctionType = () => {
  return clearAllItems(MODE.SESSION)()
}
