import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image':'http://placeimg.com/60/60/any/1',
  'name' : '이용건',
  'birthday' : '910714',
  'gender' : '남',
  'job' : '취준생' 
},
{
  'id': 2,
  'image':'http://placeimg.com/60/60/any/2',
  'name' : '무기명',
  'birthday' : '910714',
  'gender' : '남',
  'job' : '모름' 
},
{
  'id': 3,
  'image':'http://placeimg.com/60/60/any/3',
  'name' : '송희지',
  'birthday' : '930611',
  'gender' : '여',
  'job' : '일반회사원' 
}

]

function App() {
  return (
    <div>
      <Customer 
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer 
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer 
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      />
    </div>
    // <div>
    //   {
    //     customers.map(c => {
    //       return (
    //       <Customer 
    //         key={c.id}
    //         id={c.id}
    //         image={c.image}
    //         name={c.image}
    //         birthday={c.birthday}  
    //         gender={c.gender}
    //         job={c.job}
    //       />
    //       );
    //     })
    //   }
    // </div>
  );
}

export default App

