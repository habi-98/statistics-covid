import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import StatisticsElement from "./StatisticsElement";
import {setStatisticsList} from '../redux/actions'
function StatisticsList() {
    const {selectedCountry, statisticsList} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchStatisticsList()
    }, [selectedCountry])

    const fetchStatisticsList = () => {
        const maxDate = new Date(Date.now())
        const timestampMin = Math.round(maxDate.getTime() / 1000) - (/*5 days*/ 432000);
        const minDate = new Date(timestampMin * 1000)
        maxDate.setHours(0,0,0,0)
        minDate.setHours(0,0,0,0)
        fetch(`https://api.covid19api.com/dayone/country/${selectedCountry}?from=${minDate.toISOString()}&to=${maxDate.toISOString()}`)
            .then(res => res.json())
            .then(result => dispatch(setStatisticsList(result)))
    }

    return (
        <div className="statistics-list">
            {statisticsList.map(el => (
                <StatisticsElement className={'statistics-list__element'} item={el}/>
            ))}
        </div>
    )
}

export default StatisticsList