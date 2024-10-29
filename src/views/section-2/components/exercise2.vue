<template>
  <div class="w-[100vw] mt-[10px]">
    <div class="text-center font-[700] text-[30px]">Todo List {{ countTodo }}</div>
    <div
      class="mt-[20px] max-w-[500px] mx-auto border-[1px] border-black p-[10px] rounded-[10px]"
    >
      <form @submit.prevent="handleAddTodo()" class="flex gap-[10px]" action="">
        <input
          v-model="todo.resInput"
          class="flex-1 border-[1px] border-black rounded-[10px] p-[10px]"
          type="text"
          placeholder="Add new todo"
        />
        <button class="w-[100px] border-[1px] border-black rounded-[10px]">
          Add item
        </button>
      </form>
      <div class="flex mt-[5px] justify-between">
        <div class="flex gap-[5px]">
          <label class="" for="show-done"> show done </label>
          <input
            class="mt-[3px]"
            type="checkbox"
            name="show-done"
            id="show-done"
            v-model="todo.isShowDone"
            :checked="todo.isShowDone"
          />
        </div>
        <div class="text-red-600">Delete done {{ countDone }} item</div>
      </div>
      <div>
        <ul>
          <li v-if="todo.isShowDone" v-for="(item, index) in listTodo" :key="index">
            <div class="flex justify-between">
              <div class="flex">
                <input
                  @change="changeStatus(index)"
                  class="mt-[3px]"
                  type="checkbox"
                  value="hello"
                  :checked="item.isDone"
                />
                <div>{{ item.name }}</div>
              </div>
              <div class="flex gap-[10px]">
                <button @click="updateTodo(index)" class="hover:text-yellow-600">
                  Update
                </button>
                <button @click="deleteTodo(index)" class="hover:text-red-600">
                  Delete
                </button>
              </div>
            </div>
          </li>
          <li v-else v-for="(item, index1) in listTodo" :key="index1">
            <div class="flex justify-between" v-show="!item.isDone">
              <div class="flex">
                <input
                  @change="changeStatus(index1)"
                  class="mt-[3px]"
                  type="checkbox"
                  value="hello"
                  :checked="item.isDone"
                />
                <div>{{ item.name }}</div>
              </div>
              <div class="flex gap-[10px]">
                <button @click="updateTodo(index1)" class="hover:text-yellow-600">
                  Update
                </button>
                <button @click="deleteTodo(index1)" class="hover:text-red-600">
                  Delete
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const listTodo = ref([
  {
    name: "football",
    isDone: false,
  },
  {
    name: "badminton",
    isDone: false,
  },
  {
    name: "badminton",
    isDone: true,
  },
]);

const todo = ref({
  resInput: "",
  isShowDone: false,
  isUpdate: false,
  indexUpdate: null,
});

const handleAddTodo = () => {
  if (!todo.value.isUpdate) {
    listTodo.value.push({
      name: todo.value.resInput,
      isDone: false,
    });
  } else {
    listTodo.value[todo.value.indexUpdate].name = todo.value.resInput;
    todo.value.isUpdate = false;
  }
  todo.value.resInput = "";
};

const changeStatus = (index) => {
  listTodo.value[index].isDone = !listTodo.value[index].isDone;
};

const deleteTodo = (index) => {
  // console.log("đã chọn", index)
  listTodo.value.splice(index, 1);
};

const updateTodo = (index) => {
  todo.value.isUpdate = true;
  todo.value.resInput = listTodo.value[index].name;
  todo.value.indexUpdate = index;
};

const countTodo = computed(() => {
  return listTodo.value.filter((item) => !item.isDone).length;
});

const countDone = computed(() => {
  return listTodo.value.filter((item) => item.isDone).length;
});

</script>

<style lang="scss" scoped></style>
