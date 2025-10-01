const apiUrl = "https://antoapi.gc627.online/";
const counts_p = document.getElementById("counts");

const params = new URLSearchParams(window.location.search);
const qr = params.get("QR");

const reportVisit = async (qr: boolean) => {
  try {
    const resp = await fetch(`${apiUrl}${qr ? "?QR=true" : ""}`);
    const data = await resp.json();
  } catch (error) {
    console.log(error);
  }
};
reportVisit(qr === "true");
