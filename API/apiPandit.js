import { BASEAPIS } from "./BaseAPIs";

export const SupportAPI = {

    getAllCaseStatusDashboard: () => {
        return BASEAPIS.GETAPI('getAllCaseStatus');
    },

    verifyUserDetail: (phoneNumber, emailId) => {
        return BASEAPIS.GETAPI('verifyUserInCase?email=' + emailId + '&phone=' + phoneNumber);
    },

    getAllCases: (pageNumber, pageSize) => {
        return BASEAPIS.GETAPI('getAllCaseList?pageNumber=' + pageNumber + '&entries=' + pageSize);
    },

    upDateTicketStatusCases: (jsonBody) => {
        return BASEAPIS.PUTAPI(jsonBody, 'updateSupportStatus');
    },

    editTicket: (jsonBody) => {
        return BASEAPIS.PUTAPI(jsonBody, 'updateSupport');
    },

    updateEmailStatus: (jsonBody) => {
        return BASEAPIS.PUTAPI(jsonBody, 'updateSupportReadField');
    },

    ResultAbandoned: async (jsonbody) => {
        return BASEAPIS.POSTAPI(jsonbody, 'resultAbandoned');
    }
};
