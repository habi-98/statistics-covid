import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setCountries, setCountry} from "./redux/actions";
import StatisticsList from "./components/StatisticsList";

function App() {
    const dispatch = useDispatch();
    const { countries, selectedCountry } = useSelector(state => state);

    useEffect(() => {
        fetchCountries()
    }, [])

    const fetchCountries = () => {
        fetch('https://api.covid19api.com/countries')
            .then(res => res.json()).then(res => {
                dispatch(setCountries(res))
        })
    };
    const changeHandler = (name) => {
        dispatch(setCountry(name))
    }
  return (
    <div className="container">
        <div className="wrapper">
            <select  className="select-country" onChange={(e) => changeHandler(e.target.value)}>
                <option value='kyrgyzstan'>Kyrgyzstan</option>
                {countries.map((el, index) => (
                    <option key={index} value={el.Slug}>{el.Country}</option>
                ))}
            </select>
        </div>
        <div className='content'>
            <StatisticsList/>
            <div className="top-recovered-cases">
                <div className="top-recovered-cases__title">Top recovered cases</div>
                <div className="top-recovered-cases__total">240</div>
                <div className='top-recovered-cases__date'>28 June</div>
            </div>
        </div>
    </div>
  );
}

export default App;
