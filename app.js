const API_KEY = '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';
const BASE_URL = 'https://api.openai.com/v1/chat/completions';


async function fetchData() {
    const resp = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: "user",
                    content: 'Hello!'
                },
                {
                    role: "user",
                    content: 'How are you?'
                },
            ],
        })
    })
    const data = await resp.json()
    console.log(data);
}

fetchData();