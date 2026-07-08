import axios from "axios";
const CLIENTE_BASE_REST_API_URL = "http://localhost:9090/api/v1/clientes";

class ClienteService{

    getAllClientes(){
        return axios.get(CLIENTE_BASE_REST_API_URL);
    }
}

export default new ClienteService();