import axios from "axios";

export const post = async () => {
    const res = await axios.post('http://localhost:4242/create-checkout-session/3/10');
    return res.data;
}