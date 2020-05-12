const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'https://https://startuplist.now.sh';

export let listLogEntries = async() => {
    const response = await fetch(`${API_URL}/organizations.json`);
    return response.json();
}
