
export function countries(state = {countries:[]}, action) {
    switch (action.type) {
        case 'COUNTRIES_SUCCESS':
            return {                
                countries: action.countries
            };

        case 'COUNTRIES_FILTERED':
            return {                
                ...state,
                filtered: action.filtered
            };   
        default:
            return state
    }
} 
export default countries;