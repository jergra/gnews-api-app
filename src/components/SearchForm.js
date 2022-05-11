import React, {useState} from 'react'
//import terms from '../data/terms'

const SearchForm = ({newSearch}) => {

    const [showModal, setShowModal] = useState(false)
    
    const [searchTerms, setSearchTerms] = useState(localStorage.getItem("terms"))
    const terms = searchTerms.split(' ')
    console.log('searchTerms in SearchForm.js:', searchTerms)
    console.log('terms in SearchForm.js:', terms)

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

    const searchTermsChangeHandler = (e) => {
        localStorage.setItem("terms", e.target.value)
        setSearchTerms(e.target.value);
    };
    const searchTermsSubmitHandler = (e) => {
        e.preventDefault();
        //newSearch(query)
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
                className="pt-1 pb-1 pl-3 pr-3 ml-2 text-sm font-bold text-white bg-teal-700 rounded"
            >
                SEARCH
            </button>
            <button
                onClick={() => setShowModal(true)}
                className="pt-1 pb-1 pl-3 pr-3 ml-2 text-sm font-bold text-white bg-teal-700 rounded"
            >
                EDIT
            </button>
        </form>

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
                                className="w-20 pt-1 mr-3 text-sm font-bold text-white bg-teal-700 rounded"
                            >
                                SUBMIT
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-20 pt-1 pb-1 pl-3 pr-3 text-sm font-bold text-white bg-teal-700 rounded"
                            >
                                CLOSE
                            </button>
                        </div>
                        
                    </form>
                </div>
            ) 
        }
    </div>
  )
}

export default SearchForm