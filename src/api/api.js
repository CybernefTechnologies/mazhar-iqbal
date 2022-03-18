import axios from "axios";

const api_endpoint = "https://randomuser.me/api/";

export const user_data = async () => {
    const {data} = await axios.get(api_endpoint);
    return data;
}