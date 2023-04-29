import {ChangeEvent, FC, useCallback, useEffect, useState} from 'react';
import List from 'components/List';
import Data from '../data.json';
import {SearchInput, SearchContainer} from 'components/App/_styles';
import {useSearchParams} from 'react-router-dom';

const Home: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState<string>(searchParams.get('search') || '');
  const [filteredData, setFilteredData] = useState<string[]>(Data);

  const debounced = useCallback(() => {
    const value = searchParams.get('search') || '';
    if (!value.length) {
      setFilteredData(Data);
      return;
    }

    const regexp = new RegExp(value);
    const filteredData = Data.filter((item) => {
      return regexp.test(item.toLowerCase());
    });
    setFilteredData(filteredData);
  }, [searchParams]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchParams(value.length && {search: value});
    setSearchText(value);
  }, [setSearchParams]);

  useEffect(() => {
    debounced();
  }, [debounced]);

  return (
    <div className="Home">
      <SearchContainer>
        <SearchInput type="text" onInput={handleChange} value={searchText} placeholder="Search..."/>
        <List items={filteredData}/>
      </SearchContainer>
    </div>
  );
};

export default Home;
