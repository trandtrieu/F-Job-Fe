import axios from 'axios';

export const sendApplicationMail = async (mailData) => {
    const res = await axios.post('http://localhost:3005/job/send-application-mail', mailData);
    return res.data;
};