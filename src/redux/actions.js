export const getCountries = () => ({
    type: 'COUNTRIES_REQUEST',
})

export const getCountriesSuccess = countries => ({
    type: 'COUNTRIES_SUCCESS',
    countries
})

export const filterCountries = (term, beginsWith = false) => ({
    type: 'COUNTRIES_FILTERED',
    term,
    beginsWith
})

export const selectCountry = selectedCountry => ({
    type:'SELECTED_COUNTRY',
    selectedCountry
}) 

export const prevStep = () => ({
    type:'PREV_STEP'
}) 