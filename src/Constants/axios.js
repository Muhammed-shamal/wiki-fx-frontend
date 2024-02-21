import axios from "axios";
import { baseURLNews, baseUrlCurrency } from "./constantUrl";

export const Currency_instance = axios.create({ baseURL: baseUrlCurrency });
export const News_instance = axios.create({ baseURL: baseURLNews });
