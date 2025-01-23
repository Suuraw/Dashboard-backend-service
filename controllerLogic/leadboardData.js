import axios from "axios";
import dotenv from "dotenv"
dotenv.config();
const apiKey = process.env.API_KEY;
const sheetId = process.env.SHEET_ID;
const sheetName = process.env.SHEET_NAME;

let url = `https://sheets.googleapis.com/v4/spreadsheets/${apiKey}/values/${sheetName}?key=${sheetId}`;

export const fetchLeadboard = async (req,res) => {
  try {
    const response = await axios.get(url);
    const sheetData = response.data.values;
    const students= sheetData;

    await students.sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
    if(students)
    return res.status(200).json({message:"Successfull reterival",studentData:students});
 
    return res.status(404).json({message:"Fetch API not responding"});

  } catch (error) {
   return res.status(404).json({message:"Server not Responding"});
  }
};
