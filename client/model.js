// Récupération du flux d'image par page, et séparation en 3 groupes
//
//
//
//
//
import m from 'mithril';


// iteration
let page = 1

// storage
let status = "ready to fetch"
let col1 = []
let col2 = []
let col3 = []

// status
let fetching = false;

// result getter
// export function getResult() {
//   return result
// }

// group getter
export function getCol(id) {
  if (id === 1){
    return col1
  }else if(id === 2){
    return col2
  }else{
    return col3
  }
}

// requesting pictures
export async function fetchAjax() {
  // prevent loop triggering
  if(fetching === true ){
    console.log('already fetching')
  }else{

    // define request status
    fetching = true
    status = "fetching data"
    console.log('requesting for page ' + page)

    // requesting pictures
    try {
      let data = await m.request({
        method: 'GET',
        url: 'https://picsum.photos/v2/list?page=' + page,
      });

      // indent requested page
      page++

      // dispatch pictures into 3 groups
      for (let i=0 ; i<data.length ; i++){
        if (i < 10){
          col1.push(data[i])
        }else if( i < 20){
          col2.push(data[i])
        }else{
          col3.push(data[i])
        }
      }

      console.log(col1, col2, col3)

      // cooldown (hack need to be fixed)
      setTimeout(function(){ fetching = false }, 2000);
      status = "Fetched"
    } catch (e) {
      status = 'Error fetching data';
    }
  }
}
