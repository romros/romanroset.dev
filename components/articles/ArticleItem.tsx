import React, { useState } from 'react'
import { ExternalLink, FileText, Users, Info, Calendar } from 'lucide-react'
import styles from './ArticleItem.module.css'

const ArticleItem = ({ article }) => {
  const [isHovered, setIsHovered] = useState(false)

  const generateScholarLink = (doi) => {
    return `https://scholar.google.com/scholar?q=${encodeURIComponent(
      doi
    )}&inst=7311101921447552140&hl=ca`
  }

  const handleCardClick = () => {
    setIsHovered((prev) => !prev) // Toggle isHovered state
  }

  const truncateText = (text, maxLength) => {
    if (!text) return '' // Afegeix aquesta línia per a tractar valors nulls o indefinits
    if (text.length <= maxLength) return text
    return `${text.substring(0, maxLength)}...`
  }

  return (
    <button
      data-umami-event="article-info-link"
      className={`
      ${styles.customButton}
      bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md
      transition-transform transform hover:scale-105
      duration-300 relative overflow-hidden text-left
    `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <button
        data-umami-event="article-info-link"
        className={`absolute top-2 right-2 cursor-pointer z-10 transition-all duration-300 rounded-full p-1 
    ${styles.customButton}
    ${isHovered ? 'text-blue-500 bg-blue-100' : 'text-gray-500 hover:bg-gray-200 hover:shadow-lg'}
    dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 dark:hover:shadow-lg`}
        onClick={handleCardClick}
      >
        <Info size={20} />
      </button>

      <h2 className="pt-8 text-xl font-semibold mb-2 truncate">{article.title}</h2>

      <div className="mb-1 text-sm flex items-center justify-between">
        <div className="flex items-center">
          <FileText className="mr-2" size={14} />
          {article.journal}
        </div>

        <div className="flex items-center">
          <Calendar className="mr-2" size={14} /> {article.year}
        </div>
      </div>

      <div className="relative text-align-left pt-3">
        <p className="mb-1 text-sm text-align-left line-clamp-4 bg-white dark:bg-gray-800 h-20 ">
          {truncateText(article.abstract, 200)}
        </p>
        <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
      </div>

      <p className="text-xs italic mt-2 dark:text-gray-400 flex items-start">
        <Users className="mr-2 flex-shrink-0 pt-0.5" size={14} />
        {article.author.join(', ')}
      </p>

      <div
        className={`absolute top-0 left-0 w-full h-full bg-slate-50 dark:bg-gray-700 opacity-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : ''
        }`}
      >
        <div className="flex items-start pt-12 px-4">
          <p>{article.roleDescription}</p>
        </div>
      </div>

      <a
        data-umami-event="article-goto-link"
        href={generateScholarLink(article.doi)}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 left-4 mt-2 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition flex items-center"
      >
        <strong className="dark:text-gray-300">DOI:</strong> {article.doi}
        <ExternalLink className="ml-2" size={14} />
      </a>
    </button>
  )
}

export default ArticleItem
