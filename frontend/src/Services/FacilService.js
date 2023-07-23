import axios from 'axios';

class FacilService {
    
    obtenerFaciles() {
        return axios.get('http://localhost:8080/faciles');
    }

    guardarFacil(facil) {
        return axios.post('http://localhost:8080/faciles', facil);
    }
}

export default new FacilService();