import { useCallback, useState, type ChangeEvent, type FC } from "react";
import { debounce } from "lodash"; 

const searchBarStyles = {
    "borderRadius":"20px",
    "padding": "5px"
}
type SearchBarProps = {
    onSearch: (text: string) => void
}


const SearchBar:FC<SearchBarProps> = ({onSearch}) => {

    const [input, setInput] = useState("");

    const debounceInput = useCallback(debounce((value:string) => {
         setInput(value);
        onSearch(value);
    }, 500), []) 

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        debounceInput(e.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} style={searchBarStyles}/>
        </div>
    )
}

export default SearchBar;