export function createStore(rootReducer, initialState) {
    //let state = {}  // объект состояния
    /*смотреть строку выше: состояние как правило не всегда изначально пустой объект, 
    поэтому инициализация начального начального состояния тоже происходит через rootReducer(...)
    rootReducer(initialState, { type: '__INIT__' })   здесь в параметре передается initialState - переданный в createStore,
    вместо action rootReducer принимает '__INIT__', потому что ничего не происходит, а всего лишь инициализируется
    начальное состояние state
    */
    let state = rootReducer(initialState, {type: '__INIT__'})
    const subscribers = []  // массив слушателей
    return {

        // action = { type: 'INCREMENT' }
        dispatch(action) {
           state = rootReducer(state, action) // прогоняем через reducer предыдущее состояние и action, пришедший из компоненты
           subscribers.forEach(sub => sub()) // уведомляем всех слушателей, что состояние изменилось, путем вызова всех callback функций, хранящихся в массиве слушателей
        },
        subscribe(callback) {
            subscribers.push(callback)  // добавляем в массив слушателей функцию-изменение
        },
    
        getState() {
            return state;  // получаем актуальное состояние
        }
    }



}