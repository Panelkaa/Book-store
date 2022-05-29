
// export function sortGoodsPrice (id) {
//     return {
//         type: 'SORT_PRICE',
//         payload: {
//             id: id
//         }
//     }
// }

export function addGoodsToCart (id) {
    return {
        type: 'ADD_GOOD_TO_CART',
        payload: {
            id: id
        }
    }
}

export const removeGoodFromCart = (id) => {
    return {
        type: 'REMOVE_GOOD_FROM_CART',
        payload: {
            id: id
        }
    }
}
