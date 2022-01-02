import i18n from 'i18next'
import { CHANGE_LANGUAGE, ADD_LANGUAGE } from './languageActions'

interface LanguageState {
  language: 'en' | 'zh'
  languageList: { name: string; code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ],
}

const languageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload)
      return { ...state, language: action.payload }
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      }
    default:
      return state
  }
}

export default languageReducer