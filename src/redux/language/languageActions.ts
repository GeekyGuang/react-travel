export const CHANGE_LANGUAGE = 'change_language'
export const ADD_LANGUAGE = 'add_language'

export const changeLanguageActionCreator = (languageCode: 'zh' | 'en') => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  }
}

export const addLanguageActionCreator = (name: string, code: string) => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code },
  }
}
