<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center px-16 py-2 bg-th-primary-dark border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-th-primary focus:bg-th-primary active:bg-th-primary focus:ring-offset-2 disabled:opacity-50 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
