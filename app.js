const API_KEY = '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';
const BASE_URL = 'https://api.openai.com/v1/completions';


async function fetchData() {
    const resp = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: "hello, how are you?",
            max_tokens: 7,
            temperature: 0,
        })
    })
    const data = await resp.json()
    console.log(data);
}

fetchData();