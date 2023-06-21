$(function(){

    $(".toggle").on("click", function(){

        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active");
        }
    });
});   

function submit(){

    

    document.getElementById("sun_text").textContent = "-";
    document.getElementById("moon_text").textContent = "-";
    document.getElementById("jupiter_text").textContent = "-";
    document.getElementById("rahu_text").textContent = "-";
    document.getElementById("mercury_text").textContent = "-";
    document.getElementById("venus_text").textContent = "-";
    document.getElementById("ketu_text").textContent = "-";
    document.getElementById("saturn_text").textContent = "-";
    document.getElementById("mars_text").textContent = "-";

    var first_name_input = document.getElementById("first_name_input").value;
    var last_name_input = document.getElementById("last_name_input").value;
    var gender = document.getElementById("gender_input").value;
    var full_dob = document.getElementById("dob_input").value;
    
    if (first_name_input == "" || last_name_input == "" || gender == "" || full_dob=="") {
        alert("Please fill out all the input fields!");
    }
    else {
        console.log("Loading") 

        var result_box = document.getElementById("result_box");
    
        if (result_box.style.display = "none") {
            result_box.style.display = "block";
            console.log("Result box visible")
        }

        var dob_components = full_dob.split("-");
        var date = dob_components[2];
        var month = dob_components[1];
        var year = dob_components[0];
        console.log(date);
        console.log(month);
        console.log(year);
        
        //Psychic Number

        let date_1 = String(date).charAt(0);
        let date_2 = String(date).charAt(1);
        date_1_no = parseInt(date_1);
        date_2_no = parseInt(date_2);
        let p = date_1_no + date_2_no;
        console.log("p = " + p);
        if (p.toString().length > 1){
            let p_1 = String(p).charAt(0);
            let p_2 = String(p).charAt(1);
            p_1_no = parseInt(p_1);
            p_2_no = parseInt(p_2)
            let psychic_number = p_1_no + p_2_no;
            console.log("Psychic No. : " + psychic_number);
            document.getElementById("psychic_number").innerHTML = "Psychic No. : " + psychic_number;
        }
        else{
            psychic_number = p;
            console.log("Psychic No. : " + psychic_number);
            document.getElementById("psychic_number").innerHTML = "Psychic No. : " + psychic_number;
        }
        

        if (date_1_no == 0 || date == 10 || date == 20 || date == 30){
            console.log("Psychic No. will not be printed.")
            var printed = "no"
        }

        else {
            console.log("Psychic No. will be printed.")
            var printed = "yes"
        }

        //Destiny Number

        let month_1 = String(month).charAt(0);
        let month_2 = String(month).charAt(1);
        month_1_no = parseInt(month_1);
        month_2_no = parseInt(month_2);  
        
        let year_1 = String(year).charAt(0);
        let year_2 = String(year).charAt(1);
        let year_3 = String(year).charAt(2);
        let year_4 = String(year).charAt(3);
        year_1_no = parseInt(year_1);
        year_2_no = parseInt(year_2);
        year_3_no = parseInt(year_3);
        year_4_no = parseInt(year_4);

        let d = date_1_no + date_2_no + month_1_no + month_2_no + year_1_no + year_2_no + year_3_no + year_4_no;
        console.log("d = " + d);

        if (d.toString().length > 1){
            let d_1 = String(d).charAt(0);
            let d_2 = String(d).charAt(1);
            d_1_no = parseInt(d_1);
            d_2_no = parseInt(d_2);
            d2 = d_1_no + d_2_no;
            console.log("d2 = " + d2);
            if (d2.toString().length > 1){
                let d2_1 = String(d2).charAt(0);
                let d2_2 = String(d2).charAt(1);
                d2_1_no = parseInt(d2_1);
                d2_2_no = parseInt(d2_2);
                var destiny_number = d2_1_no + d2_2_no;
                console.log("Destiny No. : " + destiny_number);
                console.log("Destiny No. will be printed.");
                document.getElementById("destiny_number").innerHTML = "Destiny No. : " + destiny_number;
            }
    
            else{
                destiny_number = d2;
                console.log("Destiny No. : " + destiny_number);
                console.log("Destiny No. will be printed.");
                document.getElementById("destiny_number").innerHTML = "Destiny No. : " + destiny_number;
            }
        }
        else{
            destiny_number = d;
            console.log("Destiny No. : " + destiny_number);
            console.log("Destiny No. will be printed.");
            document.getElementById("destiny_number").innerHTML = "Destiny No. : " + destiny_number;
        }


        //Kua Number

        ky = year_1_no + year_2_no + year_3_no + year_4_no;
        kyn = parseInt(ky);
        console.log("ky = " + kyn)
        if (kyn.toString().length > 1){
            let ky_1 = String(kyn).charAt(0);
            let ky_2 = String(kyn).charAt(1);
            kyn_1 = parseInt(ky_1);
            kyn_2 = parseInt(ky_2);
            ky2 = kyn_1 + kyn_2;
            console.log("ky2 = " + ky2);
            if (ky2.toString().length > 1){
                let ky2_1 = String(ky2).charAt(0);
                let ky2_2 = String(ky2).charAt(1);
                kyn2_1 = parseInt(ky2_1);
                kyn2_2 = parseInt(ky2_2);
                let year_total = kyn2_1 + kyn2_2;
                console.log("Year Total : " + year_total);
            }
    
            else{
                year_total = ky2;
                console.log("Year Total : " + year_total);
            }
        }

        else{
            year_total = kyn;
            console.log("Year Total : " + year_total);
        }

        if(gender == "male"){
            k_number = 11 - year_total;

            if (k_number.toString().length > 1){
                let k_1 = String(k_number).charAt(0);
                let k_2 = String(k_number).charAt(1);
                k_1_no = parseInt(k_1);
                k_2_no = parseInt(k_2)
                var kua_number = k_1_no + k_2_no;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
            else{
                kua_number = k_number;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
            

        }
        else if(gender == "female"){
            k_number = year_total + 4;

            if (k_number.toString().length > 1){
                let k_1 = String(k_number).charAt(0);
                let k_2 = String(k_number).charAt(1);
                k_1_no = parseInt(k_1);
                k_2_no = parseInt(k_2)
                var kua_number = k_1_no + k_2_no;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
            else{
                kua_number = k_number;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
        }

            //loshu grid length settlement

            sun = document.getElementById("sun_text");
            moon = document.getElementById("moon_text");
            jupiter = document.getElementById("jupiter_text");
            rahu = document.getElementById("rahu_text");
            mercury = document.getElementById("mercury_text");
            venus = document.getElementById("venus_text");
            ketu = document.getElementById("ketu_text");
            saturn = document.getElementById("saturn_text");
            mars = document.getElementById("mars_text");
            
            //date_1_no

            if (date_1_no == "1"){
                document.getElementById("sun_text").textContent = "1";
            }
            else if (date_1_no == "2"){
                document.getElementById("moon_text").textContent = "2";
            }
            else if (date_1_no == "3"){
                document.getElementById("jupiter_text").textContent = "3";
            }
            else if (date_1_no == "4"){
                document.getElementById("rahu_text").textContent = "4";
            }
            else if (date_1_no == "5"){
                document.getElementById("mercury_text").textContent = "5";
            }
            else if (date_1_no == "6"){
                document.getElementById("venus_text").textContent = "6";
            }
            else if (date_1_no == "7"){
                document.getElementById("ketu_text").textContent = "7";
            }
            else if (date_1_no == "8"){
                document.getElementById("saturn_text").textContent = "8";
            }
            else if (date_1_no == "9"){
                document.getElementById("mars_text").textContent = "9";
            }

            //date_2_no

            if (date_2_no == "1"){
                if(date_1_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
            }
            if (date_2_no == "2"){
                if(date_1_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            if (date_2_no == "3"){
                if(date_1_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if (date_2_no == "4"){
                if(date_1_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if (date_2_no == "5"){
                if(date_1_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if (date_2_no == "6"){
                if(date_1_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if (date_2_no == "7"){
                if(date_1_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if (date_2_no == "8"){
                if(date_1_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if (date_2_no == "9"){
                if(date_1_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }

            //month_1_no

            if (month_1_no == "1"){
                if(date_1_no == "1" || date_2_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
            }
            if (month_1_no == "2"){
                if(date_1_no == "2" || date_2_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            if (month_1_no == "3"){
                if(date_1_no == "3" || date_2_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if (month_1_no == "4"){
                if(date_1_no == "4" || date_2_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if (month_1_no == "5"){
                if(date_1_no == "5" || date_2_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if (month_1_no == "6"){
                if(date_1_no == "6" || date_2_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if (month_1_no == "7"){
                if(date_1_no == "7" || date_2_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if (month_1_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if (month_1_no == "9"){
                if(date_1_no == "9" || date_2_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }

            //month_2_no

            if (month_2_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
            }
            if (month_2_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            if (month_2_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if (month_2_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if (month_2_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if (month_2_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if (month_2_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if (month_2_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if (month_2_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }

            //year_1_no

            if (year_1_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
            }
            if (year_1_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            if (year_1_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if (year_1_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if (year_1_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if (year_1_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if (year_1_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if (year_1_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if (year_1_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }

            //year_2_no

            if (year_2_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
            }
            if (year_2_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            if (year_2_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if (year_2_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if (year_2_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if (year_2_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if (year_2_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if (year_2_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if (year_2_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }

            //year_3_no

            if (year_3_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
            }
            if (year_3_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            if (year_3_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if (year_3_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if (year_3_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if (year_3_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if (year_3_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if (year_3_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if (year_3_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }
            
            //year_4_no

            if (year_4_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1" || year_3_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
            }
            if (year_4_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            if (year_4_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if (year_4_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if (year_4_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if (year_4_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if (year_4_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if (year_4_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if (year_4_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }

            //driver no

            if(printed == "yes" && psychic_number == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1" || year_3_no == "1" || year_4_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
            }
            if(printed == "yes" && psychic_number == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2" || year_4_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            if(printed == "yes" && psychic_number == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3" || year_4_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if(printed == "yes" && psychic_number == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4" || year_4_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if(printed == "yes" && psychic_number == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5" || year_4_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if(printed == "yes" && psychic_number == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6" || year_4_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if(printed == "yes" && psychic_number == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7" || year_4_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if(printed == "yes" && psychic_number == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8" || year_4_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if(printed == "yes" && psychic_number == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9" || year_4_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }

            //conductor number

            if(destiny_number == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1"|| year_2_no == "1" || year_3_no == "1" || year_4_no == "1" || (psychic_number=="1" && printed == "yes")){
                    sun.textContent += "1";
                }
                else{
                    sun.textContent = "1";
                }
            }
            if(destiny_number == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2" || year_4_no == "2" || (psychic_number=="2" && printed == "yes")){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            
            if(destiny_number == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3" || year_4_no == "3" || (psychic_number=="3" && printed == "yes")){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if(destiny_number == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4" || year_4_no == "4" || (psychic_number=="4" && printed == "yes")){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if(destiny_number == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5" || year_4_no == "5" || (psychic_number=="5" && printed == "yes")){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if(destiny_number == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6" || year_4_no == "6" || (psychic_number=="6" && printed == "yes")){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if(destiny_number == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7" || year_4_no == "7" || (psychic_number=="7" && printed == "yes")){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if(destiny_number == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8" || year_4_no == "8" || (psychic_number=="8" && printed == "yes")){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if(destiny_number == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9" || year_4_no == "9" || (psychic_number=="9" && printed == "yes")){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }

            //kua number

            if(kua_number == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1" || year_3_no == "1" || year_4_no == "1" || (psychic_number=="1" && printed == "yes") || destiny_number == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
            }
            if(kua_number == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2" || year_4_no == "2" || (psychic_number=="2" && printed == "yes") || destiny_number == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
            }
            if(kua_number == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3" || year_4_no == "3" || (psychic_number=="3" && printed == "yes") || destiny_number == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
            }
            if(kua_number == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4" || year_4_no == "4" || (psychic_number=="4" && printed == "yes") || destiny_number == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
            }
            if(kua_number == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5" || year_4_no == "5" || (psychic_number=="5" && printed == "yes") || destiny_number == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
            }
            if(kua_number == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6" || year_4_no == "6" || (psychic_number=="6" && printed == "yes") || destiny_number == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
            }
            if(kua_number == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7" || year_4_no == "7" || (psychic_number=="7" && printed == "yes") || destiny_number == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
            if(kua_number == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8" || year_4_no == "8" || (psychic_number=="8" && printed == "yes") || destiny_number == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
            }
            if(kua_number == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9" || year_4_no == "9" || (psychic_number=="9" && printed == "yes") || destiny_number == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
            }

           


    }
} 
