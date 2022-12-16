import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3500/test/transfer/';

class TransferService {
    listTransfers() {
        return axios.get(API_URL, { headers: authHeader() });
    }

    getTransferById(transferId) {
        return axios.get(API_URL + transferId, { headers: authHeader() });
    }

    createTransfer(transfer) {
        return axios.post(API_URL, transfer, { headers: authHeader() });
    }

    updateTransferStatus(transferId, transfer) {
        return axios.put(API_URL + transferId, transfer, { headers: authHeader() });
    }
}

export default new TransferService();