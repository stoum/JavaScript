
/* Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):) */

let smile = ''

for (let i = 0; i < 5; i++) {
	smile += ':) '
    console.log(smile)
}
