const URL="http://localhost:3000/api"
export async function postquestion(data) {
    const response = await fetch(`${URL}/question`, {
        method: 'POST',
        headers: new Headers({
            ''
        }),

        body: JSON.stringify({...data})
      })
    return await response.json();
}

export async function loginUser(data) {
    const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...data})
      })
    return await response.json();
}