export let listLogEntries = async() => {
    const response = await fetch(`public/data/organizations.json`);
    return response.json();
}
