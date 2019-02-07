
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      return knex('quotes').insert([
        {
          id: 1,
          quote: "Tttthhhiiiisss iiisss wwwwhhhaaaattt hhheeerrrooiiisssmmmm llllooooooookkksss llliiikkkeee no regrettttts! ", 
          img: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/2016/08/squirrel-girl-new-warriors.jpg'},
        {
          id: 2,
          quote: " Galactus! I'm Squirrel Girl! This is my friend Tippy-Toe!! We're here to kick butts and eat nuts... and you can't eat nuts in space.", img: 'https://i.kym-cdn.com/photos/images/original/000/966/538/d31.jpg'},
        {
          id: 3,
          quote: " Nancy, I would be personally insulted if you did not replace his guns with bananas.", img: 'https://boundingintocomics.com/files/2015/07/SquirrelGirlMoon.jpg'},
        {
          id: 4,
          quote: " All they see is the Iron. But I believe -- I've always believed -- that the best part of you is the Man.", img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/04/squirrel-girl-mocking-display.jpg'},
        {
          id: 5,
          quote: "You said it, girl. Give a squirrel a nut, feed 'im for a day...but teach 'im to plant an oak tree, and he'll never go nut-less.", img: 'https://cdn.pastemagazine.com/www/articles/2015/01/09/SquirrelGirl_Main.jpg'},
        {
          id: 6,
          quote: "Squirrel Girl, Squirrel Girl! She's a human and also squirrel! Can she climb up a tree? Yes she can, easily. That's whyyyy, her name is Squirrel Girl!", img: 'http://townsquare.media/site/622/files/2016/08/Squirrel-Girl-Featured.jpg'},
        {
          id: 7,
          quote: "Let's get nuts!", img: 'https://cdn.vox-cdn.com/thumbor/lte6YUEU1N1rOiVdDkU4gkhrzMY=/0x0:960x540/1200x800/filters:focal(404x194:556x346)/cdn.vox-cdn.com/uploads/chorus_image/image/54086849/squirrelgirl.0.jpg'},
        {
          id: 8,
          quote: "I'M SQUIRREL GIRL! THIS IS MY FRIEND TIPPY-TOE!! WE'RE HERE TO KICK BUTTS AND EAT NUTS.", img: 'https://prodimage.images-bn.com/pimages/9781302902247_p0_v2_s550x406.jpg'},
      ]);
    });
};
