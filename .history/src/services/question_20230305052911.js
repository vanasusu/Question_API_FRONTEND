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

export async function searchquestion(url,token) {
    const response = await fetch(`${URL}/question/search?`+url, {
        method: 'GET',
        headers: new Headers({
            'token':token,
            'Content-Type': 'application/json'
        }),

        body: JSON.stringify({...data})
      })
    return await response.json();
}

export async function allquestion(url,token) {
    const response = await fetch(`${URL}/question/search?`+url, {
        method: 'GET',
        headers: new Headers({
            'token':token,
            'Content-Type': 'application/json'
        }),

        body: JSON.stringify({...data})
      })
    return await response.json();
}

export async function deletequestion(id,token) {
    const response = await fetch(`${URL}/question/`+id, {
        method: 'DELETE',
        headers: new Headers({
            'token':token,
            'Content-Type': 'application/json'
        })
      })
    return await response.json();
}

export async function putquestion(data,token,id) {
    const response = await fetch(`${URL}/question/`+id, {
        method: 'PUT',
        headers: new Headers({
            'token':token,
            'Content-Type': 'application/json'
        }),

        body: JSON.stringify({...data})
      })
    return await response.json();
}

export async function getteacherquestions(id,token) {
    const response = await fetch(`${URL}/question/user/`+id, {
        method: 'GET',
        headers: new Headers({
            'token':token,
            'Content-Type': 'application/json'
        })
      })
    return await response.json();
}

export async function getquestion(id,token) {
    const response = await fetch(`${URL}/question/`+id, {
        method: 'GET',
        headers: new Headers({
            'token':token,
            'Content-Type': 'application/json'
        })
      })
    return await response.json();
}