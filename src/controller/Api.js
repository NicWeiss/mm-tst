import { toast } from 'react-toastify';

//Promise для подключения к бэкэнду
const requesrApi = (method, data) => new Promise((resolves, rejects) => {
    const url = 'http://motmom-back.lo/api/' + method

    const request = new XMLHttpRequest()
    request.open('POST', url, false)

    request.onload = () => (request.status === 200) ?
        resolves(JSON.parse(request.response)) :
        rejects(Error(rejects.statusText).results)
    request.send(JSON.stringify(data));
})

/** Авторизация
 * 
 * @param {*} pass 
 */
export const login = (pass = "") =>
    requesrApi('login', { password: pass }).then(
        answer => {
            if (answer.status === 200) { return true } else { return false }
        },
        error =>{ toast.error('Network error'); return false}
    )

/** Запрос списка товаров
 * 
 * @param {*} text 
 */
export const get_products = (text = "") =>
    requesrApi('get_products', { filter: text }).then(
        answer => {
            return answer
        },
        error =>{ toast.error('Network error'); return false}
    )

/** Добавление нового пустого продукта
 * 
 */
export const add_product = () =>
    requesrApi('add_product', {}).then(
        answer => {
            return answer
        },
        error =>{ toast.error('Network error'); return false}
    )

/** обновление существующего товара
 * 
 * @param {*} product 
 */
export const update_product = (product = {}) =>
    requesrApi('edit_product', { product: product }).then(
        answer => {
            return answer
        },
        error =>{ toast.error('Network error'); return false}
    )

/** Удаление товара
 * 
 * @param {*} id 
 */
export const delete_product = (id = "") =>
    requesrApi('remove_product', { id: id }).then(
        answer => {
            return answer
        },
        error =>{ toast.error('Network error'); return false}
    )