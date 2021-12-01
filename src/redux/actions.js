export const setCountries = (items) => ({
    type: 'SET_COUNTRIES',
    payload: items
})

export const setStatisticsList = (data) => ({
    type: 'SET_STATISTICS_LIST',
    payload: data
})

export const setCountry = (name) => ({
    type: 'SET_COUNTRY',
    payload: name
})