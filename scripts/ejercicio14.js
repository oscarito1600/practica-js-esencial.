for (let i = 1; i <= 5; i++) {
    
    if (i === 3) {
        console.log("Se alcanzó el número 3. Interrumpiendo el ciclo...");
        alert("Se alcanzó el número 3. Interrumpiendo el ciclo...");
        break; 
    }
    
    console.log(i);
    alert("Número: " + i);
}