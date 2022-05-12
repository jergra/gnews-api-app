import React, {useState} from 'react'
//import terms from '../data/terms'

const SearchForm = ({newSearch}) => {

    const [searchTerms, setSearchTerms] = useState(localStorage.getItem("terms"))
    const terms = searchTerms.split(' ')
    // console.log('searchTerms in SearchForm.js:', searchTerms)
    // console.log('terms in SearchForm.js:', terms)

    let oneOrTwo = Math.floor(Math.random() * 2 + 1)
    //console.log('one or two:', oneOrTwo)
    
    if (oneOrTwo === 1) {
        let randomPosition = Math.floor(Math.random() * terms.length)
        var selected = terms[randomPosition]
        //console.log('one query term chosen in SearchForm:', selected)
    }
    if (oneOrTwo === 2) {
        let randomPosition1 = Math.floor(Math.random() * terms.length)
        let randomPosition2 = Math.floor(Math.random() * terms.length)
        selected = terms[randomPosition1] + ' ' + terms[randomPosition2]
        //console.log('two query terms chosen in SearchForm:', selected)
    }

    const [query, setQuery] = useState(selected)
    
    const queryChangeHandler = (e) => {
        setQuery(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        newSearch(query)
    };

    return (
    <div>
        <form 
            onSubmit={submitHandler}
            className="mb-4"
            >
            <input
                name="query"
                //placeholder='e.g. election'
                value={query}
                onChange={queryChangeHandler}
                className="pl-1 border-2 border-gray-400 border-solid rounded"
            />
            <button
                type="submit"
                className="w-20 py-1 text-sm font-bold text-white bg-teal-700 rounded ml-2"
            >
                SEARCH
            </button>
        </form>
    </div>
  )
}

export default SearchForm