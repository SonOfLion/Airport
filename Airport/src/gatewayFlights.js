export const baseUrl = `https://api.iev.aero/api/flights`;

export const fetchFlight = () => {
    return fetch(`${baseUrl}/${today}`).then((
        response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('No fligths');
    });
};