const initialState = {
    items: [],
    countries: [],
    selectedCountry: 'kyrgyzstan',
    statisticsList: [],
    isLoaded: false
};

const statistics = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
            }
        case 'SET_STATISTICS_LIST':
            return {
                ...state,
                statisticsList: action.payload
            }
        case 'SET_COUNTRY':
            return  {
                ...state,
                selectedCountry: action.payload
            }
        default:
            return  state
    }
}

export default statistics