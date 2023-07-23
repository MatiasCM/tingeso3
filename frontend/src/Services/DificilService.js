import axios from 'axios';

class DificilService {
    
    obtenerDificiles() {
        return axios.get('http://localhost:8080/dificiles');
    }

    guardarDificil(dificil) {
        return axios.post('http://localhost:8080/dificiles', dificil);
    }
}

export default new DificilService();