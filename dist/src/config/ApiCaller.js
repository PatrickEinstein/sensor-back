import dotenv from "dotenv";
dotenv.config();
export const HttpGetCallerWhole = async (endpoint, headers) => {
    try {
        const savedUserResponse = await fetch(`${process.env.pelpayBaseUrl}/${endpoint}`, {
            method: "GET",
            headers: headers,
        });
        const responseData = await savedUserResponse.json();
        return responseData;
    }
    catch (err) {
        return err;
    }
};
export const HttpOTHERcaller = async (endpoint, headers, method, body) => {
    console.log(endpoint, headers, method, body);
    try {
        const savedUserResponse = await fetch(`${process.env.pelpayBaseUrl}/${endpoint}`, {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
        });
        const responseData = await savedUserResponse.json();
        return responseData;
    }
    catch (err) {
        return err;
    }
};
export const HttpOTHERFormDatacaller = async (endpoint, headers, method, body) => {
    try {
        const savedUserResponse = await fetch(`${process.env.pelpayBaseUrl}/${endpoint}`, {
            method: method,
            headers: headers,
            body: body,
        });
        const responseData = await savedUserResponse.json();
        return responseData;
    }
    catch (err) {
        return err;
    }
};
export default HttpGetCallerWhole;