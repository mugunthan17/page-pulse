function calculateScore(data) {


    let issues = [];


    /*
        Category Scores

        Performance     25
        SEO             25
        Accessibility   20
        Security        20
        Best Practices  10

        Total            100
    */


    let breakdown = {

        performance: 25,

        seo: 25,

        accessibility: 20,

        security: 20,

        bestPractices: 10

    };



    // =====================
    // SEO SCORE
    // =====================


    if(!data.seo.title){


        breakdown.seo -= 15;


        issues.push({

            category:"SEO",

            severity:"high",

            message:"Missing page title"

        });

    }



    if(!data.seo.description){


        breakdown.seo -= 10;


        issues.push({

            category:"SEO",

            severity:"medium",

            message:"Missing meta description"

        });

    }



    // =====================
    // ACCESSIBILITY SCORE
    // =====================


    if(data.content.imagesWithoutAlt > 0){


        breakdown.accessibility -= 10;


        issues.push({

            category:"Accessibility",

            severity:"medium",

            message:`${data.content.imagesWithoutAlt} images missing alt text`

        });

    }




    // =====================
    // PERFORMANCE SCORE
    // =====================


    const loadTime = data.performance.loadTime;


    if(loadTime > 3000){


        breakdown.performance -= 15;


        issues.push({

            category:"Performance",

            severity:"high",

            message:"Slow page loading time"

        });

    }


    else if(loadTime > 1500){


        breakdown.performance -= 5;


        issues.push({

            category:"Performance",

            severity:"medium",

            message:"Page load time can be improved"

        });

    }




    // =====================
    // SECURITY SCORE
    // =====================


    if(!data.security.https){


        breakdown.security -= 10;


        issues.push({

            category:"Security",

            severity:"high",

            message:"Website is not using HTTPS"

        });

    }



    if(!data.security.headers.contentSecurityPolicy){


        breakdown.security -= 3;


        issues.push({

            category:"Security",

            severity:"medium",

            message:"Missing Content Security Policy header"

        });

    }



    if(!data.security.headers.xFrameOptions){


        breakdown.security -= 3;


        issues.push({

            category:"Security",

            severity:"medium",

            message:"Missing X-Frame-Options header"

        });

    }



    if(!data.security.headers.strictTransportSecurity){


        breakdown.security -= 3;


        issues.push({

            category:"Security",

            severity:"medium",

            message:"Missing Strict Transport Security header"

        });

    }




    // =====================
    // FINAL SCORE
    // =====================


    let score = Object.values(breakdown)
                      .reduce((sum,value)=>sum+value,0);



    let grade="A";


    if(score < 90)
        grade="B";


    if(score < 75)
        grade="C";


    if(score < 60)
        grade="D";


    if(score < 40)
        grade="F";




    return {


        score,

        grade,


        breakdown,


        issues

    };


}



module.exports = calculateScore;