import { log } from './utils';
import { printTodos } from './print-todos';
import './todos.css';

const todos = [
    {title: '$input.value', isDone: false},
    {title: '$input.value', isDone: false}
];

const $form  = document.querySelector('.new-task')
const $input = document.querySelector('.new-task > input')

const checkTodo = (e) => {
    e.preventDefault();
    console.log($input.value);

    // todo 추가
    const todo = {title: $input.value, isDone: false}
    todos.push(todo);
    console.log(todos)

    // input 초기화
    $input.value = '';

    // todos 출력'
    print();

};
const deleteTodo = (index) => {
    console.log('delete', index);
    // todos에서 index번째 todo 삭제
    todos.splice(index, 1);

    print();
};
const toggleTodo = (index) => {
    console.log('toggle');
};

const print = () => {
    printTodos(todos);
};

// 폼, input 입력 이벤트 추가하기
// 입력했을때 todo 추가하기
$form.addEventListener('submit', checkTodo);

// 삭제, isDone
document.body.addEventListener('click', (e) => {
    const index = parseInt(e.target.parentNode.dataset.index);
    if(e.target.className==='delete'){
        deleteTodo(index);
    }
    else if(e.target.className==='toggle-checked'){
        toggleTodo(index);
    }
})

//todos 뿌려주기
print();