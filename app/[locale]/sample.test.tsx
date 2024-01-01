
import { createI18n } from 'next-international'
import en from '../../locales/en' // Your locales.
import { render, screen, waitFor } from '../custom-render'


// Don't forget to mock the "next/router", not doing this may lead to some console errors.
beforeEach(() => {
  vi.mock('next/router', () => ({
    useRouter: vi.fn().mockImplementation(() => ({
      locale: 'en',
      defaultLocale: 'en',
      locales: ['en', ' ja'],
    })),
  }))
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('Example test', () => {
  it('just an example', async () => {
    const { useI18n, I18nProvider } = createI18n({
      en: () => import('../../locales/en'),
    })

    function App() {
      const t = useI18n()

      return <p>{t('hello')}</p>
    }

    render(
      <I18nProvider locale={en}>
        <App />
      </I18nProvider>
    )

    expect(screen.queryByText('Hello')).not.toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Hello')).toBeInTheDocument()
    })
  })
})