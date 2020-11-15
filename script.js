const output = document.getElementById('input')

document.getElementById('one').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 1)
})

document.getElementById('two').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 2)
})

document.getElementById('three').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 3)
})

document.getElementById('four').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 4)
})


document.getElementById('five').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 5)
})

document.getElementById('six').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 6)
})


document.getElementById('seven').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 7)
})

document.getElementById('eight').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 8)
})

document.getElementById('nine').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 9)
})

document.getElementById('zero').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 0)
})

document.getElementById('dot').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + '.')
})

document.getElementById('delete').addEventListener('click', function () {
    const str = document.getElementById('input').getAttribute('value').slice(0, -1)
    document.getElementById('input').setAttribute('value', str)
}
)

document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('input').setAttribute('value', '')
})

let divNum
let num_len
let num
let operator

document.getElementById('divide').addEventListener('click', function () {
    num = document.getElementById('input').getAttribute('value')
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + '/')
    num_len = num.length + 1
    operator = '/'

})

document.getElementById('multiply').addEventListener('click', function () {
    num = document.getElementById('input').getAttribute('value')
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + 'X')
    num_len = num.length + 1
    operator = '*'

})

document.getElementById('add').addEventListener('click', function () {
    num = document.getElementById('input').getAttribute('value')
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + '+')
    num_len = num.length + 1
    operator = '+'

})

document.getElementById('subtract').addEventListener('click', function () {
    num = document.getElementById('input').getAttribute('value')
    document.getElementById('input').setAttribute('value', document.getElementById('input').getAttribute('value') + '-')
    num_len = num.length + 1
    operator = '-'

})

let result

document.getElementById('equal').addEventListener('click', function () {
    divNum = document.getElementById('input').getAttribute('value').slice(num_len)
    if (operator === '/') {
        result = num / divNum
    } else if (operator === '*') {
        result = num * divNum
    } else if (operator === '+') {
        result = Number(num) + Number(divNum)
    } else if (operator === '-') {
        result = num - divNum
    }
    document.getElementById('input').setAttribute('value', result)
})







