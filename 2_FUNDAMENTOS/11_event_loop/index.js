// function a() {
//     console.log('executa a()')
// }
// function b() {
//     console.log('executa b()')
// }
// function c() {
//     console.log('executa c()')
// }

// a()
// b()
// c()
//! $ node index
//! executa a()
//! executa b()
//! executa c()
//todo =====================================================
function a() {
    console.log('executa a()')
}
function b() {
    console.log('executa b()')
}
function c() {
    console.log('executa c()')
    console.log('dentro da função c')
    a()
    b()
}

a()
b()
c()
//! $ node index
//! executa a()
//! executa b()
//! executa c()
//! dentro da função c
//! executa a()
//! executa b()