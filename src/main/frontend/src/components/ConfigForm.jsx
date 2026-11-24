import { useLanguage } from '../context/LanguageContext'

export default function ConfigForm({ config, onChange }) {
  const { t } = useLanguage()

  function update(field, value) {
    onChange({ ...config, [field]: value })
  }

  return (
    <div className="config-form">
      <div className="form-group">
        <label>{t('config.ip')}</label>
        <input type="text" value={config.ip}
          onChange={e => update('ip', e.target.value)} />
      </div>
      <div className="form-group">
        <label>{t('config.ldapPort')}</label>
        <input type="number" value={config.ldapPort}
          onChange={e => update('ldapPort', parseInt(e.target.value) || 1389)} />
      </div>
      <div className="form-group">
        <label>{t('config.ldapsPort')}</label>
        <input type="number" value={config.ldapsPort}
          onChange={e => update('ldapsPort', parseInt(e.target.value) || 1669)} />
      </div>
      <div className="form-group">
        <label>{t('config.httpPort')}</label>
        <input type="number" value={config.httpPort}
          onChange={e => update('httpPort', parseInt(e.target.value) || 3456)} />
      </div>
      <div className="form-group">
        <label>{t('config.rmiPort')}</label>
        <input type="number" value={config.rmiPort}
          onChange={e => update('rmiPort', parseInt(e.target.value) || 1099)} />
      </div>
      <div className="form-group">
        <label>{t('config.aesKey')}</label>
        <input type="text" value={config.AESkey}
          onChange={e => update('AESkey', e.target.value)} />
      </div>
      <div className="form-group">
        <label>{t('config.ldapUser')}</label>
        <input type="text" value={config.user} placeholder={t('config.ldapUserPlaceholder')}
          onChange={e => update('user', e.target.value)} />
      </div>
      <div className="form-group">
        <label>{t('config.ldapPassword')}</label>
        <input type="password" value={config.PASSWD} placeholder={t('config.ldapPasswordPlaceholder')}
          onChange={e => update('PASSWD', e.target.value)} />
      </div>
      <div className="form-group">
        <label>{t('config.jksPassword')}</label>
        <input type="password" value={config.keyPass} placeholder={t('config.jksPasswordPlaceholder')}
          onChange={e => update('keyPass', e.target.value)} />
      </div>
      <div className="form-group">
        <label>{t('config.jksCert')}</label>
        <input type="text" value={config.certFile} placeholder={t('config.jksCertPlaceholder')}
          onChange={e => update('certFile', e.target.value)} />
      </div>
      <div className="form-group" style={{ gridColumn: 'span 3' }}>
        <label className="form-group" style={{ marginBottom: 0 }}>
          <input type="checkbox" checked={config.TLSProxy}
            onChange={e => update('TLSProxy', e.target.checked)} /> {t('config.tlsProxy')}
        </label>
      </div>
    </div>
  )
}
