
export function countries(state = {countries:[], filtered:[], }, action) {
    switch (action.type) {
        case 'COUNTRIES_SUCCESS':
            return {                
                countries: action.countries
            };

        case 'COUNTRIES_FILTERED':
            
            let {term, beginsWith} = action;
            beginsWith =  beginsWith ? '^' : '';
            let filtered = state.countries.filter(({ name }) => new RegExp(`${beginsWith}${term}`).test(name.toLowerCase()));
            return {                
                ...state,
                selectedCountry: null, // must 'reset' selected country
                filtered
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