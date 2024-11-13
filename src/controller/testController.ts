import { RequestHandler } from "express";

export const  TestController: RequestHandler = (req, res) => {
  res.status(200).json({
    message: "this test was successful",
    status: "007",
  });
};
