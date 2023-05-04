<script lang="ts" setup>
</script>

<template>
    <div fixed inset-0 class="dark:bg-dark-4 light:bg-gray-1/40" flex items-center justify-center text-color text-7>
        chat-fedml
    </div>
</template>

<style scoped>
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.4);
    }
    100% {
        transform: scale(1);
    }
}

img {
    animation: pulse 2s infinite;
}
</style>
