let hoogste_temperatuur = -1000
let laagste_temperatuur = 1000
basic.forever(function () {
    if (input.temperature() > hoogste_temperatuur) {
        hoogste_temperatuur = input.temperature()
    }
    if (input.temperature() < laagste_temperatuur) {
        laagste_temperatuur = input.temperature()
    }
    basic.showNumber(hoogste_temperatuur)
    basic.showNumber(laagste_temperatuur)
})
