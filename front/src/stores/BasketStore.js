import { defineStore } from 'pinia'

export const useBasketStore = defineStore('BasketStore', {
    state: () => {
        return {
            basket: [],
            sums: [],
        }
    },
    actions: {
        addToBasket(product) {
            this.basket.push(product)
            this.sums.push(1)
        },
        removeFromBasket(index) {
            this.basket.splice(index, 1)
            this.sums.splice(index, 1)
        },
        checkToBasket(id) {
            return !this.basket.map(val => val.id).includes(id)
        }
    },
    getters: {
        getSumPrice: (state) => {
            return (state.basket.map(val => val.price).map((val, idx) => val * state.sums[idx])).reduce((a, b) => a + b)
        }
    }
})