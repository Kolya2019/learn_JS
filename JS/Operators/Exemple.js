const button = {
    width: 200,
    text: 'gds',
    color: 'f'
}
const redButton = {
    ...button, //получаем данные объекта button
    color: 'red'
}
console.table(redButton)