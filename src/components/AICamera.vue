<template>
    <v-container fluid>
        <v-row class="text-center">
            <v-col>
                <v-img
                        :src="showUi ? actuallyPic : nonePic"
                        ref="myPic"
                        class="my-2"
                        contain
                        height="200"
                >

                    <v-btn right small center fab dark color="indigo" @click="playOrPause">
                        <v-icon  small dark>{{playState ? 'fa-play' : 'fa-pause' }}</v-icon>
                    </v-btn>


                </v-img>

            </v-col>
            <v-col>
                <v-switch v-model="showUi" label="Show clean video"></v-switch>
                <v-select
                        :items="items"
                        label="Filters"
                        outlined
                        multiple
                        small
                        :selected="selectedFilters"
                        v-model="selectedFilters"
                        @change="onChange"
                ></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'AICamera',

        data: () => {
            return {
                items: [
                    "None",
                    "Cat",
                    "Car"
                ],
                selectedFilters: undefined,
                catOnlyPic: require('../assets/cat.png'),
                carOnlyPic: require('../assets/car.png'),
                carAndCatPic: require('../assets/cat_car.png'),
                nonePic: require('../assets/cat_and_car_none.jpg'),
                actuallyPic: require('../assets/cat_and_car_none.jpg'),
                showUi: true,
                playState: true

            }
        },
        methods: {
            onChange(val) {
                console.log(val);
                console.log(this.selectedFilters);
                if (val.includes("None")) {
                    this.actuallyPic = this.nonePic;
                    this.selectedFilters = undefined;
                    return;
                }


               if (val.includes("Cat") && val.includes("Car")) {
                    console.log("meow car");
                    this.actuallyPic = this.carAndCatPic;
                    return;
                } else if (val.includes("Car")) {
                    console.log("car");
                    this.actuallyPic = this.carOnlyPic;
                   return;
                } if (val.includes("Cat")) {
                    console.log("meow");
                    this.actuallyPic = this.catOnlyPic;
                }

            },
            playOrPause(){
                this.playState = !this.playState;
            }
        }
    }
</script>
