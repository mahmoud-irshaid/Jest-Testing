import axios from "axios";

const fetchData = async (id) => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todo/${id}`)
    console.log(result);
    return result.data
}

export { fetchData };
