export const getCountries = () => ({
    type: 'COUNTRIES_REQUEST',
})

export const getCountriesSuccess = countries => ({
    type: 'COUNTRIES_SUCCESS',
    countries
})