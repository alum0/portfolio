# Инструкция по деплою FloraHome на GitHub Pages

Этот проект теперь настроен для автоматического деплоя на GitHub Pages с помощью пакета `gh-pages`.

## Что было сделано:
1. Инициализирован `package.json` в папке `FloraHome`.
2. Установлен пакет `gh-pages` как dev-зависимость.
3. Добавлен скрипт `"deploy"` в `package.json`.
4. Установлен URL `"homepage"` как `https://alum0.github.io/portfolio/`.

## Как запустить деплой:

Чтобы опубликовать сайт в первый раз или после внесения изменений, выполните следующие действия:

1. Откройте терминал в папке проекта (`FloraHome`).
2. Выполните команду:
   ```bash
   npm run deploy
   ```

## Настройка в GitHub:

После успешного выполнения команды:
1. Перейдите в ваш репозиторий на GitHub.
2. Зайдите в **Settings** > **Pages**.
3. В разделе **Build and deployment** убедитесь, что выбрано:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/(root)`

Сайт станет доступен по адресу: [https://alum0.github.io/portfolio/](https://alum0.github.io/portfolio/)

---
> [!NOTE]
> Если у вас возникнут ошибки с доступом Git при выполнении `npm run deploy`, убедитесь, что вы авторизованы в Git и у вас есть права на пуш в репозиторий.
