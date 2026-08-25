async function displayData() {
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data.Title[0]);
}
displayData();