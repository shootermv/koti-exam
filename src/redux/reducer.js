
export function countries(state = {countries:[]}, action) {
    switch (action.type) {
        case 'COUNTRIES_SUCCESS':
            return {                
                countries: action.countries
            };
        default:
            return state
    }
} 
export default countries;