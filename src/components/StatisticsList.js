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
        fetch(`https://api.covid19api.com/dayone/country/${selectedCountry}`)
            .then(res => res.json())
            .then(result => {
                const maxDate = Math.round(new Date(Date.now()).getTime() / 1000)
                const minDate = (maxDate - 432000)
                const newArr = result.filter(el => {
                    const d = Math.round(new Date(el.Date).getTime() / 1000)
                    return d > minDate
                })
                dispatch(setStatisticsList(newArr))
            })
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