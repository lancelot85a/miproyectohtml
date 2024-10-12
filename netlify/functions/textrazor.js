const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const apiKey = "cee85b319f2904c6516a0fc5d95eea74b1d4d1966d960f4a857d2b85";
  const endpoint = "https://api.textrazor.com";
  const textToAnalyze = event.queryStringParameters.text || "Ejemplo de texto para analizar";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-textrazor-key": apiKey,
    },
    body: text=${encodeURIComponent(textToAnalyze)}&extractors=entities
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};