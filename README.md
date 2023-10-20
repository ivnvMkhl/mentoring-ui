# MentorHub UI

UI часть приложения MentorHub

### Клонирование репозитория

Для работы в проекте требуется NodeJS не ниже `16.0`

Рекомендуемая версия **`node 18.18.2 / npm 9.8.1`**

```bash
git clone git@github.com:ivnvMkhl/mentoring-ui.git
```

```bash
npm install
```

### Scripts

`npm run dev` - запуск девсервера

`npm run build` - продакшн билд

`npm run lint` - проверка линтером

`npm run tsc` - проверка компилятором

`npm run prettier` - проверка код форматером

`npm run pre-commit` - скрипт для прекоммит хука

`npm run prettify` - исправление код форматером по конфигу проекта

### Branches

`develop` - защищенная ветка для следующего релиза, CI/CD в firebase

`release/0.1` - пример имени для релизных веток (`release/{version}`)

`MNT-42-FEATURE_add_http_service` - пример рабочих веток и назания PR (`MNT-{number}-{TYPE}_{issue_description}`)

### Demo stands

- Front
    
    https://mentoring-ui.web.app/
    
- Back
    
    baseApi: https://imkhl-mentoring.glitch.me/
    
    swagger: https://imkhl-mentoring.glitch.me/docs/
