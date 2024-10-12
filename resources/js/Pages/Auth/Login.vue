<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputText from 'primevue/inputtext';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>

    <Head title="Log in" />
    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
    </div>

    <div class="flex gap-6 h-screen w-full px-2 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <img class="h-full" src="/Photos/login.png" alt="imagem figurativa">
        <div class="z-50 w-full flex justify-center items-center sm:rounded-lg ">
            <form @submit.prevent="submit" class="w-full px-4">
                <div>
                    <InputLabel for="email" value="Email" />
                    <InputText v-model="form.email" type="email" size="small" placeholder="E-mail" required
                        class="mt-1 block w-full" />
                    <InputError class="mt-2" :message="form.errors.email" />
                </div>

                <div class="mt-4">
                    <InputLabel for="password" value="Password" />
                    <InputText v-model="form.password" type="password" size="small" placeholder="Password" required
                        class="mt-1 block w-full" />
                    <InputError class="mt-2" :message="form.errors.password" />
                </div>

                <div class="block mt-4">
                    <label class="flex items-center">
                        <Checkbox v-model:checked="form.remember" name="remember" />
                        <span class="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div class="flex items-center justify-start mt-4">
                    <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Login
                    </PrimaryButton>
                    <div class="pl-2 font-light text-sm">Esqueçeu a sua_</div>
                    <Link v-if="canResetPassword" :href="route('password.request')"
                        class="underline text-smcc text-th-primary-dark hover:text-th-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Senha?
                    </Link>
                </div>
            </form>
        </div>
    </div>
</template>
