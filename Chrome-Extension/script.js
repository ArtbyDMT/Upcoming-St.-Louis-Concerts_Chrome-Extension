async function fetchData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'insert key here',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
  const res= await  fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=St.%20Louis&minDate=%3CREQUIRED%3E&maxDate=2022-10-29&page=1', options)
       const record = await res.json()

       document.getElementById("concerts").innerHTML = record.data.map(item => item.name)
}
fetchData();
