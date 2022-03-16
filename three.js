//3. В любой функции можно написать this, это не приведет к каким-либо ошибкам
//что будет лежать в этом this не определено до момента вызова функции. 
//Причем при разных вызовах функции this может принимать разное значение.
//Все зависит от контекста, в котором была вызвана функция.

var obj1 = {
    hello: function() {
      console.log('Hello world');
      return this;
    },
    obj2: {
        breed: 'dog',
        speak: function(){
              console.log('woof!');
              return this;
          }
      }
  };
   
  console.log(obj1);
  console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
  console.log(obj1.obj2);
  console.log(obj1.obj2.speak());  // выводит 'woof!' и возвращает obj2