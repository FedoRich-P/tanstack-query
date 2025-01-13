import {v4} from 'uuid';

const todosList = [
    {id: v4(), title: "Купить молоко", done: false},
    {id: v4(), title: "Записаться на курсы", done: true},
    {id: v4(), title: "Позвонить другу", done: false},
    {id: v4(), title: "Прочитать книгу", done: false},
    {id: v4(), title: "Сделать зарядку", done: true},
    {id: v4(), title: "Написать отчет", done: false},
    {id: v4(), title: "Починить кран", done: false},
    {id: v4(), title: "Заплатить за интернет", done: true},
    {id: v4(), title: "Сходить в магазин", done: false},
    {id: v4(), title: "Подготовить презентацию", done: false},
];

// export const getTasks = () => {
//     return new Promise<TodoType[]>((resolve, reject) => {
//         setTimeout(() => resolve(todosList), 1000)
//     })
// }

