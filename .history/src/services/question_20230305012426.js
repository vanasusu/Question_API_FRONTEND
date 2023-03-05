const URL="http://localhost:3000/api"
export async function postquestion(data,token) {
    const response = await fetch(`${URL}/question`, {
        method: 'POST',
        headers: new Headers({
            'token':token,
            'Content-Type': 'application/json'
        }),

        body: JSON.stringify({...data})
      })
    return await response.json();
}

export async function getteachr(data) {
    const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...data})
      })
    return await response.json();
}