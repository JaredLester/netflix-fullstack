# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
User.destroy_all
Video.destroy_all

demo_user = User.create!(
     email: 'joe_Shmoe123@wahoo.com',
     password: 'password'
 )
require 'open-uri'


video1 = Video.create!(title: "Demon Slayer: Kimetsu no Yaiba", year: "2019", description: "The story of Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/A_Hero%E2%80%99s_Journey.mp4")
video1.video.attach(io: file, filename: 'demon-slayer.mp4')

file_picture_video1 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/demon.jpg")
video1.picture.attach(io: file_picture_video1, filename: 'demon-slayer-pic.png')

# ----------------------------------

video2 = Video.create!(title: "My Hero Academia", year: "2017", description: "The story follows Izuku Midoriya, a boy born without superpowers (called Quirks) in a world where they have become commonplace, but who still dreams of becoming a hero himself.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/My+Hero+Academia+%E2%80%93+Opening+Theme+%E2%80%93+The+Day.mp4")
video2.video.attach(io: file, filename: 'my-hero.mp4')

file_picture_video2 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/my-hero.jpg")
video2.picture.attach(io: file_picture_video2, filename: 'my-hero.jpg')

# ----------------------------------

video3 = Video.create!(title: "Hunter x Hunter", year: "2011", description: "The story focuses on a young boy named Gon Freecss, who discovers that his father, who he was told had left him at a young age, is actually a world renowned Hunter, a licensed profession for those who specialize in, but are not limited to, fantastic pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Hunter+X+Hunter+Set+1-+Official+Extended+Trailer.mp4")
video3.video.attach(io: file, filename: 'hunter-x-hunter.mp4')

file_picture_video3 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/My+Post.jpg")
video3.picture.attach(io: file_picture_video3, filename: 'hunter-x-hunter.jpg')

# ----------------------------------

video4 = Video.create!(title: "Full Metal Alchemist Brotherhod", year: "2009", description: "Brothers Edward and Alphonse Elric are raised by their mother Trisha Elric in the remote village of Resembool in the country of Amestris. Their father Hohenheim, a noted and very gifted alchemist, abandoned his family while the boys were still young, and while in Trisha's care they began to show an affinity for alchemy.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Fullmetal+Alchemist+Brotherhood+Trailer+HD.mp4")
video4.video.attach(io: file, filename: 'full-metal.mp4')

file_picture_video4 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/full-metal.jpg")
video4.picture.attach(io: file_picture_video4, filename: 'full-metal.jpg')

# ----------------------------------

video5 = Video.create!(title: "Fairy Tail", year: "2009", description: "The world of Earth-land is home to numerous guilds where wizards[4] apply their magic for paid job requests. Natsu Dragneel, a dragon slayer wizard from the Fairy Tail guild, explores the Kingdom of Fiore in search of his missing adoptive father, the dragon Igneel.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/FairyTail+Official+Trailer.mp4")
video5.video.attach(io: file, filename: 'fairy-tail.mp4')

file_picture_video5 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/fairy-tail.jpg")
video5.picture.attach(io: file_picture_video5, filename: 'fairy-tail.jpg')

# ----------------------------------

video6 = Video.create!(title: "Dorohedoro", year: "2020", description: "Dorohedoro story takes place in a post-apocalyptic setting,[5] split in two separate dimensions; the Hole, a dismal cityscape where humans reside; and the Sorcerers' world, home of sorcerers.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Dorohedoro+(2020)+-+Official+Trailer.mp4")
video6.video.attach(io: file, filename: 'dorohedoro.mp4')

file_picture_video6 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/dorohedoro.jpg")
video6.picture.attach(io: file_picture_video6, filename: 'dorohedoro.jpg')

# ----------------------------------

video7 = Video.create!(title: "Keep Your Hands Off Eizouken!", year: "2020", description: "Midori Asakusa wants to create an anime, but she's too disheartened to make that first step by herself. By pure chance, she meets Tsubame Mizusaki, an up-and-coming socialite secretly dreaming of becoming an animator. Together with Midori's money-loving best friend Sayaka Kanamori, the energetic trio start the 'Eizouken' club and slowly work towards making their 'greatest world' a reality.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Keep+Your+Hands+Off+Eizouken!+_+OFFICIAL+TRAILER.mp4")
video7.video.attach(io: file, filename: 'kyho.mp4')

file_picture_video7 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/kyho.jpg")
video7.picture.attach(io: file_picture_video7, filename: 'kyho.jpg')

# ----------------------------------

video8 = Video.create!(title: "Dragon Ball Super", year: "2015", description: "Sometime after the defeat of Majin Buu, peace has returned to Earth. Goku has settled down and works as a farmer to support his family. His family and friends live peaceful lives.[4] However, a new threat appears in the form of the God of Destruction named Beerus, who is considered to be the most terrifying and the second most powerful being in Universe Seven.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Dragon+Ball+Super+ENGLISH+Trailer_Preview+_+Toonami.mp4")
video8.video.attach(io: file, filename: 'dbs.mp4')

file_picture_video8 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/dbs.jpg")
video8.picture.attach(io: file_picture_video8, filename: 'dbs.jpg')

# ----------------------------------

video9 = Video.create!(title: "Black Clover", year: "2017", description: "The series focuses on Asta, a young orphan who was raised from birth after being abandoned at an orphanage along with his fellow orphan, Yuno. While everyone is born with the ability to utilize Mana in the form of Magical Power, Asta is the only exception.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Black+Clover+Anime+Trailer+2017.mp4")
video9.video.attach(io: file, filename: 'black-clover.mp4')

file_picture_video9 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/black-clover.jpg")
video9.picture.attach(io: file_picture_video9, filename: 'black-clover.jpg')

# ----------------------------------

video10 = Video.create!(title: "Assassination Classroom", year: "2015", description: "Earth is left in jeopardy after an immensely powerful organism suddenly appears and destroys 70% of the Moon, leaving it permanently in the shape of a crescent. The organism claims that within a year he will destroy the planet next, but he offers mankind a chance to avert this fate.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Assassination+Classroom+-+Official+Trailer.mp4")
video10.video.attach(io: file, filename: 'ac.mp4')

file_picture_video10 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/assassination.jpg")
video10.picture.attach(io: file_picture_video10, filename: 'ac.jpg')

# ----------------------------------

video11 = Video.create!(title: "Mob Psycho 100", year: "2016", description: "Shigeo Kageyama is an average middle school boy, nicknamed Mob for lacking a sense of presence. Although he looks like an inconspicuous person, he is in fact a powerful esper with immense psychic power.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Mob+Psycho+100+-+Season+One+-+Coming+Soon.mp4")
video11.video.attach(io: file, filename: 'mobpsycho.mp4')

file_picture_video11 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/mob100.png")
video11.picture.attach(io: file_picture_video11, filename: 'mobpsycho.png')

# ----------------------------------

video12 = Video.create!(title: "Dragon Ball", year: "1986", description: "The Dragon Ball story takes place on Earth where Goku goes on adventures to find the Dragon Balls, as well as aspiring to become a great fighter, and compete in multiple martial arts tournaments.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Dragon+Ball+Season+1+Trailer.mp4")
video12.video.attach(io: file, filename: 'dragonball.mp4')

file_picture_video12 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/db.png")
video12.picture.attach(io: file_picture_video12, filename: 'dragonball.png')

# ----------------------------------

video13 = Video.create!(title: "Cowboy Bebop", year: "1998", description: "In 2071, roughly fifty years after an accident with a hyperspace gateway made the Earth almost uninhabitable, humanity has colonized most of the rocky planets and moons of the Solar System. Amid a rising crime rate, the Inter Solar System Police (ISSP) set up a legalized contract system, in which registered bounty hunters chase criminals and bring them in alive in return for a reward.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Cowboy+Bebop+HD+-+Trailer+-+Complete+Series+on+Blu-ray+-+Coming+Soon.mp4")
video13.video.attach(io: file, filename: 'cowboy.mp4')

file_picture_video13 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/cowboy.png")
video13.picture.attach(io: file_picture_video13, filename: 'coyboy.png')

# ----------------------------------

video14 = Video.create!(title: "One Punch Man", year: "2015", description: "On a supercontinent Earth, powerful monsters and villains have been wreaking havoc in the cities. In response, the millionaire Agoni creates the Hero Association, which employs superheroes to fight evil. Saitama, an unassociated hero, hails from City Z and performs heroic deeds for his own amusement. He has trained himself to the point where he can effortlessly defeat any opponent with a single punch, becoming bored with his overwhelming strength.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/One+Punch+Man+-+Season+2+Official+Trailer.mp4")
video14.video.attach(io: file, filename: 'onepunch.mp4')

file_picture_video14 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/onep.png")
video14.picture.attach(io: file_picture_video14, filename: 'onepunch.png')

# ----------------------------------

video15 = Video.create!(title: "Neon Genesis Evangelion", year: "1995", description: "In 2015, fifteen years after a global cataclysm known as the Second Impact, teenager Shinji Ikari is summoned to the futuristic city of Tokyo-3 by his estranged father Gendo Ikari, director of the special paramilitary force Nerv. Shinji witnesses United Nations forces battling an Angel, one of a race of giant monstrous beings whose awakening was foretold by the Dead Sea Scrolls.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Neon+Genesis+Evangelion+-+Theatrical+Trailer.mp4")
video15.video.attach(io: file, filename: 'evangelion.mp4')

file_picture_video15 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/evangelion.png")
video15.picture.attach(io: file_picture_video15, filename: 'evangelion.png')

# ----------------------------------

video16 = Video.create!(title: "Parasyte", year: "1989", description: "Parasyte centers on a male 17-year-old high school student named Shinichi Izumi, who lives with his mother and father in a quiet neighborhood in Tokyo, Japan. One night, strange worm-like creatures with drills as a 'head' called Parasytes appear on Earth, taking over the brains of human hosts by entering through their ears or noses.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Parasyte+-the+maxim-+%5BKiseijuu%5D+Trailer+(2015)+-+AMV.mp4")
video16.video.attach(io: file, filename: 'parasyte.mp4')

file_picture_video16 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/paras.png")
video16.picture.attach(io: file_picture_video16, filename: 'parasyte.png')

# ----------------------------------

video17 = Video.create!(title: "One Piece", year: "1999", description: "Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate 'Red Haired' Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/One+Piece+_3D2Y_+-+Official+Trailer+-+Available+1_22_19.mp4")
video17.video.attach(io: file, filename: 'onepiece.mp4')

file_picture_video17 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/onepiece.png")
video17.picture.attach(io: file_picture_video17, filename: 'onepiece.png')

# ----------------------------------

video18 = Video.create!(title: "Tokyo Ghoul", year: "2014", description: "The story follows Ken Kaneki, a college student who barely survives a deadly encounter with Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in critical condition. After recovering, Kaneki discovers that he underwent a surgery that transformed him into a half-ghoul.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/Tokyo+Ghoul+Trailer.mp4")
video18.video.attach(io: file, filename: 'tokyoghoul.mp4')

file_picture_video18 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/tokyoghoul.png")
video18.picture.attach(io: file_picture_video18, filename: 'tokyoghoul.png')

# ----------------------------------

video19 = Video.create!(title: "Naruto", year: "2002", description: "A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire, one of the Five Great Shinobi Countries in the Ninja World. In response, the leader of Konoha, the Fourth Hokage (with his wife Uzumaki Kushina) seals the fox inside the body of his newborn son, Naruto Uzumaki, making Naruto a host of the beast;[e] this costs Naruto's father his life, and the Third Hokage returns from retirement to become leader of Konoha again.")
file = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/One+Piece+_3D2Y_+-+Official+Trailer+-+Available+1_22_19.mp4")
video19.video.attach(io: file, filename: 'naruto.mp4')

file_picture_video19 = open("https://otaku-seeds.s3-us-west-1.amazonaws.com/naruto.png")
video19.picture.attach(io: file_picture_video19, filename: 'naruto.png')

