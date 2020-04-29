<template>
    <v-container
            fluid
            fill-height
    >
        <v-layout
                align-center
                justify-center
        >
            <v-flex
                    xs12
                    sm8
                    md4
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="deep-purple accent-4"
                            dark
                            flat
                    >
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    label="Login"
                                    name="login"
                                    prepend-icon="fa-user-edit"
                                    type="text"
                                    v-model="user.login"
                            ></v-text-field>

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="fa-lock"
                                    type="password"
                                    v-model="user.password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn id="loginBtn" color="deep-purple accent-4" @click="login">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import loginService from '../service/LoginService';
    export default {
        name: "Login",
        data: () => {
            return {
                drawer: null,
                user: {
                    login: null,
                    password: null,
                }
            }
        },
        methods: {
            login() {
                loginService.setIsLogged(true);
                this.$router.push("/camera");
            }
        }
    }
</script>

<style scoped>
    #loginBtn {
        color: white;
    }
</style>
