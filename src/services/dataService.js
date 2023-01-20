import axios from "axios";
const baseUrl = 'https://server.jusaninvest.kz/api/Portfolios/stocks/graph/deprecated?stockId=124333&dateFrom=13.03.2022&dateTo=13.04.2022'

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

export default { getAll }