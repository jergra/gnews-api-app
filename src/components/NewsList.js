import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import NewsItem from './NewsItem'
import terms from '../data/terms'

const NewsList = () => {

    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            //console.log('window.pageYOffset:', window.pageYOffset)
            if (window.pageYOffset > 10) {
                setShowTop(true)
            } else {
                setShowTop(false)
            }
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    //console.log('terms in NewsList.js:', terms)

    let oneOrTwo = Math.floor(Math.random() * 2 + 1)
    //console.log('one or two:', oneOrTwo)
    
    if (oneOrTwo === 1) {
        let randomPosition = Math.floor(Math.random() * terms.length)
        var selected = terms[randomPosition]
        //console.log('one query term chosen in NewsList:', selected)
    }
    if (oneOrTwo === 2) {
        var randomPosition1 = Math.floor(Math.random() * terms.length)
        var randomPosition2 = Math.floor(Math.random() * terms.length)
        selected = terms[randomPosition1] + ' ' + terms[randomPosition2]
        //console.log('two query terms chosen in NewsList:', selected)
    }

    const [query, setQuery] = useState(selected)
    
    const [articles, setArticles] = useState([])
        
    useEffect(() => { 
        const getArticles = async () => {
            //console.log('query in useEffect:', query)

            fetch(`https://gnews.io/api/v4/search?q=${query}&token=${process.env.REACT_APP_GNEWS_API_KEY}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    //console.log('data:', data);
                    //console.log('data.articles[0]:', data.articles[0])
                    setArticles(data.articles)
                });
        }
        getArticles()
    }, [query])

    
    return (
      <>
        
        <div className="showcase">
            <div className="px-5 overlay">
               
                <div className="mb-6 text-4xl font-semibold text-white capitalize mt-60">
                    articles about {query}
                </div>
                
                <SearchForm 
                    newSearch={(query) => setQuery(query)}
                />
                
            </div>
        </div>
      
        <div 
            className="mt-10 ml-40 mr-40"
        >
            {articles.map((article, index) => (
                <NewsItem 
                    key={index}
                    index={index}
                    article={article}
                />
            ))}
        </div>

        {showTop ? (
            <div className='fixed bottom-5 right-5'>
                <button 
                    className="pt-1 pb-1 pl-3 pr-3 text-sm font-bold text-white bg-teal-700 rounded"
                    onClick={goToTop}
                >
                    TOP
                </button>
            </div>
        ) : (
            <div></div>
        )}
        
      </>
  )
}

export default NewsList