import type { FC } from "react";
import SearchBar from "../searchBar/SearchBar";

type Props = {
    onSearch: (text: string) => void
}

const NavBar:FC<Props> = (props) => {
    return ( 
        <>
        <SearchBar onSearch={props.onSearch}/>
        </>
    )
}

export default NavBar;