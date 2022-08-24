import './App.css';
import Card from './components/elements/card.js'

function App() {



  return (
    <main className="main">
      <div className="container">
      <header className="header">
        <h1>Наша продукция</h1>
      </header>

      <div className="menu">

        <Card
                url={'images/1.jpg'} 
                title={'Устрицы по-рокфеллеровски'}
                description={'Роскошная классика американской кухни. Устрицы запеченные под ароматным маслом с хрустящей хлебной корочкой.'} 
                price={'2 700 ₽'}  
                weight={'500 г.'}
                />
        <Card
                url={'images/2.jpg'} 
                title={'Свиные ребрышки на гриле с зеленью'}
                description={'Хит дружеского пикника. Лучше всего подавать с зеленью, свежими овощами или маринованным острым перцем.'}
                price={'1 600 ₽'}  
                weight={'750 г.'}
                 />
        <Card
                url={'images/3.jpg'} 
                title={'Креветки по-королевски в лимонном соке'}
                description={'Креветки в панцире, обжареные в соевом соусе с чесноком и лимоном'}
                price={'1 820 ₽'}  
                weight={'7 шт.'} />
        <Card
                url={'images/4.jpg'} 
                title={'Устрицы по-рокфеллеровски'}
                description={'Для настоящих рокфеллеров! (но не ротвейлеров, собаку кормить ими не стоит)'}
                price={'5000 ₽'}  
                weight={'1750 г.'} />
        <Card
                url={'images/5.jpg'} 
                title={'Устрицы по-рокфеллеровски'}
                description={'На этот раз запеченные'} 
                price={'2 600 ₽'}  
                weight={'950 г.'}/>
        <Card
                url={'images/6.jpg'} 
                title={'Свиные ребрышки на гриле с зеленью'}
                description={'Ребрышки те же, зелень - другая'}
                price={'1 599 ₽'}  
                weight={'749 г.'} />
        <Card
                url={'images/7.jpg'} 
                title={'Креветки по-королевски в апельсиновом соке'}
                description={'Для тех, кто не любит лимонный сок. Продаются поштучно.'}
                price={'260 ₽'}  
                weight={'1 шт.'} />
        <Card
                url={'images/8.jpg'} 
                title={'Устрицы по-рокфеллеровски'}
                description={'Цена принесет Вам удачу на ближайшую неделю'} 
                price={'777 ₽'}  
                weight={'150 г.'}/>

      </div>
      </div>
    </main>
  );
}

export default App;