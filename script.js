let newUser = {
    'name' : undefined,
    'lastName' : undefined,
    'age' : NaN,
    'leapYear' : undefined,
    'zodiac' : undefined,
    'birstday' : {
        'day' : NaN,
        'month' : NaN,
        'year' : NaN,
    }
}
const currentYear = 2023
const error = 'Помилка запису!'
let finalResult = undefined
newUser.name = prompt('what is your name?') + ' '
newUser.lastName = prompt('what is your last name?')
newUser.birstday.day = +prompt('on what day were you born?')
newUser.birstday.month = +prompt('In what month were you born?')
newUser.birstday.year = +prompt('What year were you born?')

if ((newUser.birstday.day > 31 || newUser.birstday.day < 1) || (newUser.birstday.month > 12 || newUser.birstday.month < 0)) {
    alert(error)
}
newUser.age = currentYear - newUser.birstday.year + ' '

if (newUser.birstday.year % 400 === 0 || newUser.birstday.year % 4 === 0) {
    newUser.leapYear = true
}
else {
    newUser.leapYear = false
}

if ((newUser.birstday.month === 1 && newUser.birstday.day >= 20) || (newUser.birstday.month === 2 && newUser.birstday.day <= 18)) {
    newUser.zodiac = 'Aquarius ♒'
}
else if ((newUser.birstday.month === 2 && newUser.birstday.day >= 19) || (newUser.birstday.month === 3 && newUser.birstday.day <= 20)) {
    newUser.zodiac = 'Pisces ♓'
}
else if ((newUser.birstday.month === 3 && newUser.birstday.day >= 23) || (newUser.birstday.month === 4 && newUser.birstday.day <= 19)) {
    newUser.zodiac = 'Aries ♈'
}
else if ((newUser.birstday.month === 4 && newUser.birstday.day >= 20) || (newUser.birstday.month === 5 && newUser.birstday.day <= 20)) {
    newUser.zodiac = 'Taurus ♉'
}
else if ((newUser.birstday.month === 5 && newUser.birstday.day >= 21) || (newUser.birstday.month === 6 && newUser.birstday.day <= 20)) {
    newUser.zodiac = 'Gemini ♊'
}
else if ((newUser.birstday.month === 6 && newUser.birstday.day >= 21) || (newUser.birstday.month === 7 && newUser.birstday.day <= 22)) {
    newUser.zodiac = 'Cancer ♋'
}
else if ((newUser.birstday.month === 7 && newUser.birstday.day >= 23) || (newUser.birstday.month === 8 && newUser.birstday.day <= 22)) {
    newUser.zodiac = 'Leo ♌'
}
else if ((newUser.birstday.month === 8 && newUser.birstday.day >= 23) || (newUser.birstday.month === 9 && newUser.birstday.day <= 22)) {
    newUser.zodiac = 'Virgo ♍'
}
else if ((newUser.birstday.month === 9 && newUser.birstday.day >= 23) || (newUser.birstday.month === 10 && newUser.birstday.day <= 22)) {
    newUser.zodiac = 'Libra ♎'
}
else if ((newUser.birstday.month === 10 && newUser.birstday.day >= 23) || (newUser.birstday.month === 11 && newUser.birstday.day <= 21)) {
    newUser.zodiac = 'Scorpio ♏'
}
else if ((newUser.birstday.month === 11 && newUser.birstday.day >= 22) || (newUser.birstday.month === 12 && newUser.birstday.day <= 21)) {
    newUser.zodiac = 'Sagittarius ♐'
}
else if ((newUser.birstday.month === 12 && newUser.birstday.day >= 22) || (newUser.birstday.month === 1 && newUser.birstday.day <= 19)) {
    newUser.zodiac = 'Capricorn ♑'
}
else {
    alert(error)
}

if (newUser.leapYear) {
    finalResult = 'User Bio: ' + newUser.name + newUser.lastName + ', ' + newUser.age + 'роки (Leap year), ' + newUser.zodiac + ';'
}
else {
    finalResult = 'User Bio: ' + newUser.name + newUser.lastName + ', ' + newUser.age + 'роки, ' + newUser.zodiac
}
alert(finalResult)