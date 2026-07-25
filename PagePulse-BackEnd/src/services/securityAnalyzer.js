function analyzeSecurity(response, url) {


    const headers = response.headers || {};


    // HTTPS Check
    const https = url.startsWith("https");



    return {


        https,


        headers: {

            contentSecurityPolicy:
                Boolean(headers["content-security-policy"]),


            xFrameOptions:
                Boolean(headers["x-frame-options"]),


            strictTransportSecurity:
                Boolean(headers["strict-transport-security"])

        }

    };


}


module.exports = analyzeSecurity;