let newButton = document.querySelector('.button');
let reverseButton = document.querySelector('.reverse-button');
let rewiew = document.querySelector('.rewiew-div');

let arr = [
  "What’s the first place you go to when trying to find a product/service? That’s easy, it’s Google. So, it’s also natural that Google is the best site for online reviews. Google is especially significant if you’re a local business, so make sure you spend time setting up your Google Business profile and making your business discoverable.",
  "Now that Facebook has such a large user base, it’s also becoming one of the most popular sites for reviews. It’s also simple for users to leave reviews on Facebook—most of them already have an account. This means that, unlike other sites, they don’t need to create an account or log in each time they visit again.",
  "This is the place where most people go when organizing a trip. So, if you’re a hotel, a restaurant, or own any other business that welcomes tourists, you should definitely pay attention to TripAdvisor. Travelers submit reviews, comments, and upload images, so the advice is pretty reliable and influential.",
  "Trustpilot is a community-driven customer review platform that has become one of the most popular SaaS review sites. Also, businesses from all around the world may use Trustpilot to collect consumer reviews, usually in advance after they post them to the company profile. Customers submit product and seller reviews, to verified profiles of the company they interacted with.",
  "Capterra is a rating site that assesses software offered by B2C and B2B firms if you’re a SaaS company. Users can look for software by industry, business, or type. Capterra is one of the most trustworthy review sites for software businesses, so being active on this site can be one of the most important marketing activities for this kind of company.",
  "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us. Thanks to its scheduling feature, we don’t need staff to work outside of business hours.",
  "This app allows me to do problem from my smartphone where I want and when I want to. The interface is easy to navigate and I find everything I need quickly. I can’t wait for feature!",
];

let arrayIndex = 0;

rewiew.textContent = arr[arrayIndex]

newButton.onclick = function(){
  arrayIndex = ++arrayIndex;
  if (arrayIndex >= arr.length){
    arrayIndex = 0;
  }
  rewiew.textContent = arr[arrayIndex]
  console.log(arrayIndex)
}

reverseButton.onclick = function(){
  arrayIndex = --arrayIndex;
  if (arrayIndex < 0){
    arrayIndex = arr.length - 1
  }
  console.log(arrayIndex)
  rewiew.textContent = arr[arrayIndex];
}

