import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

export async function GymExcerciseIA(mensaje){
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Necesito que te pongas en el papel de un profesor de educación física y personal trainer muy experimentado, y me generes una rutina de entrenamiento para una persona de ${mensaje.sexo}, de ${mensaje.edad} años, de ${mensaje.altura} cm, de ${mensaje.peso} kg. La rutina de entrenamiento es para una persona de nivel ${mensaje.nivel}, para realizar ${mensaje.dias} dias a la semana y ${mensaje.aparatos} aparatos`
    })

    const respuesta = response.text
    return respuesta;
};