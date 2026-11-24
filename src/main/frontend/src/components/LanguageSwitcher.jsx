import { useLanguage } from '../context/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <label className="language-switcher">
      <span>{t('language.label')}</span>
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </label>
  )
}
