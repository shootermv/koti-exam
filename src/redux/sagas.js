import { call, put,  takeLatest } from 'redux-saga/effects'

function* fetchCountries() {
   try {
      const countries = yield call(() => fetch(`https://restcountries.eu/rest/v2/all`)
      .then(d => d.json()));
      yield put({type: "COUNTRIES_SUCCESS", countries});
   } catch (e) {
      yield put({type: "COUNTRIES_FAILED", message: e.message});
   }
}



function* mySaga() {
  yield takeLatest("COUNTRIES_REQUEST", fetchCountries);
}

export default mySaga;