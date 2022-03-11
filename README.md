# Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022



## Основы XMLHttpRequest


Объект XMLHttpRequest (или, как его кратко называют, «XHR») даёт возможность из JavaScript делать HTTP-запросы к серверу без перезагрузки страницы.

Несмотря на слово «XML» в названии, XMLHttpRequest может работать с любыми данными, а не только с XML.

**Пример**

```

document.getElementById("get-data").addEventListener("click", loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "dbe.txt", true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.response);
            document.querySelector(".output").innerHTML = `
            <p>
            ${this.response}
            </p>
            `
        } else if (this.status === 404) {
            alert("Can not connect to DB!!!")
        } else {
            alert("Server error!!!")
        }
    }

    xhr.onprogress = function () {
        console.log('readyState:  ' + xhr.readyState)
    }

    xhr.send();
}
```


**Настроить: open**

```
xhr.open(method, URL, async, user, password)
```

- Этот метод – как правило, вызывается первым после создания объекта XMLHttpRequest.

- Задаёт основные параметры запроса:

- method – HTTP-метод. Как правило, используется GET либо POST, хотя доступны и более экзотические, вроде TRACE/DELETE/PUT и т.п.

- URL – адрес запроса. Можно использовать не только http/https, но и другие протоколы, например ftp:// и file://.

- При этом есть ограничения безопасности, называемые «Same Origin Policy»: запрос со страницы можно отправлять только на тот же протокол://домен:порт, с которого она пришла. В следующих главах мы рассмотрим, как их можно обойти.

- async – если установлено в false, то запрос производится синхронно, если true – асинхронно.

«Синхронный запрос» означает, что после вызова xhr.send() и до ответа сервера главный поток будет «заморожен»: посетитель не сможет взаимодействовать со страницей – прокручивать, нажимать на кнопки и т.п. После получения ответа выполнение продолжится со следующей строки.

«Асинхронный запрос» означает, что браузер отправит запрос, а далее результат нужно будет получить через обработчики событий, которые мы рассмотрим далее.

- user, password – логин и пароль для HTTP-авторизации, если нужны.
