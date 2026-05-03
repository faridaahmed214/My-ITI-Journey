if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then((registration) => {
    console.log("Service Worker Registered");
    
    if (registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  });

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}

const taskTitle = document.getElementById("taskTitle");
const taskTime = document.getElementById("taskTime");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

async function renderTasks() {
  const tasks = await getTasksFromDB(); 
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;

    li.innerHTML = `
      <div class="task-info">
        <strong>${task.title}</strong>
        <small>${new Date(task.dueDate).toLocaleString()}</small>
      </div>
      <button class="delete-btn" onclick="handleDelete(${task.id})">🗑️</button>
    `;
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", async () => {
  if (!taskTitle.value || !taskTime.value) {
    alert("Please fill in all fields");
    return;
  }

  const newTask = {
    title: taskTitle.value,
    dueDate: taskTime.value,
    completed: false,
  };

  if (navigator.vibrate) navigator.vibrate(50);

  await saveTaskToDB(newTask); 
  taskTitle.value = "";
  taskTime.value = "";
  renderTasks(); 
});

window.handleDelete = async (id) => {
  if (navigator.vibrate) navigator.vibrate(40);
  await deleteTaskFromDB(id);
  renderTasks();
};

function startWatcher() {
  setInterval(async () => {
    const tasks = await getTasksFromDB();
    const now = new Date().getTime();

    tasks.forEach(async (task) => {
      const taskTimeMillis = new Date(task.dueDate).getTime();

      if (taskTimeMillis <= now && !task.completed) {
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);

        showTaskNotification(task.title);

        task.completed = true;
        await updateTaskInDB(task);

        renderTasks();
      }
    });
  }, 5000); 
}

function showTaskNotification(title) {
  if (Notification.permission === "granted") {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification("Task Due! | ميعاد المهمة", {
        body: `this is time for  ${title}`,
        icon: "./assets/icon512.png",
        badge: "./assets/icon192.png",
        vibrate: [200, 100, 200],
        tag: "task-alert",
        renotify: true
      });
    });
  }
}

document.addEventListener("click", () => {
    if (Notification.permission === "default") {
        Notification.requestPermission();
    }
}, { once: true });

renderTasks();
startWatcher();