import { useLanguage } from '../context/LanguageContext'
import { EXECUTION_MODES, getExecutionMode } from '../utils/execution'

export default function ExecutionModeSelector({ value, onChange }) {
  const { t } = useLanguage()
  const selectedMode = getExecutionMode(value)

  return (
    <fieldset className="execution-modes">
      <legend>{t('execution.title')}</legend>
      <div className="execution-mode-list">
        {EXECUTION_MODES.map(mode => (
          <label className="adv-check" key={mode.value || 'runtime'} title={t(mode.descriptionKey)}>
            <input
              type="radio"
              name="execution-mode"
              value={mode.value}
              checked={value === mode.value}
              onChange={e => onChange(e.target.value)}
            />
            <span>{mode.label}</span>
            <span className="execution-mode-help" aria-hidden="true">?</span>
          </label>
        ))}
      </div>
      <p className="execution-mode-description">{t(selectedMode.descriptionKey)}</p>
    </fieldset>
  )
}
