import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


function Search() {

    const [search, setSearch] = useState({
        search: ''
    });
    const handleChange = ({currentTarget}) => {
        setSearch({...search, [currentTarget.name]:currentTarget.value});
    }

    const questionDetails = useSelector((state) => state.question.questionData);
    // console.log(questionDetails);

    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        try{
            const searchResult = questionDetails.filter((question) => {
                return question.question.toLowerCase().includes(search.search.toLowerCase());
            }
            );
            const searchIndex = questionDetails.findIndex((question) => {
                return question.question.toLowerCase().includes(search.search.toLowerCase());
            }
            );
            if(searchIndex === -1){
                setSearch({search: ''});
                alert('No question found');
                return;
            }
            navigate(`/question/${searchIndex}`);
        }catch(error){
            console.log(error);
        }
    }

  return (
    <>
    <div className="search_container">
        <input 
            type="text"
            placeholder='Search'
            name="search"
            value={search.search}
            className='input' 
            onChange={handleChange}
        />
        <button className="green_btn" onClick={handleSearch}>Search</button>
    </div>
    </>
  )
}

export default Search