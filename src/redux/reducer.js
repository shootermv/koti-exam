const history = [];
export function countries(state = {countries:[], filtered:[], selectedCountry: null}, action) {
    
    if (action.type !== 'PREV_STEP') {history.push(state);}
    switch (action.type) {
        case 'COUNTRIES_SUCCESS':

            return {     
                ...state,           
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
            
        case  'PREV_STEP':
             if (!history.length) return state;
            return {                
                ...history.pop()
            };      
        default:
            return state
    }
} 
export default countries;