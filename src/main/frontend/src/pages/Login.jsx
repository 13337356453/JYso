import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, setAuthToken } from '../api'
import ParticleBackground from '../components/ParticleBackground'
import { useLanguage } from '../context/LanguageContext'

const SpinnerIcon = () => (
  <svg className="btn-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
)

export default function Login() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [username, setUsername] = useState('qi')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await login(username, password)
      if (res.data && res.data.token) {
        setAuthToken(res.data.token)
        navigate('/dashboard', { replace: true })
      } else {
        setError(t('login.unexpectedResponse'))
      }
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          setError(t('login.invalidCredentials'))
        } else {
          setError(t('login.serverError', { status: e.response.status }))
        }
      } else if (e.request) {
        setError(t('login.connectionError'))
      } else {
        setError(t('login.error', { message: e.message }))
      }
      setPassword('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-wrapper">
      <ParticleBackground />
      <div className="login-acrylic-card">
        <div className="login-inner">
          <h1>JYso</h1>
          <p className="subtitle">{t('login.subtitle')}</p>
          <p className="tagline">{t('login.tagline')}</p>
          {error && <div className="error-msg">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t('login.username')}</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder={t('login.usernamePlaceholder')}
              />
            </div>
            <div className="form-group">
              <label>{t('login.password')}</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={t('login.passwordPlaceholder')}
              />
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <SpinnerIcon />
                  {t('login.signingIn')}
                </>
              ) : (
                t('login.signIn')
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
