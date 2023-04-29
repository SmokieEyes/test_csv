//import _, { endsWith } from 'lodash';

export default function solution(content){
  // BEGIN
  const base = content.split('\r\n');
  const data = base.slice(1, base.length-1);
  const detailsData = data.map((el) => el.split(',"')).map((el) => el.map((el)=> el.split('",')).flat()
    .map((el, i) => {
      if(i === 1) return el;
      return el.split(',');
    }).flat());
  //1
  console.log(`Количество пассажиров: ${data.length}`);
  //2
  const embarked = detailsData.map((el) => el[el.length-1]).filter((el) => el).reduce((acc, el) => {
    if(acc.length === 0 || !acc.includes(el)) acc.push(el); 
    return acc;
  }, []).join(', ');
  console.log(`Embarked: ${embarked}`);
  //3
  const maleCount = detailsData.filter((el) => el[4] === 'male').length;
  const femaleCount = detailsData.filter((el) => el[4] === 'female').length;
  console.log(`Men: ${maleCount}, Women: ${femaleCount}`);
  //4
  const survived = detailsData.filter((el) => el[1] === '1').map((el) => Number(el[1]))
  .reduce((acc, el) => acc += el, 0);
  const percent = Math.round(survived * 100 / data.length);
  console.log(`Выжившие: ${percent}%`);
  //5
  const names = detailsData.map((el) => el[3]).filter((el)=>el.startsWith('A')).join(', '); //1 вариант (полные имена, на А фамилия)
  const names2 = detailsData.map((el) => el[3].split(',')[0]).filter((el)=>el.startsWith('A')).join(', ');//2 вариант (фамилии без имен)
  const names3 = detailsData.map((el) => el[3].split(',')[0]).filter((el)=>el.startsWith('A')).reduce((acc, el)=> {
    if(acc.length === 0 || !acc.includes(el)) acc.push(el); 
    return acc;
  }, []).join(', '); // 3 вариант (фамилии без повторов)
  const names4 = detailsData.map((el) => el[3].split('. ')[1]).filter((el)=>el.startsWith('A')).join(', '); //4 вариант(имена без фамилий)
  console.log(`Имена всех пассажиров, начинающиеся на букву А: ${names4}`);
  // END
}
