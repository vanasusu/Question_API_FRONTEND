const URL"
export async function createUser(data) {
    const response = await fetch(`${URL}/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
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