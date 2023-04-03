import { genresObject as genres} from './genres.api'

const films = [
    {
        id: 1,
        title: 'The Fast and the Furious',
        cover: 'https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_.jpg',
        alt: 'The Fast and the Furious',
        directors: ['Justin Lin'],
        link: 'https://www.imdb.com/title/tt0463985',
        description: 'A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.',
        writers: ['Chris Morgan'],
        stars: ['Lucas Black', 'Zachery Ty Bryan', 'Shad Moss'],
        rate: 6.0,
        genres: [genres.action, genres.drama]
    },
    {
        id: 2,
        title: '2001: A Space Odyssey',
        cover: 'https://static.posters.cz/image/1300/poster/2001-a-space-odyssey-i75298.jpg',
        alt: '2001: A Space Odyssey',
        directors: ['Stanley Kubrick'],
        link: 'https://www.imdb.com/title/tt0062622/?ref_=nv_sr_srsg_0',
        description: 'After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.',
        writers: ['Stanley Kubrick(screenplay by)', 'Arthur C. Clarke(screenplay by)'],
        stars: ['Keir Dullea', 'Gary Lockwood', 'William Sylvester'],
        rate: 8.3,
        genres: [genres.fantasy, genres.drama]
    },
    {
        id: 3,
        title: 'The Shining',
        cover: 'https://flxt.tmsimg.com/assets/p40_p_v10_ap.jpg',
        alt: 'The Shining',
        directors: ['Stanley Kubrick'],
        link: 'https://www.imdb.com/title/tt0081505/?ref_=nv_sr_srsg_0',
        description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
        writers: ['Stephen King(based upon the novel by)', 'Stanley Kubrick(screenplay by)', 'Diane Johnson(screenplay by)'],
        stars: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
        rate: 8.4,
        genres: [genres.horror, genres.thriller]
    },
    {
        id: 4,
        title: 'The Dark Knight',
        cover: 'https://i5.walmartimages.com/asr/4e1a006b-c7ea-4bff-b8cc-994693624328_1.4caa4ad253c398957cd30b5d491c0ad4.jpeg',
        alt: 'The Dark Knight',
        directors: ['Christopher Nolan'],
        link: 'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        writers: ['Jonathan Nolan(screenplay)', 'Christopher Nolan(screenplay)', 'David S. Goyer(story)'],
        stars: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        rate: 9.0,
        genres: [genres.action, genres.thriller]
    },
    {
        id: 5,
        title: 'Kill Bill: Volume 1',
        cover: 'https://www.tvguide.com/a/img/catalog/provider/1/2/1-12013552180.jpg',
        alt: 'Kill Bill: Volume 1',
        directors: ['Quentin Tarantino'],
        link: 'https://www.imdb.com/title/tt0266697/?ref_=nv_sr_srsg_0',
        description: 'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
        writers: ['Quentin Tarantino(based on the character "The Bride" created by)', 'Uma Thurman(based on the character "The Bride" created by)'],
        stars: ['Uma Thurman', 'David Carradine', 'Daryl Hannah'],
        rate: 8.2,
        genres: [genres.action, genres.comedy]
    },

    {
        id: 6,
        title: 'Stalker',
        cover: 'https://cdn.shopify.com/s/files/1/1057/4964/products/stalker-vintage-movie-poster-original-32x42.jpg?v=1663223503',
        alt: 'Stalker',
        directors: ['Andrei Tarkovsky'],
        link: 'https://www.imdb.com/title/tt0079944/?ref_=nv_sr_srsg_0',
        description: 'A guide leads two men through an area known as the Zone to find a room that grants wishes.',
        writers: ['Arkadiy Strugatskiy(novel "Piknik na obochine")', 'Boris Strugatskiy(novel "Piknik na obochine")', 'Andrei Tarkovsky(screenplay)'],
        stars: ['Alisa Freyndlikh', 'Aleksandr Kaydanovskiy', 'Anatoliy Solonitsyn'],
        rate: 8.1,
        genres: [genres.thriller, genres.mystery]
    },
    {
        id: 7,
        title: 'Pulp Fiction',
        cover: 'https://cdn.shopify.com/s/files/1/1057/4964/products/Pulp-Fiction-Vintage-Movie-Poster-Original-1-Sheet-27x41-6.jpg?v=1669266071',
        alt: 'Pulp Fiction',
        directors: ['Quentin Tarantino'],
        link: 'https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        writers: ['Quentin Tarantino(stories by)', 'Roger Avary(stories by)'],
        stars: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        rate: 8.9,
        genres: [genres.action, genres.comedy]
    },
    {
        id: 8,
        title: 'The Wolf of Wall Street',
        cover: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg',
        alt: 'The Wolf of Wall Street',
        directors: ['Martin Scorsese'],
        link: 'https://www.imdb.com/title/tt0993846/?ref_=nv_sr_srsg_3',
        description: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
        writers: ['Terence Winter(screenplay)', 'Jordan Belfort(book)'],
        stars: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie'],
        rate: 8.2,
        genres: [genres.comedy]
    },
    {
        id: 9,
        title: 'Die Hard',
        cover: 'https://cdn.shopify.com/s/files/1/1057/4964/products/Die-Hard-Vintage-Movie-Poster-Original-1-Sheet-27x41-7126.jpg?v=1672462859',
        alt: 'Die Hard',
        directors: ['John McTiernan'],
        link: 'https://www.imdb.com/title/tt0095016/?ref_=nv_sr_srsg_0',
        description: 'A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.',
        writers: ['Roderick Thorp(based on the novel by)', 'Jeb Stuart(screenplay by)', 'Steven E. de Souza(screenplay by)'],
        stars: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia'],
        rate: 8.2,
        genres: [genres.action, genres.romance]
    },
    {
        id: 10,
        title: 'A Clockwork Orange',
        cover: 'https://i.etsystatic.com/14140434/r/il/12d15c/1455375280/il_1588xN.1455375280_gvmh.jpg',
        alt: 'A Clockwork Orange',
        directors: ['Stanley Kubrick'],
        link: 'https://www.imdb.com/title/tt0066921/?ref_=nv_sr_srsg_0',
        description: 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn\'t go as planned.',
        writers: ['Stanley Kubrick(screenplay)', 'Anthony Burgess(novel)'],
        stars: ['Malcolm McDowell', 'Patrick Magee', 'Michael Bates'],
        rate: 8.3,
        genres: [genres.horror, genres.thriller]
    },
    {
        id: 11,
        title: 'Fargo',
        cover: 'https://i.pinimg.com/originals/74/0c/cb/740ccb4e833332560416a67ec2207479.jpg',
        alt: 'Fargo',
        directors: ['Ethan Coen'],
        link: 'https://www.imdb.com/title/tt0116282/?ref_=nv_sr_srsg_3',
        description: 'Minnesota car salesman Jerry Lundegaard\'s inept crime falls apart due to his and his henchmen\'s bungling and the persistent police work of the quite pregnant Marge Gunderson.',
        writers: ['Ethan Coen', 'Joel Coen'],
        stars: ['William H. Macy', 'Frances McDormand', 'Steve Buscemi'],
        rate: 8.1,
        genres: [genres.thriller, genres.comedy]
    },
    {
        id: 12,
        title: 'No Country for Old Men',
        cover: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg',
        alt: 'No Country for Old Men',
        directors: ['Ethan Coen', 'Joel Coen'],
        link: 'https://www.imdb.com/title/tt0477348/?ref_=nv_sr_srsg_0',
        description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
        writers: ['Joel Coen(screenplay)', 'Ethan Coen(screenplay)', 'Cormac McCarthy(novel)'],
        stars: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        rate: 8.2,
        genres: [genres.drama, genres.thriller]
    },
    {
        id: 13,
        title: 'No Country for Old Men',
        cover: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg',
        alt: 'No Country for Old Men',
        directors: ['Ethan Coen', 'Joel Coen'],
        link: 'https://www.imdb.com/title/tt0477348/?ref_=nv_sr_srsg_0',
        description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
        writers: ['Joel Coen(screenplay)', 'Ethan Coen(screenplay)', 'Cormac McCarthy(novel)'],
        stars: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        rate: 8.2,
        genres: [genres.drama, genres.thriller]
    },
    {
        id: 14,
        title: 'No Country for Old Men',
        cover: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg',
        alt: 'No Country for Old Men',
        directors: ['Ethan Coen', 'Joel Coen'],
        link: 'https://www.imdb.com/title/tt0477348/?ref_=nv_sr_srsg_0',
        description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
        writers: ['Joel Coen(screenplay)', 'Ethan Coen(screenplay)', 'Cormac McCarthy(novel)'],
        stars: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        rate: 8.2,
        genres: [genres.drama, genres.thriller]
    },
    {
        id: 15,
        title: 'No Country for Old Men',
        cover: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg',
        alt: 'No Country for Old Men',
        directors: ['Ethan Coen', 'Joel Coen'],
        link: 'https://www.imdb.com/title/tt0477348/?ref_=nv_sr_srsg_0',
        description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
        writers: ['Joel Coen(screenplay)', 'Ethan Coen(screenplay)', 'Cormac McCarthy(novel)'],
        stars: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        rate: 8.2,
        genres: [genres.drama, genres.thriller]
    },
    {
        id: 16,
        title: 'No Country for Old Men',
        cover: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg',
        alt: 'No Country for Old Men',
        directors: ['Ethan Coen', 'Joel Coen'],
        link: 'https://www.imdb.com/title/tt0477348/?ref_=nv_sr_srsg_0',
        description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
        writers: ['Joel Coen(screenplay)', 'Ethan Coen(screenplay)', 'Cormac McCarthy(novel)'],
        stars: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        rate: 8.2,
        genres: [genres.drama, genres.thriller]
    }
]

const fetchAll = () => new Promise(resolve => {
    setTimeout(() => resolve(films), 2000)
})

const x = {
    fetchAll
}

export default x

export function syncFetchAll() {
    return films
}