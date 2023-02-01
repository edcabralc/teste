<template>
    <div
        v-for="({id, checked, title, price, paragraph, src}, index) in rooms"
        @click="getItem(rooms, id)"
        class="container-titulos-acomodacao"
        :key="index"
    >
        <input
            class="item-check"
            type="radio"
            name="acomodacao"
            :id="title"
            :value="title"
            :checked="!checked"
        />
        <label :for="title">
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
                <img :src="`${src}`" :alt="title" />
            </div>
        </label>
    </div>
</template>

<script>
import {rooms} from "../helpers/dataRooms";

export default {
    name: "ListRoom",
    data() {
        // console.log(rooms);
        // console.log(rooms.checkedData);
        return {
            rooms,
        };
    },
    methods: {
        onToggle: (elem) => (elem = !elem),
        getItem: (arr, id) => {
            arr.filter((item, index, arrr) => {
                if (item.id == id) {
                    console.log(item);
                }
            });
        },
    },
    computed: {
        test: () => getItem(rooms, id),
    },
};
</script>

<style lang="scss">
.container-tipo-acomodacao {
    flex: 2;
}

.container-titulos-acomodacao img {
    flex: 1 0 30%;
    width: 30%;
    border-radius: 10px;
}

.item-check {
    display: none;
    padding: 5rem 0;
}

.item-label {
    display: flex;
    flex: 1;
    border: 1px solid #016956;
    border-radius: 10px;
    padding: 1rem;
    background: #fff;
    margin: 1rem 0;
    gap: 1rem;
}

.circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #016956;
    padding: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.item-label img {
    object-fit: cover;
}

.item-check:checked ~ label div {
    background-color: #eff5f0;
    color: #016956;
}

.item-check:checked ~ label .circle .checkmark {
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #016956;
}
</style>
