import { useLanguage } from '../context/LanguageContext'

export default function ServerStatusCard({ label, port, isRunning, toggling, onClick }) {
  const { t } = useLanguage()

  return (
    <div
      className={'status-item status-clickable' + (toggling ? ' status-toggling' : '')}
      onClick={onClick}
      title={t('server.toggle', { server: label })}
    >
      <span className="status-label">{label} ({port})</span>
      <span className={'status-value ' + (isRunning ? 'status-online' : 'status-offline')}>
        {isRunning ? t('server.online') : t('server.offline')}
      </span>
    </div>
  )
}
