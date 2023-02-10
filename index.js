const  { Configuration, OpenAIApi } = require('openai')
require('dotenv').config();

const Config = new Configuration({
     apiKey:process.env.SECRET_KEY
})

const openai = new OpenAIApi(Config);

const runPrompt =async () => {
    const prompt = 'what is 2+2';

     const response = await openai.createCompletion({
        model:'text-davinci-003',
        prompt:prompt,
        max_tokens:2048,
        temperature:0
     })
     console.log(response.data.choices[0].text)
}

runPrompt();