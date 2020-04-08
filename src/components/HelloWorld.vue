<template>
    <v-container fluid>
        <v-row class="text-center">
            <v-col>
                <v-img
                        :src="require('../assets/cat_and_car_none.jpg')"
                        class="my-2"
                        contain
                        height="200"
                >

                    <v-btn   right small  center fab dark color="indigo">
                        <v-icon small dark>fa-plus</v-icon>
                    </v-btn>
                    <v-btn right small  center fab dark color="indigo">
                        <v-icon small dark>fa-minus</v-icon>
                    </v-btn>

                </v-img>

            </v-col>
            <v-col>
              <v-switch v-model="switchTest" label="Show clean video"></v-switch>
              <v-select
                      :items="items"
                      label="Filters"
                      outlined
                      multiple
                      small
                      ref="filterSelect"
                      @change="onChange"
              ></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'HelloWorld',

        data: () => ({
            ecosystem: [
                {
                    text: 'vuetify-loader',
                    href: 'https://github.com/vuetifyjs/vuetify-loader',
                },
                {
                    text: 'github',
                    href: 'https://github.com/vuetifyjs/vuetify',
                },
                {
                    text: 'awesome-vuetify',
                    href: 'https://github.com/vuetifyjs/awesome-vuetify',
                },
            ],
            importantLinks: [
                {
                    text: 'Documentation',
                    href: 'https://vuetifyjs.com',
                },
                {
                    text: 'Chat',
                    href: 'https://community.vuetifyjs.com',
                },
                {
                    text: 'Made with Vuetify',
                    href: 'https://madewithvuejs.com/vuetify',
                },
                {
                    text: 'Twitter',
                    href: 'https://twitter.com/vuetifyjs',
                },
                {
                    text: 'Articles',
                    href: 'https://medium.com/vuetify',
                },
            ],
            whatsNext: [
                {
                    text: 'Explore components',
                    href: 'https://vuetifyjs.com/components/api-explorer',
                },
                {
                    text: 'Select a layout',
                    href: 'https://vuetifyjs.com/layout/pre-defined',
                },
                {
                    text: 'Frequently Asked Questions',
                    href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
                },
            ],
          switchTest: true,
          items: [
                  "None",
                  "Cat",
                  "Car"
          ]
        }),
      methods:{
          onChange: (val) =>{
            if(val.includes("None")){
              // this.$refs['filterSelect'].clear();
            }

            console.log(val);
          }
      }
    }
</script>
