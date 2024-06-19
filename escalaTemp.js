let temp = " "

console.log("Digite 'F' para Fahrenheit, 'C' para Celsius ou 'K' para Kevin");
process.stdin.on("data", function(data){
    temp = data.toString().trim().toLowerCase();

    switch(temp){
        case "f":
            console.log("Digite a temperatura em Fahrenheit: ");
            process.stdin.on("data", function(data){
                let grau = Number(data);
                let fah = (grau-32/1.8)
                    console.log("A temperatura em Celsius é: "+fah.toFixed(2));
                    console.log("A temperatura em Kelvin é: " +(fah+273.15).toFixed(2));
                    process.exit();
                })
            break;
        case "k":
            console.log("Digite a temperatura em Kelvin: ");
            process.stdin.on("data", function(data){
                let grau = Number(data);
                let kelvin = (grau-273.15);
                    console.log("A temperatura em Celsius é: "+kelvin.toFixed(2));
                    console.log("A temperatura em Fahrenheit é: "+((kelvin-273.15) * 1.8 + 32).toFixed(2));
                    process.exit();
                })
            break;
        case "c":
            console.log("Digite a temperatura em Celsius: ")
            process.stdin.on("data", function(data){
                let grau = Number(data);
                let celso = ((grau*1.8)+32);
                console.log("A temperatura em Fahrenheit é: "+celso.toFixed(2));
                console.log("A temperatura em Kelvin é: "+(celso+273.15).toFixed(2));
                process.exit();
            })
            break;
        }
    })
