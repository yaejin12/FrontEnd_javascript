const errors = new Map(
[404, "Not Found"],
[400, "Bad Request"],
[401,"UnAuthorized"]
);



errors.set(500, "Network Error");
console.log(errors);
