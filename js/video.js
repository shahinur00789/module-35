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
// [{…}]
// category_id
// : 
// "1003"
// description
// : 
// "'30 Rock,' led by Tina Fey, is a comedy series that has garnered 4.5K views. The show is a witty and humorous take on the behind-the-scenes antics of a fictional live comedy show. With its sharp writing and unforgettable characters, '30 Rock' is perfect for fans of smart, satirical humor and engaging storylines."
// others
// : 
// {views: '4.5K', posted_date: '14800'}
// thumbnail
// : 
// "https://i.ibb.co/kc8CCFs/30-rock.png"
// title
// : 
// "30 Rock"
// video_id
// : 
// "aaai"
// [[Prototype]]
// : 


const displayVideos = (videos)=> {
    const videoContainer = document.getElementById('videos');
    videos.forEach((video)=> {
        console.log(video);
        const card = document.createElement('div');
        card.classList= 'card card-compact'
        card.innerHTML=`
         <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
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