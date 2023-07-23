import axios from 'axios';

class IntermedioService {
    
    obtenerIntermedias() {
        return axios.get('http://localhost:8080/medias');
    }

    guardarIntermedia(intermedia) {
        return axios.post('http://localhost:8080/medias', intermedia);
    }
}

export default new IntermedioService();