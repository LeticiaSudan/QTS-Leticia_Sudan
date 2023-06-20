import {
    assert,
    assertExists,
    assertNotEquals,
    assertAlmostEquals,
    assertArrayIncludes
} from "http://deno.land/std/testing/asserts.ts"

let num1 = 8
let num2 = 8
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Deno.test("Teste Assert", () => {
    assert("Existe algo aqui mesmo???");
    assert("Aparentemente existe, ele não deu erro né?");
    assert("Em pleno 2023 ainda não inventaram a cura pra calvície");
});

Deno.test("Teste AssertExists", () => {
    assertExists(num1);
    assertExists(num2);
    assertExists(array1);
    assertExists(assertExists)
});

Deno.test("Teste AssertNotEquals", () => {
    assertNotEquals(num1, 9);
    assertNotEquals(num1, num2); //Vai dar erro aqui 
});

Deno.test("Teste AssertAlmostEquals", () => {
    assertAlmostEquals(num1 + num2, 16);
});

Deno.test("Teste AssertArrayIncludes", () => {
    assertArrayIncludes(array1, [0]); //Vai dar erro aqui também
});