# Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022

https://alimbaeva.github.io/Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022/gh-pages/fetchApiBtn/index.html

https://alimbaeva.github.io/Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022/gh-pages/fetchTask2/index.html

https://alimbaeva.github.io/Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022/gh-pages/fetchTask1/index.html

https://alimbaeva.github.io/Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022/gh-pages/asynkAwait-task/index.html

https://alimbaeva.github.io/Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022/gh-pages/asinkAwait/index.html

https://alimbaeva.github.io/Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022/gh-pages/fetch/index.html

https://alimbaeva.github.io/Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022/gh-pages/http/index.html


https://alimbaeva.github.io/Http_Ajax_Json_Rest_Fetch_Async_Await_KK_2022/gh-pages/xhr/index.html


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


**Отослать данные: send**

```
xhr.send([body])
```

Именно этот метод открывает соединение и отправляет запрос на сервер.

В body находится тело запроса. Не у всякого запроса есть тело, например у GET-запросов тела нет, а у POST – основные данные как раз передаются через body.


**Отмена: abort**

```
xhr.abort()
```
Вызов xhr.abort() прерывает выполнение запроса.



**Ответ: status, statusText, responseText**

Основные свойства, содержащие ответ сервера:

_status_
HTTP-код ответа: 200, 404, 403 и так далее. Может быть также равен 0, если сервер не ответил или при запросе на другой домен.



_statusText_
Текстовое описание статуса от сервера: OK, Not Found, Forbidden и так далее.



_responseText_
Текст ответа сервера.
Есть и ещё одно свойство, которое используется гораздо реже:



_responseXML_
Если сервер вернул XML, снабдив его правильным заголовком Content-type: text/xml, то браузер создаст из него XML-документ. По нему можно будет делать запросы **_xhr.responseXml.querySelector("...") и другие._**

Оно используется редко, так как обычно используют не XML, а JSON. То есть, сервер возвращает JSON в виде текста, который браузер превращает в объект вызовом **_JSON.parse(xhr.responseText)._**



**Синхронные и асинхронные запросы**



Если в методе **_open_** установить параметр **_async_** равным **_false_**, то запрос будет синхронным.



Синхронные вызовы используются чрезвычайно редко, так как блокируют взаимодействие со страницей до окончания загрузки. Посетитель не может даже прокручивать её. Никакой JavaScript не может быть выполнен, пока синхронный вызов не завершён – в общем, в точности те же ограничения как **_alert._**

```
// Синхронный запрос
xhr.open('GET', 'phones.json', false);

// Отсылаем его
xhr.send();
// ...весь JavaScript "подвиснет", пока запрос не завершится
```

Для того, чтобы запрос стал **_асинхронным_**, укажем параметр async равным **_true_**.

Изменённый JS-код:

```
var xhr = new XMLHttpRequest();

xhr.open('GET', 'phones.json', true);

xhr.send(); // (1)

xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;

  button.innerHTML = 'Готово!';

  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    alert(xhr.responseText);
  }

}

button.innerHTML = 'Загружаю...'; // (2)
button.disabled = true;
```

Если в open указан третий аргумент **_true_** (или если третьего аргумента нет), то запрос выполняется асинхронно. Это означает, что после вызова **_xhr.send()_** в строке (1) код не «зависает», а преспокойно продолжает выполняться, выполняется строка (2), а результат приходит через событие (3), мы изучим его чуть позже.



**Событие readystatechange**


Событие **_readystatechange_** происходит несколько раз в процессе отсылки и получения ответа. При этом можно посмотреть «текущее состояние запроса» в свойстве **_xhr.readyState_**.

В примере выше мы использовали только состояние 4 (запрос завершён), но есть и другие.


```
const unsigned short UNSENT = 0; // начальное состояние
const unsigned short OPENED = 1; // вызван open
const unsigned short HEADERS_RECEIVED = 2; // получены заголовки
const unsigned short LOADING = 3; // загружается тело (получен очередной пакет данных)
const unsigned short DONE = 4; // запрос завершён
```


Запрос проходит их в порядке **_0 → 1 → 2 → 3 → … → 3 → 4_**, состояние **_3_** повторяется при каждом получении очередного пакета данных по сети.



## HTTP-заголовки


XMLHttpRequest умеет как указывать свои заголовки в запросе, так и читать присланные в ответ.

Для работы с HTTP-заголовками есть 3 метода:

**_setRequestHeader(name, value)_**
Устанавливает заголовок name запроса со значением value.

Например:


```
xhr.setRequestHeader('Content-Type', 'application/json');
```


**_getResponseHeader(name)_**
Возвращает значение заголовка ответа name, кроме Set-Cookie и Set-Cookie2.

Например:

```
xhr.getResponseHeader('Content-Type')
```

**_getAllResponseHeaders()_**
Возвращает все заголовки ответа, кроме Set-Cookie и Set-Cookie2.

Заголовки возвращаются в виде единой строки, например:

```
Cache-Control: max-age=31536000
Content-Length: 4260
Content-Type: image/png
Date: Sat, 08 Sep 2012 16:53:16 GMT
```


## Таймаут



Максимальную продолжительность асинхронного запроса можно задать свойством timeout:


```
xhr.timeout = 30000; // 30 секунд (в миллисекундах)
```

При превышении этого времени запрос будет оборван и сгенерировано событие ontimeout:

```
xhr.ontimeout = function() {
  alert( 'Извините, запрос превысил максимальное время' );
}
```

## Полный список событий

Современная спецификация предусматривает следующие события по ходу обработки запроса:

- loadstart – запрос начат.
- progress – браузер получил очередной пакет данных, можно прочитать текущие полученные данные в responseText.
- abort – запрос был отменён вызовом xhr.abort().
- error – произошла ошибка.
- load – запрос был успешно (без ошибок) завершён.
- timeout – запрос был прекращён по таймауту.
- loadend – запрос был завершён (успешно или неуспешно)


Используя эти события можно более удобно отслеживать загрузку (onload) и ошибку (onerror), а также количество загруженных данных (onprogress).

Ранее мы видели ещё одно событие – readystatechange. Оно появилось гораздо раньше, ещё до появления текущего стандарта.

В современных браузерах от него можно отказаться в пользу других, необходимо лишь, как мы увидим далее, учесть особенности IE8-9.



# Мы разобрали следующие методы XMLHttpRequest:

- open(method, url, async, user, password)
- send(body)
- abort()
- setRequestHeader(name, value)
- getResponseHeader(name)
- getAllResponseHeaders()


## Свойства XMLHttpRequest:

- timeout
- responseText
- responseXML
- status
- statusText



## События:

- onreadystatechange
- ontimeout
- onerror
- onload
- onprogress
- onabort
- onloadstart
- onloadend
