import axios from 'axios';

export default {

    listTransfers() {
        return axios.get('/transfer');
    },

    getTransferById(transferId) {
        return axios.get(`/transfer/${transferId}`);
    },

    createTransfer(transfer) {
        return axios.post('/transfer', transfer);
    },

    updateTransferStatus(transferId, transfer) {
        return axios.put(`/transfer/${transferId}`, transfer);
    }
}