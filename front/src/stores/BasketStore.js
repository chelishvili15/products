import { defineStore } from 'pinia'

export const useBasketStore = defineStore('BasketStore', {
    state: () => {
        return {
            basket: [],
            sums: []
        }
    },
    actions: {
        addToBasket(product) {
            if (this.basket.map(val => val.id).includes(product.id)) {
                this.sums[this.basket.map(val => val.id).indexOf(product.id)]++
            } else {
                this.basket.push(product)
                this.sums.push(1)
            }
        },
        removeFromBasket(index) {
            this.basket.splice(index, 1)
            this.sums.splice(index, 1)
        }
    }
})