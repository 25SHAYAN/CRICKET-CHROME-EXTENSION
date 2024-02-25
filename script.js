async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=8255cc58-7f23-4698-ac05-206a7a1aa0ef&offset=0")
        .then(data => data.json())
        .then(data =>{
        if(data.status !="success")return;

        const matchesList = data.data;

        if(!matchesList)return [];
        const releventData = matchesList.map(match => `${match.name},${match.status}`);
        console.log({releventData});
        document.getElementById("matches").innerHTML = releventData.map(match => `<li>${match}</li>`).join('');
        return releventData;
    })
    .catch(e => console.log(e));
}
getMatchData();