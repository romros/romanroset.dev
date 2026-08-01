import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export function BlogLinks() {
  const { t } = useTranslation('common')

  return (
    <div className="hidden lg:block">
      <ul className="space-y-2">
        <li>
          <Link href="/blog" className="hover:underline">
            {t('menu_blog_2')}
          </Link>
        </li>
        <li>
          <Link href="/snippets" className="hover:underline">
            {t('menu_receptes_2')}
          </Link>
        </li>
        <li>
          <Link href="/publicacions" className="hover:underline">
            {t('menu_publicacions')}
          </Link>
        </li>
        <li>
          <Link href="/resume" className="hover:underline">
            {t('menu_curriculum')}
          </Link>
        </li>
      </ul>
    </div>
  )
}
