
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.migrate.rollback()
    .then(function () {
      return knex.migrate.latest();
    })
    .then(function () {
      // Inserts seed entries
      return knex('happyhours').insert([
        {
          restaurant_name: 'Elizabeth Street Cafe', 
          location: '1501 S 1st St, Austin, TX 78704', 
          days: 'Monday-Friday', 
          hours: '3PM – 6PM', 
          specials: '50% off all Appetizers and Bahn Mi’s; $2 Off Cocktails, Beer, Wine, Sake, and Punch', 
          website: 'http://www.elizabethstreetcafe.com/menus/'
        },
        {
          restaurant_name: 'Fareground', 
          location: '111 Congress Ave, Austin, TX 78704', 
          days: 'Monday-Friday', 
          hours: '3PM – 6PM', 
          specials: 'Each vendor in fairground offers a variety of happy hour specials', 
          website: 'https://faregroundaustin.com/vendors'
        },
        {
          restaurant_name: 'Fukumoto', 
          location: '514 Medina St, Austin, TX 78702', 
          days: 'Monday-Thursday', 
          hours: '5PM – 6:30PM', 
          specials: '$2 off all sake, beer and wine by the glass – served alongside Japanese snacks (discounted during happy hour), yakitori and nigiri flights', 
          website: 'http://www.fukumotoaustin.com/menu.html'
        },
        {
        restaurant_name: 'Garbo\'s', 
        location: '14735 Bratton Ln, Austin, TX 78728', 
        days: 'Tuesday-Friday', 
        hours: '3PM – 5PM', 
        specials: '$6 food items and drinks', 
        website: 'http://garboslobsteratx.com/restaurant'
      },
        {
          restaurant_name: 'Il Brutto', 
          location: '1601 E 6th St, Austin, TX 78702', 
          days: 'Monday-Friday', 
          hours: '5PM – 7PM', 
          specials: '50% off entire drink menu', 
          website: 'https://www.ilbruttoaustin.com/menus'
        },
        {
          restaurant_name: 'La Condessa', 
          location: '400 W 2nd St, Austin, TX 78701', 
          days: 'Monday-Friday', 
          hours: '5PM – 7PM', 
          specials: '25% off all drinks', 
          website: 'https://www.lacondesa.com/'
        },
        {
          restaurant_name: 'La Matta', 
          location: '2115 Holly St, Austin, TX 78702', 
          days: 'Monday-Friday', 
          hours: '5PM – 6PM', 
          specials: '25% off house wines and featured beers', 
          website: 'https://lamattaaustin.com/drinks'
        },
        {
          restaurant_name: 'Launderette', 
          location: '501 Comal St, Austin, TX 78702', 
          days: 'Monday-Sunday and Monday Funday', 
          hours: '4PM – 7PM', 
          specials: '50% off cocktails, beer, and glasses of wine. 50% off bottles of wine all day Monday', 
          website: 'https://lamattaaustin.com/drinks'
        },
        {
          restaurant_name: 'Le Politique', 
          location: '110 San Antonio St, Austin, TX 78701', 
          days: 'Monday-Friday', 
          hours: '3PM – 6PM', 
          specials: '50% off house cocktails, beer + wine, 25% off fruits de mer, and half-bottle of select sparkling wine for $35', 
          website: 'https://lepolitiqueaustin.com/le-happy-hour'
        },
        {
          restaurant_name: 'L\'Oca d\Oro', 
          location: '1900 Simond Ave, Austin, TX 78723', 
          days: 'Monday-Sunday', 
          hours: '5PM – 6:30PM', 
          specials: '50% off snacks, sangria, tap beer and tap wine', 
          website: 'https://www.locadoroaustin.com/menus/dinner/'
        },
        {
          restaurant_name: 'Loro', 
          location: '2115 S Lamar Blvd, Austin, TX 78704', 
          days: 'Monday-Friday', 
          hours: '2:30PM – 5PM', 
          specials: '50% off boozy slushees, all wines and sake on tap, and Kirin Ichiban Lager', 
          website: 'https://loroaustin.com/wp-content/uploads/2018/06/Loro_HappyHour.pdf'
        },
        {
          restaurant_name: 'Odd Duck', 
          location: '1201 S Lamar Blvd, Austin, TX 78704', 
          days: 'Thursday-Sunday', 
          hours: '2:30PM – 6:30PM', 
          specials: '50% off bottles of wine, large format beer, and $5 draft Summerthyme cocktail', 
          website: 'https://oddduckaustin.com/food-drink'
        },
        {
          restaurant_name: 'Sway', 
          location: '1417 S 1st St, Austin, TX 78704', 
          days: 'Monday-Friday', 
          hours: '3PM – 6PM', 
          specials: '50% off all drinks', 
          website: 'https://swaythai.com/menus/happy-hour/'
        },
        {
          restaurant_name: 'Uchi', 
          location: '801 S Lamar Blvd, Austin, TX 78704', 
          days: 'Monday-Sunday and Sunday-Thursday', 
          hours: '5PM – 6:30PM (M-Sun) and 9PM - close (Th-Sun)', 
          specials: '$3 – $7 bites & drinks, and late night menu is Satsuma Imo Onigiri ($3), Wagyu Yaki Onigiri ($5), Yuri Masamune honjozo sake ($7), and vanilla ice cream sandwich ($5).', 
          website: 'http://uchiaustin.com/wp-content/uploads/uchisocial.pdf'
        },
        {
          restaurant_name: 'Yuyo', 
          location: '900 Manor Rd, Austin, TX 78722', 
          days: 'Tuesday-Sunday', 
          hours: '4:30PM – 6:30PM', 
          specials: 'Deals on select appetizers, cocktails, beer and wine', 
          website: 'http://yuyoaustin.com/happyhour/'
        },
      ]);
    });
};
