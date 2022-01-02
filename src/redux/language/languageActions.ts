export const CHANGE_LANGUAGE = 'change_language'
export const ADD_LANGUAGE = 'add_language'

interface ChangeLanguageActionCreator {
  type: typeof CHANGE_LANGUAGE
  payload: 'zh' | 'en'
}

interface AddLanguageActionCreator {
  type: typeof ADD_LANGUAGE
  payload: { name: string; code: string }
}

export type LanguageActionTypes =
  | ChangeLanguageActionCreator
  | AddLanguageActionCreator

export const changeLanguageActionCreator = (
  languageCode: 'zh' | 'en'
): ChangeLanguageActionCreator => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  }
}

export const addLanguageActionCreator = (
  name: string,
  code: string
): AddLanguageActionCreator => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code },
  }
}
