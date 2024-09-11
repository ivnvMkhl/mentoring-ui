# Code guide

### 1 Common

### 1.1 Prettier

В проекте работает проверка синтаксиса с помощью Prettier. Для авто исправления есть скрипт **`npm run prettify`**

- Табуляция - 2 пробела
- Максимальная длинна строки - 120
- Приоритет на одинарные кавычки
- Точка с запятой в конце каждой строчки

> Prettier config:
> 
> 
> ```json
> {
> "tabWidth": 2,
> "singleQuote": true,
> "printWidth": 120
> }
> ```
> 

### 1.2 ESLint

В проекте есть проверка код стиля с помощью ESLint. Для проверки файлов ESLint есть скрипт **`npm run lint`**. Не рекомендуется использовать автофикс  ESLint. Список правил и подключенные правила можно найти в файле **`.eslintrc.cjs`**

### 1.3 Импорты и экспорты

В проекте используются **ES6 Modules**.

- Все импорты собираются вверху каждого файла.
- Для директорий с переиспользуемыми частями инициализируем алиасы @
- Экспорты любых частей записываются в конце файла. Прямой экспорт константы запрещен.
- Допускается использовать только именованные экспорты.
- Экспорты типов декларируются через `export type {}`

```tsx
import { rootStore } from '@store/rootStore'

type StoreSchema = {...};

const storeValidation = () => {...};

export { storeInit }
export type { StoreSchema}
```

### 1.4 Нейминг

- Сокращения в нейминге запрещены.
- Использование больше 5 слов в нейминге запрещено.
- В нейминге рекомендуется избегать общих слов без уточнения содержимого: data, settings, response, result, config, query.
    
    ```tsx
    // Не правильно
    const userData = {id: 1, name: 'Luke'};
    const getConfig = () => {
    	return store.config;
    };
    const settings = {method: 'GET', url: 'https://fizzbuzz.com'};
    const response = fetch('https://fizzbuzz.com/todos');
    
    // Правильно
    const user = {id: 1, name: 'Luke'};
    const getAppConfig = () => {
    	return appStore.config;
    };
    const fetchSettings = {method: 'GET', url: 'https://fizzbuzz.com'};
    const todoList = fetch('https://fizzbuzz.com/todos')
    ```
    
- Для структур однотипных элементов используется либо множественное число, либо приставки List или Map в зависимости от того список это или мапа.
    
    ```tsx
    // Не правильно
    const userArr = [{id: 1, name: 'Luke'}, {id: 2, name: 'Ben'}];
    const lessonObj = {'#LSSN42983457': {date: '11.03.2023'}, '#LSSN98348745': {date: '20.08.2023'}};
    
    // Правильно
    const users = [{id: 1, name: 'Luke'}, {id: 2, name: 'Ben'}];
    const lessons = {'#LSSN42983457': {date: '11.03.2023'}, '#LSSN98348745': {date: '20.08.2023'}};
    
    // Альтернативно правильно
    const userList = [{id: 1, name: 'Luke'}, {id: 2, name: 'Ben'}];
    const lessonMap = {'#LSSN42983457': {date: '11.03.2023'}, '#LSSN98348745': {date: '20.08.2023'}};
    
    ```
    
- Имена переменных и функций записываются в camelCase (исключение данные пришедшие с бекенда в нейминге snake_case такой нейминг должен быть описан в типах). Имена переменных должны отражать суть лежащей в ней сущности
    
    ```tsx
    const userName = 'iMkhl';
    ```
    
- Имена функций должны содержать глаголы
    
    ```tsx
    const getUserName = (userId: string) => { ... }
    ```
    
- Имена постоянных констант записываются в UPPER_CASE
    
    ```tsx
    const DEFAULT_TEXT_COLOR = '#000000'
    ```
    
- Имена типов и интерфейсов записываются в PascalCase без использования префиксов
    
    ```tsx
    type UserInfo = {
      id: string;
      name: string;
    	registeredAt: string;
    }
    ```
    
- Имена React компонент (в том числе имена файлов компонент) записываются в PascalCase
    
    ```tsx
    const LoginForm: React.FC = () => { ... }
    ```
    
- Имена классов записываются в PascalCase
    
    ```tsx
    class UserService { ... }
    ```
    
- Имена CSS  классов в модульных CSS  записываются в  camelCase
    
    ```css
    .loginInput {
    	display: flex;
    	border: 1px solid red;
    }
    ```
    
- Перечисления Enum или наборы констант записываются в PascalCase
    
    ```tsx
    enum ButtonKind {
    	DEFAULT = 'default',
    	SOLID = 'solid',
    	TEXT = 'text',
    	GHOST = 'ghost'
    }
    
    const ButtonKind = {
    	DEFAULT: 'default',
    	SOLID: 'solid',
    	TEXT: 'text',
    	GHOST: 'ghost'
    } as const;
    ```
    

### 1.5 Использование var, let и const

- Не используем `var`
- Используем везде `const`
- Используем `let` в исключительных случаев когда использование оправдано сильным выигрышем в производительности и эта функция должна быть описана отдельно и помечена комментарием с описанием мотивации использования `let`

### 1.6 Неявные приведения типов

Неявные приведения типов и использование `.toString()` запрещены. 

Для явного приведения типов используем конструкторы `Number()`, `String()`, `Boolean()`

```tsx
// Не правильно
const num = +’42’;
const str = 42.toString();
const bool = !!'true'

// Правильно
const num = Number(’42’);
const str = String(42);
const bool = Boolean('true')
```

### 1.7 Использование “!”

Использовать `!` можно только для единичного отрицания. 

Запрещено использовать `!!` для приведения к `boolean` типу. 

Использовать `!` для явного отрицания `null` или `undefined` запрещено.

```tsx
// Не правильно
const isValidLength = !!value.length;
const rootNode = document.getElementById('root')!; // rootNode: HTMLElement

// Правильно
const isValid = !existedUserNames.includes(newUserName);
const isValidLength = Boolean(value.length);
const rootNode = document.getElementById('root'); // rootNode: HTMLElement | null
if (rootNode) {...}
```

### 1.8 Мутации и спред оператор “…” и деструктуризация

Мутации объектов и массивов запрещены. Для добавления или переписывания элемента в массиве или объекте создаем новую константу и с помощью спред оператора раскладываем в новую сущность старую и добавляем / переписываем новый элемент.

```tsx
const itemList = [{ id: 1 }, { id: 2 }];
const newItem = { id: 3 };

// Неправильно
itemList.push(newItem);

// Правильно
const updatedItemList = [...itemList, newItem];
```

Спред оператор и деструктуризацию можно использовать для сбора параметров в функции, сбор оставшихся элементов в массиве или объекте.  

```tsx
// Правильно
const myFunction = (firstProp, ...restProps) => {...};
const [ firstElement, secondElement ] = tupleArr;
const [ firstElement, ...restElements ] = array;
const { id, name, email } = user;
```

### 1.9 **Optional chaining (?.) и Nullish operator (??)**

Использование `.?` разрешено так же как и оператора `??` 

```tsx
const theme = store?.theme ?? DEFAULT_THEME;
const filteredArray = array?.filter(filterFunction) ?? [];
```

---

### 2 TypeScript

### 2.1 Типы и интерфейсы

- Используем **типы (type)** для всей типизации в проекте.
- Использование **интерфейсов (interface)** запрещено

### 2.2 Enum и Union

Используем Union вместо Enum. 

```tsx
// Правильно
type ButtonKind = 'default' | 'solid' | 'text' | 'ghost';

// Не правильно
enum ButtonKind {
	DEFAULT = 'default',
	SOLID = 'solid',
	TEXT = 'text',
	GHOST = 'ghost'
}
```

Если требуется поведение перечисления 

Если требуется создать словарь на основе перечисления то используем `Record<> … as const` 

```tsx
const buttonsLabel:  Record<ButtonKind, string> = {
  default: 'Дефолтная кнопка',
  solid: 'Залитая кнопка',
  text: 'Кнопка в виде теста',
  ghost: 'Кнопка приведенье',
} as const
```

Не создаем одинокие значения которые потом воспринимаются как string

```tsx
// Правильно
const DEFAULT_BUTTON_KIND: ButtonKind = 'default';

// Не правильно
const DEFAULT_BUTTON_KIND = 'default';
```

Для для обработки списка значений из Union используем switch … case

```tsx
const neededButton: ButtonKind[] = ['default', 'ghost', 'solid']

const buttons = neededButton.map((buttonKind) => {
  switch (buttonKind) {
    case 'default': 
      return <Button kind={buttonKind}>{buttonsLabel[buttonKind]}</Button>
    case 'ghost': 
      return <Button kind={buttonKind}>{buttonsLabel[buttonKind]}</Button>
    case 'solid': 
      return <Button kind={buttonKind}>{buttonsLabel[buttonKind]}</Button>
    case 'text': 
      return <Button kind={buttonKind}>{buttonsLabel[buttonKind]}</Button>
  }
})
```

### 2.3 Использование as

Использование `as` для тайпкастинга запрещено.

```tsx
// Запрещено
myFunction(prop as NeededType)
```

Использование as допустимо только в 2х случаях: для переименовывания названия переменных в импортах и в выражении `as const` для фиксации типа чтобы тайпскрипт ругался на попытку мутации.

```tsx
import {Button as AntdButton} from './antd'

const notMutableObject = { name: 'Mike' } as const;
```

### 2.4 Использование unknown и any и **Type Guards**

Запрещено использование `any`. 

Для неизвестных типов требуется задать ему тип `unknown` и добавить проверки на наличие и типы полей выделив проверки в Type Guard. Использование `as` в тайпгардах запрещено.

```tsx
type ItemList = { id: string }[];

const isItemList = (query: unknown): queryResponse is ItemList => {
  if (Array.isArray(query)) {
    const predicateFn = (item: unknown) => {
      return typeof item === 'object' && item !== null && 'id' in item && typeof item.id === 'string';
    };
    return query.every(predicateFn);
  }
  return false;
};

const mapQueryToItemList = (queryResponse: unknown): ItemList => {
  if (isItemList(queryResponse)) {
    return queryResponse;
  }
};
```

### 2.5 Использование **satisfies**

---

### 3 React

### 3.1 Шаблон React компоненты

- Все React компоненты типизируются как React.FC.
- Использование классовых компонентов запрещено.
- Тип пропсов называем по имени компоненты + Props
- Тип пропсов декларируется через дженерик `React.FC<>`
- Пропсы вытаскиваем деструктуризацией из первого параметра компоненты

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
}

const  Button:  React.FC<ButtonProps>  = ({ label, onClick }) => {
  return  <button onClick={ onClick }>{ label }</button>;
};

export { Button };
```
