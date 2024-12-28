import { constants } from "../utils/constants.js";

const errorHandler = (err, req, res, next) => {
   let statusCode = constants.SERVER_ERROR;
   let message = err.message || "An unexpected error occurred";

   switch (err.type) {
      case "VALIDATION_ERROR":
         statusCode = constants.VALIDATION_ERROR;
         message = err.message || "Validation Error";
         break;
      case "UNAUTHORIZED":
         statusCode = constants.UNAUTHORIZED;
         message = err.message || "Unauthorized Access";
         break;
      case "FORBIDDEN":
         statusCode = constants.FORBIDDEN;
         message = err.message || "Forbidden Access";
         break;
      case "NOT_FOUND":
         statusCode = constants.NOT_FOUND;
         message = err.message || "Resource Not Found";
         break;
      default:
         statusCode = err.status || constants.SERVER_ERROR;
         message = err.message || "Internal Server Error";
   }

   const response = {
      message,
   };

   res.status(statusCode).json(response);
};

export default errorHandler;
