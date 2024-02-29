<template>
  <div>
    <p>Products details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio velit aliquam quibusdam ullam esse explicabo et doloremque. Exercitationem repellat, nihil animi sapiente tempore ratione beatae veritatis provident temporibus magni! Error!</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params

  definePageMeta({
    layout: 'products'
  })
</script>

<style scoped>

</style>