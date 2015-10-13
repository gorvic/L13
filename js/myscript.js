   var name = 'Victor';
   var age = '34';

   console.log('Мое имя '+name+'.\n Мне '+age+' лет.');

   name = undefined;
   age = undefined;

   var CITY = 'Samara';


   if (typeof CITY !== 'undefined') {
       console.log('Константа определена: '+CITY);
   } else {
       console.log('Константа неопределена');
   }

   var book = {};
   book.author = 'Дольник';
   book.title = 'Непослушное дитя биосферы';
   book.pages = '384';

   console.log(
       'Недавно я прочитал книгу \"'+book.title+'\", написанную автором '+book.author+', я осилил все '+book.pages+
       ' страниц, мне она очень понравилась.');

   var books =[
       {
           author: 'Дольник',
           title: 'Непослушное дитя биосферы',
           pages: 384
       },
       {
           author: 'Дилтс',
           title: 'Изменение убеждений с помощью НЛП',
           pages: 256
       }
   ];

   console.log(
               'Недавно я прочитал книги \"'+books[0].title+'\" и \"'+books[1].title+'\"'
                +', написанную авторами '+books[0].author+' и '+books[1].author
                +', я осилил все '+(books[0].pages + books[1].pages)
                + ' страниц,  не ожидал от себя подобного.'
            );
