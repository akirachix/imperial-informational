const learnBtn = document.getElementById('learn-button').addEventListener('click', function(){
    document.getElementById('aboutUs').scrollIntoView({behavior: 'smooth'});
});
const learnButton = document.getElementById('learn-more-btn').addEventListener('click', function(){
    document.getElementById('home').scrollIntoView({behavior: 'smooth'});
});
const explore= document.getElementById('explore').addEventListener('click' , function(){
    document.getElementById('exploreMore').scrollIntoView({behavior: 'smooth'});
});
const aboutUs= document.getElementById('aboutUs').addEventListener('click' , function(){
    document.getElementById('moreAboutUs').scrollIntoView({behavior: 'smooth'});
});
const contactUsNow= document.getElementById('contactUs').addEventListener('click' , function(){
    document.getElementById('contactUsNow').scrollIntoView({behavior: 'smooth'});
});


