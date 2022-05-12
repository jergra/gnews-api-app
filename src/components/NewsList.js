import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import NewsItem from './NewsItem'
import Scroll from './Scroll'
//import terms from '../data/terms'

const NewsList = () => {

    const [showModal, setShowModal] = useState(false)
    const [effect, setEffect] = useState(false);
    
    if (localStorage.getItem("terms") === null) {
        localStorage.setItem("terms", "website coding javascript HTML css classical music guitar piano Liszt Bach language learning ESL German Italian Chinese Spanish")
    }
    
    const [searchTerms, setSearchTerms] = useState(localStorage.getItem("terms"))
    const terms = searchTerms.split(' ')
    // console.log('searchTerms in NewsList.js:', searchTerms)
    // console.log('terms in NewsList.js:', terms)

    const searchTermsChangeHandler = (e) => {
        localStorage.setItem("terms", e.target.value)
        setSearchTerms(e.target.value);
    };
    const searchTermsSubmitHandler = (e) => {
        e.preventDefault();
        //newSearch(query)
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
                <div className="flex">
                <SearchForm 
                    newSearch={(query) => setQuery(query)}
                />
                <div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="pt-1 pb-1 pl-3 pr-3 ml-2 text-sm font-bold text-white bg-teal-700 rounded"
                    >
                        EDIT
                    </button>
                </div>
                
                </div>
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

        <Scroll />

        {
            showModal && (
                <div className="py-7 px-10 bg-gray-200 w-[700px] h-[350px] absolute top-40 left-60">
                    <div>Edit the possible search terms:</div>
                    <form 
                        onSubmit={searchTermsSubmitHandler}
                        className="flex flex-col mt-4 mb-4"
                    >
                        <textarea
                            type="text"
                            name="query"
                            rows="4" 
                            cols="40"
                            //placeholder={searchTerms}
                            defaultValue={searchTerms}
                            onChange={searchTermsChangeHandler}
                            className="pl-1 border-2 border-gray-400 border-solid rounded"
                        />
                        
                        <div className="flex mt-4">
                            <button
                                type="submit"
                                // this animation is in tailwind.config.js 
                                className={`${
                                    effect && "animate-wiggle"
                                  } bg-teal-700 text-white rounded w-20 py-1 text-sm font-bold mr-3`}
                                onClick={() => {setEffect(true)}}
                                onAnimationEnd={() => setEffect(false)}
                            >
                                SUBMIT
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-20 py-1 text-sm font-bold text-white bg-teal-700 rounded"
                            >
                                CLOSE
                            </button>
                        </div>
                        
                    </form>
                </div>
            ) 
        }

      </>
  )
}

export default NewsList