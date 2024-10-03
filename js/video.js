// shoe catagories 



// creat loadCatagories
const loadCatagories =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error) => console.log(error))
};

// creat video
const loadVideos =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) =>displayVideos(data.videos))
    .catch((error) => console.log(error))
};


// authors
// : 
// Array(1)
// 0
// : 
// {profile_picture: 'https://i.ibb.co/fDbPv7h/Noha.jpg', profile_name: 'Noah Walker', verified: false}
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)
// category_id
// : 
// "1001"
// description
// : 
// "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// others
// : 
// {views: '543K', posted_date: ''}
// thumbnail
// : 
// "https://i.ibb.co/QPNzYVy/moonlight.jpg"
// title
// : 
// "Midnight Serenade"
// video_id
// : 
// "aaab"
// [[Prototype]]
// : 
// Object

const displayVideos = (videos)=> {
    const videoContainer = document.getElementById('videos');
    videos.forEach((video)=> {
        console.log(video);
        const card = document.createElement('div');
        card.classList= 'card card-compact'
        card.innerHTML=`
         <figure class='h-[250px]'>
    <img
      src=${video.thumbnail}
      class='h-full w-full object-cover'
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>

  </div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
  </div>

  <div>
  <h2 class="font-bold">${video.title}</h2>
  <div class="flex items-center gap-2">
  <p class="text-gray-500">${video.authors[0].profile_name}</p>
  <img class="w-5" src="https://img.icons8.com/?size=60&id=STBykZE1qQnd&format=png"/>
  </div>
  
  <p></p>
  </div>
        `;
        videoContainer.append(card);

    }
)

    
}



// creat displayCatagories
const displayCatagories =(catagories)=>{
    const catagoryContainer = document.getElementById('categories')
    catagories.forEach((item) => {
        console.log(item)


        const button = document.createElement('button');
        button.classList='btn';
        button.innerText= item.category;


        // add button to category container
        catagoryContainer.append(button);


    });
};


loadCatagories();
loadVideos();