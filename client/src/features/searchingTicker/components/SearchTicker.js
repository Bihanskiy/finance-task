import { Button } from "../../../components/ui";
import { Input } from "../../../components/forms";

import { useSetTickerNameSearch, useTickerNameSearch } from "../hooks/searching";

import "./searchTicker.scss";

const SearchTicker = () => {

    const setTickerNameSearch = useSetTickerNameSearch();
    const tickerNameSearch = useTickerNameSearch();

    const getSearchTicker = (searchValue) => {
        setTickerNameSearch(searchValue);
    }

    const toClearSearchInput = () => {
        setTickerNameSearch("");
    }

    return (
        <div className="header__search search">
            <Input
                inputOnChangeHandler={getSearchTicker}
                inputValue={tickerNameSearch}
                placeholderInput={"Search ticker"}
            />
            <Button
                onClickHandler={toClearSearchInput}
                customStyle={'search-cleaner'}
            >
                <i className="icon icon-cross" />
            </Button>
        </div>
    )
}

export default SearchTicker;