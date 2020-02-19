const formbtn = document.querySelector('#formbtn');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
loadEventlistener();
function loadEventlistener() {
  //dom内容加载完毕后加载本地存储
  document.addEventListener('DOMContentLoaded', () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks === null) {
      tasks = [];
    }
    console.log(tasks);
    //绚烂页面
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(task));
      //创建图标
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-times"></i>';
      li.appendChild(link);
      taskList.appendChild(li);
    });
  });

  formbtn.addEventListener('click', e => {
    if (taskInput.value === '') {
      alert('Add a Task!');
    } else {
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(taskInput.value));
      //创建图标
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-times"></i>';
      li.appendChild(link);
      taskList.appendChild(li);
      // 设置本地存储
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      if (tasks != null) {
        tasks.push(taskInput.value);
      } else {
        tasks = [];
        tasks.push(taskInput.value);
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    taskInput.value = '';
  });
  // 每个任务的删除功能使用事件代理优化性能,删除单个任务
  taskList.addEventListener('click', removeTask);
  //清除所有任务
  clearBtn.addEventListener('click', removeTasks);
  //过滤任务
  filter.addEventListener('blur', filterTask);
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you Sure?')) {
      e.target.parentElement.parentElement.remove();
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      if (tasks != null) {
        tasks.forEach((task, index) => {
          if (task === e.target.parentElement.parentElement.textContent) {
            tasks.splice(index, 1);
            console.log(e.target.parentElement.parentElement.textContent);
            console.log(task);
            console.log(tasks);
          }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
  }
}

function removeTasks(e) {
  //方法一
  //taskList.innerHTML = '';
  //方法2 性能较好
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.removeItem('tasks');
}
function filterTask(e) {
  console.log(e.target.value);
  const tasks = document.querySelectorAll('.collection-item');
  tasks.forEach(task => {
    const item = task.firstChild.textContent;
    if (
      item.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1
    ) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
    console.log(task.textContent);
  });
}
