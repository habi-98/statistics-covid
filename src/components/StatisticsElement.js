const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function StatisticsElement({item}) {

    const dateFormat = (date) => {
        const d = new Date(date)
        return `${d.getDate()} ${months[d.getMonth()]}`
    }
    return (
        <div className="statistics-element">
            <div className="statistics-element__date">
                {dateFormat(item.Date)}
            </div>
            <div className="statistics-element__info">
                <div className='statistics-element__box'>
                    <div className='statistics-element__top'>
                        <div className='statistics-element__label'>Active</div>
                        <div className='statistics-element__value'>{item.Active}</div>
                    </div>
                    <div className="statistics-element__bottom statistics-element__bottom--ml">
                        <div className='statistics-element__label'>Confirmed</div>
                        <div className='statistics-element__value'>{item.Confirmed}</div>
                    </div>
                </div>
                <div className='statistics-element__box'>
                    <div className='statistics-element__top'>
                        <div className='statistics-element__label'>Deaths</div>
                        <div className='statistics-element__value'>{item.Deaths}</div>
                    </div>
                    <div className='statistics-element__bottom statistics-element__bottom--ml'>
                        <div className='statistics-element__label'>Recovered</div>
                        <div className='statistics-element__value'>{item.Recovered}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticsElement