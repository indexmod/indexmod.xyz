---
title: Bot
permalink: bot
layout: docs
exclude: true
type: docs
discovered: 2024
shortname: BOT
---

Вот подробная инструкция по созданию бота для отслеживания репозитория GitHub и реагирования на новые коммиты или создание новых страниц с использованием библиотеки PyGitHub для Python:

1. **Установка Python и необходимых библиотек**:
   - Установите Python, если у вас его еще нет.
   - Установите библиотеку PyGitHub с помощью pip:
     ```
     pip install PyGitHub
     ```

2. **Создание бота на GitHub**:
   - Зайдите на свою учетную запись GitHub.
   - Перейдите в "Settings" -> "Developer settings" -> "Personal access tokens".
   - Создайте новый токен с правами на чтение репозиториев. Убедитесь, что вы сохраните этот токен в безопасном месте, так как он дает доступ к вашим репозиториям.

3. **Написание скрипта бота**:
   - Создайте новый файл Python (например, `github_bot.py`).

   - Импортируйте необходимые модули:
     ```python
     from github import Github
     import time
     ```

   - Создайте функцию для инициализации объекта GitHub:
     ```python
     def initialize_github(token):
         return Github(token)
     ```

   - Создайте функцию для отслеживания новых коммитов:
     ```python
     def monitor_commits(repo):
         while True:
             commits = repo.get_commits()
             # Проверяем новые коммиты
             for commit in commits:
                 print("Новый коммит:", commit)
             time.sleep(60)  # Проверяем каждую минуту
     ```

   - Создайте функцию для отслеживания создания новых страниц:
     ```python
     def monitor_pages(repo):
         while True:
             pages = repo.get_pages()
             # Проверяем новые страницы
             for page in pages:
                 print("Новая страница:", page)
             time.sleep(60)  # Проверяем каждую минуту
     ```

4. **Основной код**:
   - В основной части кода инициализируйте объект GitHub с использованием токена:
     ```python
     if __name__ == "__main__":
         token = "Ваш_токен_GitHub"
         github = initialize_github(token)
         repo = github.get_repo("owner/repository_name")  # Замените на свой репозиторий
     ```

   - Запустите функции для отслеживания коммитов и страниц в отдельных потоках:
     ```python
     import threading

     commit_thread = threading.Thread(target=monitor_commits, args=(repo,))
     page_thread = threading.Thread(target=monitor_pages, args=(repo,))

     commit_thread.start()
     page_thread.start()
     ```

5. **Запуск**:
   - Запустите ваш скрипт Python:
     ```
     python github_bot.py
     ```

Теперь ваш бот будет отслеживать новые коммиты и создание новых страниц в вашем репозитории GitHub. Вы можете расширить его функциональность и добавить другие реакции на изменения в репозитории, например, отправку уведомлений или выполнение других действий.

---

[Карта](roadmap)
