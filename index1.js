//import _, { endsWith } from 'lodash';

export default function solution(content){
  // BEGIN
  //1
  const data = content.split('\r\n').slice(2);
  console.log(`Количество пассажиров: ${data.length}`);
  //2
  const detailsData = data.map((el) => el.split('"')).map((el)=> {
    const arr = el.map((el, i) => {
      if (i === 1) return el;
      else return el.split(',');
    })
    return arr.map((el, i)=>{
      console.log(el);
      if(i === 0 || i === 2) return el.filter((el)=>el);
      return el;
    }).flat();
  });
  
  //console.log(detailsData);
  const embarked = detailsData.map((el) => el[el.length-1]).filter((el) => el).reduce((acc, el) => {
    if(acc.length === 0 || !acc.includes(el)) acc.push(el); 
    return acc;
  }, []).join(', ');
  console.log(`Embarked: ${embarked}`);
  //3
  //4
  const maleCount = data.filter((el) => el[4] === 'male').length;
  const femaleCount = data.filter((el) => el[4] === 'female').length;
  console.log(`Men: ${maleCount}, Women: ${femaleCount}`);
  // END
}
