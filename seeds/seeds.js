
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      return knex('quotes').insert([
        {quote: "Tttthhhiiiisss iiisss wwwwhhhaaaattt hhheeerrrooiiisssmmmm llllooooooookkksss llliiikkkeee no regrettttts! ", img: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/2016/08/squirrel-girl-new-warriors.jpg'},
        {quote: " Galactus! I'm Squirrel Girl! This is my friend Tippy-Toe!! We're here to kick butts and eat nuts... and you can't eat nuts in space.", img: 'https://i.kym-cdn.com/photos/images/original/000/966/538/d31.jpg'},
        {quote: " Nancy, I would be personally insulted if you did not replace his guns with bananas.", img: 'https://i.pinimg.com/236x/6d/06/e0/6d06e0f30bbb04240e1cd829e44fcab8.jpg'},
        {quote: " All they see is the Iron. But I believe -- I've always believed -- that the best part of you is the Man.", img: 'http://fanboyplanet.s3.amazonaws.com/wp-content/uploads/Squirrel-Girl-Steve-Ditko.jpg'},
        {quote: "You said it, girl. Give a squirrel a nut, feed 'im for a day...but teach 'im to plant an oak tree, and he'll never go nut-less.", img: 'https://cdn.pastemagazine.com/www/articles/2015/01/09/SquirrelGirl_Main.jpg'},
        {quote: "Squirrel Girl, Squirrel Girl! She's a human and also squirrel! Can she climb up a tree? Yes she can, easily. That's whyyyy, her name is Squirrel Girl!", img: 'http://townsquare.media/site/622/files/2016/08/Squirrel-Girl-Featured.jpg'},
        {quote: "Let's get nuts!", img: 'https://cdn.vox-cdn.com/thumbor/lte6YUEU1N1rOiVdDkU4gkhrzMY=/0x0:960x540/1200x800/filters:focal(404x194:556x346)/cdn.vox-cdn.com/uploads/chorus_image/image/54086849/squirrelgirl.0.jpg'}
      ]);
    });
};
