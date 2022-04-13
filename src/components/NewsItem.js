import React from 'react'

const NewsItem = ({index, article}) => {
    
  return (
    <div className="bg-white mb-7"
        key={index}
    >
        <div 
            className="mb-5" 
        >
            <a href={article.url} target='_blank' rel='noreferrer'>
                <img src={article.image} alt="" />
            </a>
        </div>
        <div
            className="font-semibold mb-3 pl-4 pr-4 text-lg"
        >
            <a href={article.url} target='_blank' rel='noreferrer'>{article.title}</a>
        </div>
        <div
            className="mb-3 pl-4 pr-4"
        >
            {article.description}
        </div>
        <div
            className="mb-3 text-gray-600 text-lg pl-4 pr-4 pb-4"
        >
            {article.source.name}
        </div>
    </div>
  )
}

export default NewsItem