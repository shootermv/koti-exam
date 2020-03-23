export const getCountries = () => ({
    type: 'COUNTRIES_REQUEST',
})

export const getCountriesSuccess = countries => ({
    type: 'COUNTRIES_SUCCESS',
    countries
})

export const filterCountries = filtered => ({
    type: 'COUNTRIES_FILTERED',
    filtered
})

export const selectCountry = selectedCountry => ({
    type:'SELECTED_COUNTRY',
    selectedCountry
}) 