// services/translationService.js
export async function translateText(text, sourceLang, targetLang) {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3.1:8b",
      prompt: `Translate this text from ${sourceLang} to ${targetLang} without adding a title,
         any explanation or other ideas. show only the translation :
           ${text}`,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch translation");
  }

  const data = await response.json();
  return data.response;
}
