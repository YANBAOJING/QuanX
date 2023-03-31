// 2023-03-31 15:15

const url = $request.url;
const header = $request.headers;
let ua = header["User-Agent"] || header["user-agent"];

if (url.includes("/amdc/mobileDispatch")) {
  if (ua.includes("AMap") || ua.includes("Cainiao")) {
    if (typeof $task !== "undefined") {
      $done({ status: "HTTP/1.1 404 Not Found" });
    } else {
      $done();
    }
  } else {
    $done({});
  }
}