import { GoogleGenerativeAI } from "@google/generative-ai";


const APIKEY = "AIzaSyDgI31u9O-yenvqUlYfYFGZsGrpKTU8ubo";
const genAI = new GoogleGenerativeAI(APIKEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });








