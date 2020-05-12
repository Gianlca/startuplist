export let listLogEntries = async() => {
    const response = await fetch(`/data/organizations.json`);
    return response.json();
}
