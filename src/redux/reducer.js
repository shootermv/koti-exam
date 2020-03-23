
export function countries(state = {countries:[], filtered:[], }, action) {
    switch (action.type) {
        case 'COUNTRIES_SUCCESS':
            return {                
                countries: action.countries
            };

        case 'COUNTRIES_FILTERED':
            return {                
                ...state,
                selectedCountry: null, // must 'reset' selected country
                filtered: action.filtered
            };
            
        case 'SELECTED_COUNTRY':
            return {                
                ...state,
                selectedCountry: action.selectedCountry
            };            
        default:
            return state
    }
} 
export default countries;