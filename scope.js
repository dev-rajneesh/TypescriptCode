// Using var instead of let will make i accessible outdie the for loop also. THis can have severe logical errors
// Good practice to use let whihc keeps scope to for loop only
// Always solve all compile type erros in Typescript so that PURE javascript is generated
for (var i = 0; i < 5; i++) {
    console.log("Inside Loop. i = ", +i);
}
console.log("Outside loop. i = ", +i);
i++;
console.log("Outside loop after inreement. i = ", +i);
