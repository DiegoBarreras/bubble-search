let vec = [];
let boton_gen = document.getElementById("boton_generar");
let boton_sort = document.getElementById("boton_sort");

boton_gen.addEventListener("click", function() {
    vec = [];
    for (let i = 1; i <= 8; i++) {
        vec.push(Math.floor(Math.random() * 10));
    };
    document.getElementById("numRand").innerHTML = vec
})

boton_sort.addEventListener("click", function() {
    for (let i = 0; i <= vec.length; i++) {
        for (let j = 0; j <= ((vec.length) - i - 1); j++) {
            if (vec[j] > vec[j + 1]) {
                let temp = vec[j];
                vec[j] = vec[j + 1]
                vec[j + 1] = temp
            }
        }
    }
    document.getElementById("numRand").innerHTML = vec
})