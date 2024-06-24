import {memo, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import MoviesListComponent from "../../components/MoviesListComponent/MoviesListComponent";
import {moviesService} from "../../services/moviesService";
import {IResponseBase} from "../../interfaces/responseBaseInterface";

const SearchPage = memo(() => {
    const [query] = useSearchParams();
    const [results, setResults] = useState<IResponseBase | null>(null)

    let request = query.get('query');
    const page  = query.get('page');

    useEffect(() => {

        moviesService.search(request as string, page as string).then(({data})=>{
            request = query.get('query');
            setResults(data);
        } )
    }, [request, page]);

    return (
        <div>
            <h2>Search results for {request}</h2>
            {
                results &&  <MoviesListComponent movieResponse={results}/>
            }
        </div>
    );
})

export default SearchPage;