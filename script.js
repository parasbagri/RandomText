console.log("jai shiv sanker ganpate namha vidhyadayani sarswati ma ji jai ")

 const paragraphArray = [
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus voluptas fugiat, quaerat est porro commodi facilis, praesentium sint exercitationem ex quae nobis nulla neque fuga, odit recusandae enim libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat facilis suscipit magnam. Itaque, ab repellat. Laborum dolores atque ullam!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus voluptas fugiat, quaerat est porro commodi facilis, praesentium sint exercitationem ex quae nobis nulla neque fuga, odit recusandae enim libero.',

'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam possimus in ex expedita ea sunt maiores odit quae voluptatum velit molestiae tempora, quibusdam id consequatur vitae laboriosam repudiandae amet.',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima, laboriosam aspernatur iure dolor delectus debitis eos suscipit laborum reprehenderit veritatis eius. Iste qui eius libero voluptate nulla, eos saepe sunt, perspiciatis molestiae quia laboriosam animi sequi ex nobis quod.',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolores assumenda tempore cupiditate accusamus sunt quos est, eaque, ea vel atque nulla animi enim consequatur sint architecto magnam, provident explicabo recusandae magni! Alias, corrupti? Nostrum sit modi ipsam magnam, quam laboriosam quaerat velit earum blanditiis, tempore nisi eos, expedita nesciunt?',

'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quos quisquam totam distinctio magni aliquid quia delectus. Aut laboriosam quo deserunt dolor! Veniam architecto perspiciatis quod quos possimus beatae impedit, a dicta eligendi dolorum itaque culpa aspernatur. Ut facilis, nam aliquid ipsam libero illum et. Sed esse veniam laboriosam voluptate atque rem maiores, eveniet quibusdam cum quaerat, pariatur neque incidunt!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat facilis suscipit magnam. Itaque, ab repellat. Laborum dolores atque ullam! jusjs jikey kieebs the ',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat facilis suscipit magnam. Itaque, ab repellat. Laborum dolores atque ullam! the cololo ',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat facilis suscipit magnam. Itaque, ab repellat. Laborum dolores atque ullam! the paras bagt',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat facilis suscipit magnam. Itaque, ab repellat. Laborum dolores atque ullam! hyui'
 ];

 function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  
 const item =  document.getElementById("num")
 const dataContainer = document.querySelector('[data]')

 function generate(){
     if(isNaN(item.value) || item.value < 0 || item.value > 10)
     {  
         const randomIndex = Math.floor(Math.random()*paragraphArray.length)
         dataContainer.innerHTML = paragraphArray[randomIndex];
         dataContainer.style.border ='none';
        //  console.log(randomIndex);
        //  dataContainer.innerHTML = '<h1>Thanks For Comming.......</h1>';
     }else{ 
           const suffText = shuffle(paragraphArray);
           const BasedOnInteredValue = paragraphArray.slice(0,item.value);
           const paras =  BasedOnInteredValue.map((ele) => {
             return `<p>${ele}</p><br/> `
          }) 
          dataContainer.style.border ='none';
          dataContainer.innerHTML = paras.join('');
        //  console.log('False block');
        //  dataContainer.innerHTML = '';
     }
 }


  
  