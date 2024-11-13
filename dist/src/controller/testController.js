export const TestController = (req, res) => {
    res.status(200).json({
        message: "this test was successful",
        status: "007",
    });
};
