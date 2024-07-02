import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div className="search-box">
                <div>
                    <FaSearch />
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        value={input}
                    />
                </div>
            </div>

        </FormStyle>
    )
}


const FormStyle = styled.form`
    margin: 0rem 10rem;
    
    .search-box{
        margin-auto;
    }

    div{
        width: 100%;
        position: relative;
    }
    
    input{
        border:none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.2rem;
        color:white;
        padding: 1rem 3rem;
        border:none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }


    svg{
        position:absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color:white;
    }
    
    @media (max-width: 800px) {
        margin: 0 auto; // Center the form on small screens
        padding: 0 1rem; // Add some horizontal padding for spacing
    }
`;

export default Search