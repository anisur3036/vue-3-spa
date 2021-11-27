<template>
    <div>
        <form v-on:submit.prevent="attamptLogin">
            <button type="submit" class="px-4 py-2 rounded border bg-blue-600 text-white">Login</button>
        </form>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        const attamptLogin = () => {
            store.dispatch('login', {
                email: 'anis@yahoo.com',
                password: 'password'
            })
        }

        return {
            attamptLogin
        }
    }
}
</script>