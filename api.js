import axios from 'axios'
import { API_URL } from '@env'

export const request = async (url, method, payload) => {
    const res = await axios({
        url: `${API_URL}${url}`,
        method,
        data: payload,
    })
    return res.data
}

export async function getLastCurrencies() {
    return request(`/latest`, 'GET')
}

export async function convertCurrency({ quoteCurrency, baseCurrency, amount }) {
    return request(
        `/convert?from=${quoteCurrency}&to=${baseCurrency}&amount=${amount})`,
        'GET'
    )
}
