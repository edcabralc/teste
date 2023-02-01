<template>
    <div
        v-for="({title, price, paragraph, src}, index) in rooms"
        class="container-titulos-acomodacao"
        :key="index"
    >
        <input class="item-check" type="radio" name="acomodacao" id="deluxe" />
        <label for="deluxe">
            <div class="item-label">
                <div>
                    <div class="flex">
                        <span class="circle">
                            <span class="checkmark"></span>
                        </span>
                        <h3>{{ title }}</h3>
                    </div>
                    <p>
                        {{ paragraph }}
                    </p>
                    <p class="preco">R$ {{ price }},00</p>
                </div>
                <img :src="src" :alt="title" />
            </div>
        </label>
    </div>
</template>

<script>
import {rooms} from "../helpers/dataRooms";

export default {
    name: "ListRoom",
    data() {
        console.log(rooms);
        return {rooms};
    },
};
</script>

<style></style>
