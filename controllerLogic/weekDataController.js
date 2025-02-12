// weekDataController.js
import client from "../db/connect.js";
import { ObjectId } from "mongodb";

export const getWeek1Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 1");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek1Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 1");

    const weekData = req.body;
    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};

// Week 2 data handler
export const getWeek2Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 2");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek2Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 2");

    const weekData = req.body;

    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};

// week 3 handler

export const getWeek3Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 3");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek3Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 3");

    const weekData = req.body;

    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};

// week 4 handler
export const getWeek4Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 4");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek4Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 4");

    const weekData = req.body;

    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};

// week 5 handler
export const getWeek5Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 5");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek5Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 5");

    const weekData = req.body;
    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};
// week 6
export const getWeek6Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 6");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek6Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 6");

    const weekData = req.body;

    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};
//week 7
export const getWeek7Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 7");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek7Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 7");

    const weekData = req.body;

    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};
//week 8
export const getWeek8Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 8");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek8Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 8");

    const weekData = req.body;

    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};
//week 9
export const getWeek9Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 9");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek9Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 9");

    const weekData = req.body;

    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};
//week 10
export const getWeek10Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 10");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek10Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 10");

    const weekData = req.body;

    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};
//week 11
export const getWeek11Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 11");
    const course = await collection.findOne({});

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addWeek11Data = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Week 11");

    const weekData = req.body;

    await collection.deleteMany({});
    const result = await collection.insertOne({ weekData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};
//capstone project handler
export const getCapstoneData = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Capstone Project");
    const course = await collection.find({}).toArray();

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addCapstoneData = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Capstone Project");

    const { formData } = req.body;

    const result = await collection.insertOne({ formData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: weekData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};

// assessment data handler
export const getAssessmentData = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Assessments");
    const course = await collection.find({}).toArray();

    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No course document found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const addAssessmentData = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Assessments");

    const { formData } = req.body;
    const result = await collection.insertOne({ formData });
    if (result.acknowledged) {
      return res.status(201).json({
        success: true,
        message: "Course data added successfully",
        data: formData,
      });
    } else {
      return res.status(500).json({ message: "insertion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server not found" });
  }
};

export const deleteCapstoneData = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Capstone Project");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 1) {
      return res.status(200).json({ message: "Deleted successfully" });
    } else {
      return res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    console.log("failed to delete");
  }
};

export const deleteAssessmentData = async (req, res) => {
  try {
    const { id } = req.params;
    await client.connect();
    const db = client.db("Courses");
    const collection = db.collection("Assessments");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 1)
      return res.status(200).json({ message: "Successfully deleted" });
    else {
      return res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {}
};

// logic for deleting a specific week data
export const deleteWeekData = async (req, res) => {
  try {

    const { week } = req.body;
    await client.connect();
    const db = client.db("Courses");
    const collection=db.collection(week);
    await collection.deleteMany({});
    return res
      .status(200)
      .json({ message: `Successfully deleted ${week} data` });
  } catch (error) {
    return res.status(404).json({ message: `Try Block failed ` });
  }
};
