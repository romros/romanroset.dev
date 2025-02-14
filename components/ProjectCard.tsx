import useSWR from 'swr'
import type { GithubRepository, ProjectCardProps } from '~/types'
import { fetcher } from '~/utils/fetcher'
import { GithubRepo } from './GithubRepo'
import { Image } from './Image'
import { Link } from './Link'
import { useTranslation } from 'next-i18next'

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation('common')
  let { title, description, imgSrc, url, repo, builtWith } = project
  let { data } = useSWR(`/api/github?repo=${repo}`, fetcher)
  let repository: GithubRepository = data?.repository
  let href = repository?.url || url

  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="flex h-full flex-col overflow-hidden rounded-md border border-gray-400 border-opacity-60 hover:border-gray-500 dark:border-gray-600 dark:hover:border-gray-400">
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-60"
          width={1088}
          height={612}
        />
        <div className="flex grow flex-col justify-between space-y-6 p-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  <span data-umami-event="project-title-link">{title}</span>
                </Link>
              ) : (
                title
              )}
            </h2>
            <div className="max-w-none space-y-2 text-gray-500 dark:text-gray-400">
              <p>{repository?.description || description}</p>
              <div className="flex flex-wrap space-x-1.5">
                <span className="shrink-0">{t('projects.built_with')}:</span>
                {builtWith?.map((tool, index) => {
                  return (
                    <span key={index} className="font-semibold text-gray-500 dark:text-gray-400">
                      {tool}
                      {index !== builtWith.length - 1 && ','}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
          {repository ? (
            <GithubRepo repo={repository} />
          ) : (
            <Link
              href={url}
              className="text-base font-medium leading-6 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition "
              aria-label={`Link to ${title}`}
            >
              <span data-umami-event="project-learn-more">{t('projects.learn_more')} &rarr;</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
