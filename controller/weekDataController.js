// weekDataController.js
import client from "../db/connect.js";

export const getCourseData = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Course_details");
    const course = await collection.findOne({});

    if (course) {
      console.log("Found a course document", course);
      return res.status(200).json(course);  // Send course data as response
    } else {
      console.log("Did not find a course document");
      return res.status(404).json({ message: "No course document found" });  // Send error message if no course found
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return res.status(500).json({ message: "Internal Server Error" });  // Send error response if there's an issue with DB connection
  } finally {
    await client.close();
  }
};
export const addCourseData=async(req,res)=>
{
    try {
        await client.connect();
        const db=client.db("Courses");
        const collection=db.collection("Course_details");
        const weekData=req.body;
        // if(!weekData||!Array.isArray(weekData))
        // {
        //     return res.status(400).json({message:"Invalid data format"});
        // }
        const result=await collection.insertOne({weekData});
        if(result.acknowledged)
        {
            return res.status(201).json({
                success: true,
                message: "Course data added successfully",
                data: weekData})

        }
        else
        {
            return res.status(500).json({message:"insertion failed"});
        }
    } catch (error) {
        return res.status(500).json({message:"Server not found"});
    }
}
