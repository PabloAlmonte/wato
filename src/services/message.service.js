const baseURL = "https://api.whatsapp.com/send/?";

export const sendMessage = ({ to, text }) => {
  let url = baseURL + 'phone=' + to;
  window.open(url, '_blank');
}