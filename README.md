<div align="center">
  <h1>
    <br/>
    <br/>
    ☄️
    <br />
    OpenAI Wrapper
    <br />
    <br />
  </h1>
  <sup>
    <br />
    Simple OpenAI & Azure OpenAI Node.Js Wrapper</em>
    <br />
    <br />
  </sup>
</div>

### Getting Started


1- Install Dependencies

```bash
npm install
```

### Setup environment

2- Create a .env file in the project root and add the following:

```bash
OPENAI_API_KEY=

# OR (for Azure)

AZURE_OPENAI_API_KEY=
AZURE_OPENAI_ENDPOINT=
AZURE_OPENAI_DEPLOYMENT=
```

3- Adjust temperature and top_p

4- Edit the system (optional) and user prompt

*Prompt sample*
```
Tell me a joke about programming
```

5- Call completions by running:

```bash
npm start
```