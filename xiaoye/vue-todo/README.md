# component -> action -> commit -> mutation -> change -> state -> component

## Vuex workflow

1. component -> dispatch -> action
2. dispatch -> actionType -> action
3. action -> commit -> mutation
4. mutation -> change -> state
5. render 方案：state -> component

## file collection

1. actionTypes: action type
2. actions: fn call mutation
3. mutations: fn change state
4. state: centered data manage pool
5. store output: 出口

## component division

- Todo
  - TodoInput
  - TodoList
    - TodoItem
      - ButtonDoing
      - ButtonDone
      - ButtonDelete
