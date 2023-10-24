export // Fonction pour convertir votre format de date en format ISO
const convertDateToISO = (dateStr) => {
  const months = {
    janvier: "01",
    février: "02",
    mars: "03",
    avril: "04",
    mai: "05",
    juin: "06",
    juillet: "07",
    août: "08",
    septembre: "09",
    octobre: "10",
    novembre: "11",
    décembre: "12",
  };

  const [day, monthWord, year, , time] = dateStr.split(" ");
  const month = months[monthWord];
  return `${year}-${month}-${day}T${time}`;
};
