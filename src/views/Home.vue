<template>
  <div class="w-[800px] mx-auto p-[10px]" v-for="item in listData" :key="item.id">
    <ItemList @handleClick="(data)=>{handleView(data)}" :content="item.content" :title="item.title" :id="item.id" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import ItemList from '@/views/components/ItemList.vue'
import { useRouter } from 'vue-router'

const listData = ref([
  {id: uuidv4(), title: 'title ne', content: 'This is detail1 !!!!'},
  {id: uuidv4(), title: 'title ne', content: 'This is detail2 !!!!'},
  {id: uuidv4(), title: 'title ne', content: 'This is detail3 !!!!'}
])

const router = useRouter()
const handleView = (data) => {
  router.push({
    name: 'Detail',
    params: {id: data.id},
    query: {content: data.content}
  })
}
</script>
